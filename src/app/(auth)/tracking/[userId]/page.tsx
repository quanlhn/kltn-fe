'use client'

import UserContext from '@/app/UserContext';
import { Dish, Exercise, MealPlan, Result1, Schedule, WorkoutExercises } from '@/app/consts/interface';
import { API_PATH } from '@/app/consts/path';
import React, { useContext, useEffect, useState } from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Avatar, Badge, Calendar, InputNumber, Select, Table } from 'antd';
import type { Dayjs } from 'dayjs';
import Header from '@/app/(general)/header';
import dayjs from 'dayjs';
import ReactPlayer from 'react-player'
import { HR_STYLE } from '@/app/consts/className';
import { ScheduleOutlined } from '@ant-design/icons';
import { CgGym } from "react-icons/cg";
import { GiMeal } from "react-icons/gi";
import { GiStairsGoal } from "react-icons/gi";
import { DefaultOptionType } from 'antd/es/select';
import { useRouter } from 'next/navigation';
import SelectFood from './selectFood';
import SelectDish from './selectDish';
import { Result } from '@/app/consts/interface';


const TrackingUser = () => {

    const [isUserLoggin, setUserLoggin] = useState(false)
    const [scheduleId, setScheduleId] = useState('')
    const [schedule, setSchedule] = useState<Schedule>()
    const [mealPlans, setMealPlans] = useState<Array<MealPlan>>([])
    const [workoutPlans, setWorkoutPlans] = useState<Array<WorkoutExercises>>([])

    const [plansDate, setPlansDate] = useState<Array<Date>>([])
    const [currentDayWorkout, setCurrentDayWorkout] = useState<Date>()
    const [todayExercises, setTodayExercises] = useState<Array<Exercise>>([])
    const [savedExercises, setSavedExercises] = useState<Array<Exercise>>([])
    const [editWorkout, setEditWorkout] = useState(false)
    const [editMeal, setEditMeal] = useState(false)
    const [similarExercises, setSimilarExercises] = useState<Array<Exercise>>([])
    const [editWorkoutOptions, setEditWorkoutOptions] = useState<Array<DefaultOptionType>>([])

    const [currentDayMeal, setCurrentDayMeal] = useState<Date>()
    const [breakfast, setBreakfast] = useState<Array<Dish>>([])
    const [savedBreakfast, setSavedBreakfast] = useState<Array<Dish>>([])
    const [lunch, setLunch] = useState<Array<Dish>>([])
    const [savedLunch, setSavedLunch] = useState<Array<Dish>>([])
    const [dinner, setDinner] = useState<Array<Dish>>([])
    const [savedDinner, setSavedDinner] = useState<Array<Dish>>([])
    const [snack, setSnack] = useState<Array<Dish>>([])
    const [savedSnack, setSavedSnack] = useState<Array<Dish>>([])

    const [savedDishes, setSavedDishes] = useState<Array<Result>>([])
    const [savedFoods, setSavedFoods] = useState<Array<Result1>>([])

    const [diaryWorkout, setDiaryWorkout] = useState([{
        date: new Date(),
        workoutExercises: [],
        workoutCalories: 0
    }])

    const [diaryMeal, setDiaryMeal] = useState([{
        date: new Date(),
        mealPlan: [],
        workoutExercises: [],
        calo: 0,
        carbohydrat: 0,
        lipit: 0,
        protein: 0,
        fiber: 0

    }])


    const [tab, setTab] = useState(1)

    const router = useRouter()
    
    const userContext = useContext(UserContext)
    const defaultUser = {
        userID: 0,
        name: '',
        phoneNumber: '',
        email: '',
        role:'',
        gender: '',
        birth: '',
        isLoggedIn: false,
    }
    const [userStorage, setUserStorage] = useState(defaultUser)

    if (typeof window !== 'undefined') {
        useEffect(() => {
            if (typeof (Storage) !== undefined && localStorage.user) {
                setUserStorage(() => JSON.parse(localStorage.user)   )
                if (!userContext.user.isLoggedIn) {
                    userContext.setUser(JSON.parse(localStorage.user))
                }

                setScheduleId(JSON.parse(localStorage.user).schedule)


            } else {
                router.push('/tracking/create-account/welcome')
            }
        }, [localStorage['user']])
    }

    useEffect(() => {
        const fetchSchedule = async () => {
            if (scheduleId) {
                try {
                    const response = await fetch(`${API_PATH}schedule/getSchedule`, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ scheduleId })
                    });
                    const data = await response.json();
                    setSchedule(data.schedule[0]);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        fetchSchedule();
    }, [scheduleId]);

    // useEffect(() => {
    //     if (schedule?.days) {
    //         for (let day of schedule.days) {
    //             fetch(`${API_PATH}mealPlan/getMealPlan`, {
    //                 method: 'POST',
    //                 mode: 'cors', 
    //                 headers: {
    //                     'Content-Type': 'application/json'
                        
    //                 },
    //                 body: JSON.stringify({
    //                     mealsId: day.mealPlan
    //                 })
    //             })
    //             .then(response => response.json())
    //             .then(data => {
    //                 const meals = data.meals[0]
    //                 setMealPlans(() => {
    //                     const newMealPlans = mealPlans
    //                     newMealPlans.push(meals)
    //                     return newMealPlans
    //                 })
    //             })
    //         }
    //     }
    // }, [schedule])

    useEffect(() => {
        const fetchMealPlans = async () => {
            if (schedule?.days) {
                const newMealPlans = [];
                for (let day of schedule.days) {
                    try {
                        const response = await fetch(`${API_PATH}mealPlan/getMealPlan`, {
                            method: 'POST',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ mealsId: day.mealPlan })
                        });
                        const data = await response.json();
                        newMealPlans.push(data.meals[0]);
                    } catch (err) {
                        console.log(err);
                    }
                }
                setMealPlans(newMealPlans);
            }
        };

        const fetchWorkoutPlans = async () => {
            if (schedule?.days) {
                const newWorkoutPlan = [];
                for (let day of schedule.days) {
                    if (day.workoutExercises) {
                        try {
                            const response = await fetch(`${API_PATH}workout/getWorkoutExercises`, {
                                method: 'POST',
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ workoutId: day.workoutExercises })
                            });
                            const data = await response.json();
                            newWorkoutPlan.push(data.workouts[0]);
                        } catch (err) {
                            console.log(err);
                        }
                    }
                }
                setWorkoutPlans(newWorkoutPlan);
            }

        }

        if (schedule?.days) {
            const newScheduleDays: Array<Date> = []
            schedule.days.forEach((day) => {
                newScheduleDays.push(new Date(day.date))
            })
            setPlansDate(newScheduleDays)
        }

        const fetchDairyWorkout = async () => {
            fetch(`${API_PATH}diary/getDairyWorkout`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    userId: userStorage.userID
                })
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.diaryWorkout.length > 0 ) {
                    setDiaryWorkout(data.diaryWorkout[0].days)
                    
                }
            })
        }

        const fetchDairyMeal = async () => {
            fetch(`${API_PATH}diary/getDairyMeal`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    userId: userStorage.userID
                })
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.diaryMeals.length > 0) {
                    setDiaryMeal(data.diaryMeals[0].days)

                }
            })
        }
        
        fetchDairyMeal()
        fetchDairyWorkout()
        fetchWorkoutPlans();
        fetchMealPlans();
    }, [schedule]);

    useEffect(() => {
        const fetchTodayWorkout = async () => {
            if (currentDayWorkout && workoutPlans) {
                const work = workoutPlans.find(workout => dayjs(new Date(workout.date)).format('DD/MM/YYYY') == dayjs(currentDayWorkout).format('DD/MM/YYYY'))
                if (work) {
                    const currentEx: Array<Exercise> = []
                    for (let id of work.exerciseID) {
                        try {
                            const response = await fetch(`${API_PATH}workout/getExercises`, {
                                method: 'POST',
                                mode: 'cors',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ exerciseId: id })
                            });
                            const data = await response.json();
                            currentEx.push(data.exercise[0]);
                        } catch (err) {
                            console.log(err);
                        }
                    }
                    setTodayExercises(currentEx)
                    console.log(todayExercises)
                    setSavedExercises(currentEx)
                }
            }
        }

        fetchTodayWorkout()
    }, [currentDayWorkout])

    useEffect(() => {
        const fetchTodayMeal = async () => {
            if (currentDayMeal && mealPlans) {
                const meal = mealPlans.find(meal => dayjs(new Date(meal.date)).format('DD/MM/YYYY') == dayjs(currentDayMeal).format('DD/MM/YYYY'))
                if (meal) {
                    const todayBreakfast: Array<Dish> = []
                    const todayLunch: Array<Dish> = []
                    const todayDinner: Array<Dish> = []
                    const todaySnack: Array<Dish> = []
                    console.log(meal)
                    for (let c_meal of meal.meals) {
                        for (let dish of c_meal.dishes ) {
                            try {
                                const response = await fetch(`${API_PATH}calories-calculate/getDishById`, {
                                    method: 'POST',
                                    mode: 'cors',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ dishId: dish.id })
                                });
                                const data = await response.json();
                                const newDish: Dish = {
                                    ten: data.dish[0].ten,
                                    don_vi_tinh:  data.dish[0].don_vi_tinh,
                                    loai:  data.dish[0].loai,
                                    calo: data.dish[0].calo,
                                    protein: data.dish[0].protein,
                                    lipit: data.dish[0].lipit,
                                    carbohydrat: data.dish[0].carbohydrat,
                                    fiber: data.dish[0].fiber,
                                    realAmount: dish.amount
                                } 

                                switch (c_meal.name) {
                                    case 'breakfast': 
                                        todayBreakfast.push(newDish)
                                        break
                                    case 'lunch':
                                        todayLunch.push(newDish)
                                        break
                                    case 'dinner':
                                        todayDinner.push(newDish)
                                        break
                                    case 'snack':
                                        todaySnack.push(newDish)
                                        break
                                }

                            } catch (err) {
                                console.log(err);
                            }
                        }
                    }
                    setBreakfast(todayBreakfast)
                    setLunch(todayLunch)
                    setDinner(todayDinner)
                    setSnack(todaySnack)
                    setSavedBreakfast(todayBreakfast)
                    setSavedLunch(todayLunch)
                    setSavedDinner(todayDinner)
                    setSavedSnack(todaySnack)
                }
            }
        }

        fetchTodayMeal()
    }, [currentDayMeal])

    useEffect(() => {
        const fetchSimilarWorkout = async () => {
            if (todayExercises && editWorkout) {
                const exTypes: Array<string> = []
                todayExercises.forEach((ex) => {
                    if (!exTypes.includes(ex.type)) {
                        exTypes.push(ex.type)  
                    }
                })
                // console.log(exTypes)
                try {
                    const response = await fetch(`${API_PATH}workout/getExercisesByTypes`, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            types: exTypes,
                        })
                    });
                    const data = await response.json();
                    setSimilarExercises(data.exercises)
                } catch (err) {
                    console.log(err);
                }
            }
        }

        fetchSimilarWorkout()
    }, [editWorkout])

    useEffect(() => {
        console.log(savedBreakfast)
        console.log(savedLunch)
        console.log(savedDinner)
        console.log(savedSnack)
    }, [editMeal])

    useEffect(() => {
        const muscleGroups: Array<string> = []
        similarExercises.forEach((exercise) => {
            if (!muscleGroups.includes(exercise.muscleGroups)) {
                muscleGroups.push(exercise.muscleGroups)
            }
        })
        const options: Array<DefaultOptionType> = []
        muscleGroups.forEach((muscleGroup) => {
            const exercises = similarExercises.filter((ex) => ex.muscleGroups == muscleGroup)
            const currentOpts: Array<DefaultOptionType> = exercises.map((ex) => {
                if (ex.category == 'endurance') {
                    return {label: ex.name + ` (${ex.reps} / phút)`, value: JSON.stringify(ex)}
                } else {
                    return {label: ex.name, value: JSON.stringify(ex)}
                }
            })
            
            options.push({
                label: <span>{muscleGroup}</span>,
                title: muscleGroup,
                options: currentOpts
            })
        })
        setEditWorkoutOptions(options)
    }, [similarExercises])

    const getListData = (value: Dayjs) => {
        const days = schedule?.days;
        let listData: { type: string; content: string; }[] = [];
        // console.log(diaryMeal)
        if (days) {
            // const meals = mealPlans ? mealPlans.find(meal => dayjs(new Date(meal.date)).format('DD/MM/YYYY') == value.format('DD/MM/YYYY')): null;
            const workout = workoutPlans.find(workout => dayjs(new Date(workout.date)).format('DD/MM/YYYY') == value.format('DD/MM/YYYY'))
            const doneWorkout = diaryWorkout.find(workout => dayjs(new Date(workout.date)).format('DD/MM/YYYY') == value.format('DD/MM/YYYY'))
            // const doneMeal = diaryMeal.find(meal => dayjs(new Date(meal.date)).format('DD/MM/YYYY') == value.format('DD/MM/YYYY'))
            // if (meals) {
            //     listData.push({ type: 'warning', content: `Cần hấp thu ${Math.floor(meals.calo)} calo` });
            // }
            // if (doneMeal) {
            //     listData.push({ type: 'success', content: `Đã hấp thu ${Math.floor(doneMeal.calo)} calo` });
            // }
            if (workout) {
                listData.push({type: 'warning', content: `Cần tập hết ${Math.floor(workout.calorieBurned)} calo`})
            }
            if (doneWorkout) {
                listData.push({type: 'success', content: `Đã đốt cháy ${Math.floor(doneWorkout.workoutCalories)} calo`})

            }
        }
        return listData;
    };

    const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
        return 1394;
    }
    };

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
    };  
    
    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    const changeWorkoutDate = (value: any) => {
        setCurrentDayWorkout(new Date(value))
        setEditWorkout(false)
    }

    const changeMealDate = (value: any) => {
        setCurrentDayMeal(new Date(value))
        setEditMeal(false)
    }

    const changeExercise = (value: any, index: any, type: string) => {
        // console.log(JSON.parse(value))
        // console.log(index)
        if (type == 'name') {
            const newExercise = savedExercises.map((ex, i) => {
                if (index == i) {
                    return JSON.parse(value)
                } else {
                    return ex
                }
            })
            // console.log(newExercise)
            setSavedExercises(newExercise)
        } else if (type == 'reps') {
            const newExercise = savedExercises.map((ex, i) => {
                if (index == i) {
                    const newDuration = value * ex.duration / ex.reps
                    return {
                        ...ex,
                        reps: value,
                        duration: newDuration
                    }
                } else {
                    return ex
                }
            })
            setSavedExercises(newExercise)
        } else if (type == 'duration') {
            const newExercise = savedExercises.map((ex, i) => {
                if (index == i) {
                    return {
                        ...ex,
                        duration: value
                    }
                } else {
                    return ex
                }
            })
            setSavedExercises(newExercise)
        }
    }

    const saveTodayWorkout = () => {
        const totalDuration = savedExercises.reduce((accumulator, currentEx) => {
            if (currentEx.category == 'strength') return accumulator + currentEx.duration * 3
            else if (currentEx.category == 'endurance') return accumulator + (currentEx.duration == 1 ? 20 : currentEx.duration)
            else return accumulator + 1
        }, 0)
        const userWeight = schedule ? schedule.weight : 0
        const totalCalo = savedExercises.reduce((accumulator, currentEx) => {
            if (currentEx.category == 'strength') return accumulator + (currentEx.duration * 3 * currentEx.met * userWeight / 60)
            else if (currentEx.category == 'endurance') return accumulator + ((currentEx.duration == 1 ? 20 : currentEx.duration) * currentEx.met * userWeight / 60)
                else return accumulator +  (currentEx.met * userWeight / 60)
        }, 0)

        fetch(`${API_PATH}diary/addWorkoutToDiary`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                exercises:  savedExercises,
                calo: totalCalo,
                date: currentDayWorkout,
                userId: userStorage.userID
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    const calculateColorBurned = () => {
        const userWeight = schedule ? schedule.weight : 0
        const totalCalo = savedExercises.reduce((accumulator, currentEx) => {
            if (currentEx.category == 'strength') return accumulator + (currentEx.duration * 3 * currentEx.met * userWeight / 60)
            else if (currentEx.category == 'endurance') return accumulator + ((currentEx.duration == 1 ? 20 : currentEx.duration) * currentEx.met * userWeight / 60)
                else return accumulator +  (currentEx.met * userWeight / 60)
        }, 0)
        return Math.floor(totalCalo)
    }

    const calculateCaloIntake = () => {
        const breakfastCalo = breakfast.reduce((accumulator, currentMeal) => accumulator + currentMeal.calo, 0)
        const lunchCalo = lunch.reduce((accumulator, currentMeal) => accumulator + currentMeal.calo, 0)
        const dinnerCalo = dinner.reduce((accumulator, currentMeal) => accumulator + currentMeal.calo, 0)
        const snackCalo = snack.reduce((accumulator, currentMeal) => accumulator + currentMeal.calo, 0)
        return breakfastCalo + lunchCalo + dinnerCalo + snackCalo
    }

    const saveTodayMeal = () => {
        if (editMeal) {
            console.log(savedFoods)
            console.log(savedDishes)
            const foods = savedFoods.map(f => ({
                ten: f.ten, 
                calo: f.calo, 
                carbohydrat: f.carbohydrat, 
                amount: f.amount, 
                lipit: f.lipit,
                protein: f.protein,
                fiber: f.fiber
              }))
            const dishes = savedDishes.map(f => ({
                ten: f.ten, 
                calo: f.calo, 
                carbohydrat: f.carbohydrat, 
                amount: f.amount, 
                lipit: f.lipit,
                protein: f.protein,
                fiber: f.fiber
              }))
              const savedData = foods.concat(dishes)
              const totalCalo = savedData.reduce((total, f) => total + f.calo, 0)
              const carbohydrat = savedData.reduce((total, f) => total + f.carbohydrat, 0)
              const lipit = savedData.reduce((total, f) => total + f.lipit, 0)
              const protein = savedData.reduce((total, f) => total + f.protein, 0)
              const fiber = savedData.reduce((total, f) => total + f.fiber, 0)
              fetch(`${API_PATH}diary/addMealToDiary`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    foods:  savedData,
                    calo: totalCalo,
                    date: currentDayMeal,
                    userId: userStorage.userID,
                    carbohydrat,
                    lipit,
                    protein,
                    fiber,
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        } else {
            const dishes = breakfast.concat(lunch.concat(dinner.concat(snack)))
            const totalCalo = dishes.reduce((total, f) => total + f.calo, 0)
            const carbohydrat = dishes.reduce((total, f) => total + f.carbohydrat, 0)
            const lipit = dishes.reduce((total, f) => total + f.lipit, 0)
            const protein = dishes.reduce((total, f) => total + f.protein, 0)
            const fiber = dishes.reduce((total, f) => total + f.fiber, 0)
            fetch(`${API_PATH}diary/addMealToDiary`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    foods:  dishes,
                    calo: totalCalo,
                    date: currentDayMeal,
                    userId: userStorage.userID,
                    carbohydrat,
                    lipit,
                    protein,
                    fiber,
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


        }
        return 1
    }

    const tableColumns = [
        {
            title: 'Thực phẩm',
            dataIndex: 'ten',
            key: 'ten',
        },
        {
            title: 'Số lượng',
            dataIndex: 'realAmount',
            key: 'realAmount',
        },
        {
            title: 'Đường/bột',
            dataIndex: 'carbohydrat',
            key: 'carbohydrat',
        },
        {
            title: 'Chất xơ',
            dataIndex: 'fiber',
            key: 'fiber',
        },
        {
            title: 'Đạm',
            dataIndex: 'protein',
            key: 'protein',
        },
        {
            title: 'Chất béo',
            dataIndex: 'lipit',
            key: 'lipit',
        },
        {
            title: 'Calo',
            dataIndex: 'calo',
            key: 'calo',
        }
    ]


    return (
        <div className='pt-10 bg-black bg-white-pattern bg-cover px-10'>
            <div className='flex'>
                <div className='w-1/5 bg-white h-[80vh] rounded-2xl mx-3 pt-5 px-6'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <Avatar style={{width:'100px', height:'100px', backgroundColor: '#f56a00'}} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                            <div className='mt-3 ml-1 text-2xl font-semibold'>{userContext.user.name}</div>
                            <div className='mt-1 ml-1 text-gray-500'>{userContext.user.gender == 'male' ? 'Nam' : 'Nữ'} | {(new Date()).getFullYear() - (new Date(userContext.user.birth)).getFullYear()} tuổi</div>
                        </div>
                        <div className='flex w-full pr-2 my-6'>
                            <div className='w-1/2 border-r-2 text-center'>
                                <div className='text-lg text-blue-500'>CAO</div>
                                <span className='text-xl font-semibold'>{schedule?.height}</span><span className='text-xl text-gray-500'>cm</span>
                            </div>
                            <div className='w-1/2 border-l-2 text-center'>
                                <div className='text-lg text-blue-500'>NẶNG</div>
                                <span className='text-xl font-semibold'>{schedule?.weight}</span><span className='text-xl text-gray-500'>kg</span>
                            </div>
                        </div>
                    </div>
                    <hr className='border-b-1 mt-5 mb-10' />
                    <div className='text-xl font-semibold tracking-wide mt-3 cursor-pointer flex items-center' onClick={() => setTab(1)}><ScheduleOutlined className='mr-6'/> Theo dõi</div>
                    <div className='text-xl font-semibold tracking-wide mt-3 cursor-pointer flex items-center' onClick={() => setTab(2)}><GiMeal className='mr-6'/> Dinh dưỡng</div>
                    <div className='text-xl font-semibold tracking-wide mt-3 cursor-pointer flex items-center' onClick={() => setTab(3)}><CgGym className='mr-6'/> Tập luyện</div>
                    <div className='text-xl font-semibold tracking-wide mt-3 cursor-pointer flex items-center' onClick={() => setTab(4)}><GiStairsGoal className='mr-6'/> Mục tiêu</div>
                </div>
                <div className='w-4/5 mx-3 bg-white'>
                    {tab == 1 
                    ?
                    <div>
                        <Calendar cellRender={cellRender} />

                    </div>
                    :   
                    (
                        tab == 2 
                        ?
                        <div className='pt-8 px-10'>
                            <div className='flex justify-between'>
                                <Select 
                                    onChange={changeMealDate}
                                    style={{ width: 150 }}
                                    options={plansDate.map(date => ({label: dayjs(date).format('DD/MM/YYYY'), value: date.toString()}))} />
                                <div className='text-2xl font-semibold'>Thực đơn</div>
                                <div>
                                    {editMeal 
                                    ?
                                        <div>
                                            <button 
                                                className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300 mr-3' 
                                                onClick={saveTodayMeal}
                                            >
                                                Lưu
                                            </button>                                        
                                            <button 
                                                className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' 
                                                onClick={() => {setSavedExercises(todayExercises); setEditMeal(false)}}
                                            >
                                                Hủy
                                            </button>                                        
                                        </div>
                                    :
                                        <div>
                                            <button className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' onClick={saveTodayMeal}>Lưu</button>                                        
                                            <button className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' onClick={() => setEditMeal(!editMeal)}>Thay đổi</button>                                        
                                        </div>
                                    }
                                </div>
                            </div>
                            <div>
                            {editMeal 
                            ?
                            <div className='mt-5'>
                                <div>
                                    <div className='text-xl font-semibold'>Chọn thực phẩm</div>
                                    <SelectFood setSavedFoods={setSavedFoods} />
                                </div>
                                <div className='mt-5'>
                                    <div className='text-xl font-semibold'>Chọn món ăn</div>
                                    <SelectDish setSavedDishes={setSavedDishes} />
                                </div>

                            </div>
                            :
                            <div>
                                <div className='pt-5 italic'>Tổng: {calculateCaloIntake()} kcal</div>
                                {savedBreakfast.length > 0 
                                ?
                                <div className='px-2 py-3'>
                                    <div className='text-xl font-semibold'>Bữa sáng</div>
                                    <Table 
                                        columns={tableColumns}
                                        dataSource={savedBreakfast.map((meal => ({ten: meal.ten, realAmount: meal.realAmount, carbohydrat: meal.carbohydrat * meal.realAmount, fiber: meal.fiber * meal.realAmount, lipit: meal.lipit * meal.realAmount, protein: meal.protein * meal.realAmount, calo: meal.calo * meal.realAmount,})))}
                                        // dataSource={results}
                                        pagination = {false}

                                    />
                                    

                                </div>    
                                :
                                <></>
                                }
                                {lunch.length > 0 
                                ?
                                <div className='px-2 py-3'>
                                    <div className='text-xl font-semibold'>Bữa trưa</div>
                                    <Table 
                                        columns={tableColumns}
                                        dataSource={lunch.map((meal => ({ten: meal.ten, realAmount: meal.realAmount, carbohydrat: meal.carbohydrat * meal.realAmount, fiber: meal.fiber * meal.realAmount, lipit: meal.lipit * meal.realAmount, protein: meal.protein * meal.realAmount, calo: meal.calo * meal.realAmount,})))}
                                        // dataSource={results}
                                        pagination = {false}

                                    />
                                </div>    
                                :
                                <></>
                                }
                                {dinner.length > 0 
                                ?
                                <div className='px-2 py-3'>
                                    <div className='text-xl font-semibold'>Bữa tối</div>
                                    <Table 
                                        columns={tableColumns}
                                        dataSource={dinner.map((meal => ({ten: meal.ten, realAmount: meal.realAmount, carbohydrat: meal.carbohydrat * meal.realAmount, fiber: meal.fiber * meal.realAmount, lipit: meal.lipit * meal.realAmount, protein: meal.protein * meal.realAmount, calo: meal.calo * meal.realAmount,})))}
                                        // dataSource={results}
                                        pagination = {false}

                                    />
                                </div>    
                                :
                                <></>
                                }
                                {snack.length > 0 
                                ?
                                <div className='px-2 py-3'>
                                    <div className='text-xl font-semibold'>Bữa phụ</div>
                                    <Table 
                                        columns={tableColumns}
                                        dataSource={snack.map((meal => ({ten: meal.ten, realAmount: meal.realAmount, carbohydrat: meal.carbohydrat * meal.realAmount, fiber: meal.fiber * meal.realAmount, lipit: meal.lipit * meal.realAmount, protein: meal.protein * meal.realAmount, calo: meal.calo * meal.realAmount,})))}
                                        // dataSource={results}
                                        pagination = {false}

                                    />
                                </div>    
                                :
                                <></>
                                }
                            </div>
                            }
                            </div>
                        </div>
                        : 
                        <div className='pt-8 px-5 pb-10 flex flex-col items-center'>
                            <div className='flex w-full justify-between items-center'>
                                <Select 
                                    onChange={changeWorkoutDate}
                                    style={{ width: 150 }}
                                    options={plansDate.map(date => ({label: dayjs(date).format('DD/MM/YYYY'), value: date.toString()}))} />
                                <div className='text-2xl font-semibold'>Tập luyện</div>
                                <div>

                                    {editWorkout 
                                    ?
                                        <div>
                                            <button 
                                                className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300 mr-3' 
                                                onClick={() => setEditWorkout(false)}
                                            >
                                                Lưu
                                            </button>                                        
                                            <button 
                                                className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' 
                                                onClick={() => {setSavedExercises(todayExercises); setEditWorkout(false)}}
                                            >
                                                Hủy
                                            </button>                                        
                                        </div>
                                    :
                                        <button className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' onClick={() => setEditWorkout(!editWorkout)}>Thay đổi</button>                                        
                                    }
                                </div>
                            </div>
                            
                            <div className='mt-5 w-full text-left italic'>Đốt cháy {calculateColorBurned()} kcal</div>
                            <div className='grid grid-cols-3 gap-6 items-center mt-10 px-3'>
                                {savedExercises
                                ? 
                                savedExercises.map((exercise, index) => (
                                    <div key={index} className='border-2 rounded-xl flex flex-col  mb-3 pb-5'> 
                                        <div className='flex flex-col justify-center items-center'>
                                            <div>{exercise.imageUrl ? <img src={exercise.imageUrl} alt="" className='h-40 rounded-t-lg' /> : <video controls src={exercise.videoUrl} className='w-full rounded-t-lg' onClick={(e) => e.currentTarget.play()} />}</div>
                                            <div className='w-full'>
                                                <div className='text-lg font-semibold my-3 px-5'>{exercise.name}</div>
                                                <div className='mb-3 px-5'>{exercise.type == 'gym' ? `${exercise.reps} reps, 3 sets` : `${exercise.reps} vòng / phút, trong ${exercise.duration == 1 ? 20 : exercise.duration} phút` }</div>
                                            </div>
                                        </div>
                                        { editWorkout 
                                        ?
                                            <div>
                                                <Select 
                                                    style={{width: '240px', paddingLeft: '1.25rem'}} 
                                                    onChange={(value) => changeExercise(value, index, 'name')} 
                                                    options={editWorkoutOptions} 
                                                    defaultValue={exercise.name}
                                                />
                                                <div className='flex justify-between px-[1.25rem] mt-3'>
                                                    {exercise.category == 'strength'
                                                    ?
                                                    <InputNumber 
                                                        onChange={(value) => changeExercise(value, index, 'reps')}  
                                                        style={{width: '120px'}} 
                                                        addonAfter="reps/set" 
                                                        defaultValue={10}
                                                    />
                                                    :
                                                    <InputNumber 
                                                        onChange={(value) => changeExercise(value, index, 'duration')}  
                                                        style={{width: '120px'}} 
                                                        addonAfter="phút" 
                                                        defaultValue={20}
                                                    />

                                                    }
                                                </div>
                                            </div>
                                        :
                                            <></>   
                                        }
                                    </div>
                                ))
                                : 
                                <></>
                                }
                            </div>
                            {savedExercises ?
                            <div>
                                <button 
                                    onClick={saveTodayWorkout}
                                    className='px-5 py-3 mt-5 bg-blue-400 hover:bg-blue-300 active:bg-blue-600 shadow-lg rounded-xl'
                                >
                                        Đã tập và lưu các bài trên
                                </button>
                            </div>
                            :
                            <></>

                            }
                        </div>
                    )
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default TrackingUser;