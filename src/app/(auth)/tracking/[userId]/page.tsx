'use client'

import UserContext from '@/app/UserContext';
import { Dish, Exercise, MealPlan, Schedule, WorkoutExercises } from '@/app/consts/interface';
import { API_PATH } from '@/app/consts/path';
import React, { useContext, useEffect, useState } from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Avatar, Badge, Calendar, Select, Table } from 'antd';
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
    const [similarExercises, setSimilarExercises] = useState<Array<Exercise>>([])
    const [editWorkoutOptions, setEditWorkoutOptions] = useState<Array<DefaultOptionType>>([])

    const [currentDayMeal, setCurrentDayMeal] = useState<Date>()
    const [breakfast, setBreakfast] = useState<Array<Dish>>([])
    const [lunch, setLunch] = useState<Array<Dish>>([])
    const [dinner, setDinner] = useState<Array<Dish>>([])
    const [snack, setSnack] = useState<Array<Dish>>([])


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
        const muscleGroups: Array<string> = []
        similarExercises.forEach((exercise) => {
            if (!muscleGroups.includes(exercise.muscleGroups)) {
                muscleGroups.push(exercise.muscleGroups)
            }
        })
        const options: Array<DefaultOptionType> = []
        muscleGroups.forEach((muscleGroup) => {
            const exercises = similarExercises.filter((ex) => ex.muscleGroups == muscleGroup)
            const currentOpts: Array<DefaultOptionType> = exercises.map((ex) => ({label: ex.name, value: JSON.stringify(ex)}))
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
        if (days) {
            const meals = mealPlans.find(meal => dayjs(new Date(meal.date)).format('DD/MM/YYYY') == value.format('DD/MM/YYYY'));
            const workout = workoutPlans.find(workout => dayjs(new Date(workout.date)).format('DD/MM/YYYY') == value.format('DD/MM/YYYY'))
            if (meals) {
                listData.push({ type: 'warning', content: `Hấp thu ${Math.floor(meals.calo)} calo` });
            }
            if (workout) {
                listData.push({type: 'warning', content: `Cần đốt cháy ${Math.floor(workout.calorieBurned)} calo`})
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
    }

    const changeExercise = (value: any, index: any) => {
        console.log(JSON.parse(value))
        console.log(index)
        const newExercise = savedExercises.map((ex, i) => {
            if (index == i) {
                return JSON.parse(value)
            } else {
                return ex
            }
        })
        console.log(newExercise)
        setSavedExercises(newExercise)
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
        <div className='pt-24 bg-black bg-white-pattern bg-cover px-10'>
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
                                <span className='text-xl font-semibold'>{schedule?.weight}</span><span className='text-xl text-gray-500'>cm</span>
                            </div>
                            <div className='w-1/2 border-l-2 text-center'>
                                <div className='text-lg text-blue-500'>NẶNG</div>
                                <span className='text-xl font-semibold'>{schedule?.height}</span><span className='text-xl text-gray-500'>kg</span>
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
                        <Calendar cellRender={cellRender} />
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
                                <button className='w-28 h-8 rounded-lg border-2'>Thay đổi</button>
                            </div>
                            <div>
                                {breakfast.length > 0 
                                ?
                                <div className='px-2 py-3'>
                                    <div className='text-xl font-semibold'>Bữa sáng</div>
                                    <Table 
                                        columns={tableColumns}
                                        dataSource={breakfast}
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
                                        dataSource={lunch}
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
                                        dataSource={dinner}
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
                                        dataSource={snack}
                                        // dataSource={results}
                                        pagination = {false}

                                    />
                                </div>    
                                :
                                <></>
                                }
                            </div>
                        </div>
                        : 
                        <div className='pt-8 px-5'>
                            <div className='flex justify-between items-center'>
                                <Select 
                                    onChange={changeWorkoutDate}
                                    style={{ width: 150 }}
                                    options={plansDate.map(date => ({label: dayjs(date).format('DD/MM/YYYY'), value: date.toString()}))} />
                                <div className='text-2xl font-semibold'>Tập luyện</div>
                                <div>
                                    {editWorkout 
                                    ?
                                        <div>
                                            <button className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300 mr-3' onClick={() => setEditWorkout(false)}>Lưu</button>                                        
                                            <button className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' onClick={() => setSavedExercises(todayExercises)}>Hủy</button>                                        
                                        </div>
                                    :
                                        <button className='w-28 h-8 rounded-lg border-2 shadow-md hover:bg-blue-100 active:bg-blue-300' onClick={() => setEditWorkout(!editWorkout)}>Thay đổi</button>                                        
                                    }
                                </div>
                            </div>

                            <div className='grid grid-cols-3 gap-6 items-center mt-10 px-3'>
                                {savedExercises
                                ? 
                                savedExercises.map((exercise, index) => (
                                    <div key={index} className='border-2 rounded-xl flex flex-col  mb-3 pb-5'> 
                                        <div className='flex flex-col justify-center'>
                                            <div>{exercise.imageUrl ? <img src={exercise.imageUrl} alt="" className='h-40 rounded-t-lg' /> : <video controls src={exercise.videoUrl} className='w-full rounded-t-lg' onClick={(e) => e.currentTarget.play()} />}</div>
                                            <div className='text-lg font-semibold my-3 px-5'>{exercise.name}</div>
                                            <div className='mb-3 px-5'>{exercise.type == 'gym' ? `${exercise.reps} reps, ${exercise.duration} sets` : `${exercise.reps} vòng / phút, trong 15p` }</div>
                                        </div>
                                        { editWorkout 
                                        ?
                                            <div>
                                                <Select style={{width: '240px', paddingLeft: '1.25rem'}} onChange={(value) => changeExercise(value, index)} options={editWorkoutOptions} />    
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
                        </div>
                    )
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default TrackingUser;