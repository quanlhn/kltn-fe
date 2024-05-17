'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType } from '../SheduleContext';


const Results = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const scheduleContext = useContext(ScheduleContext)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log(JSON.stringify({
            name: scheduleContext.schedule.name,
            phoneNumber: scheduleContext.schedule.phoneNumber,
            email: scheduleContext.schedule.email,
            gender: scheduleContext.schedule.gender, 
            birth: scheduleContext.schedule.birth,
            goalsLv1: scheduleContext.schedule.goalsLv1,
            goalsLv2: scheduleContext.schedule.goalsLv2,
            goalsLv3: scheduleContext.schedule.goalsLv3,
            barriersLv: scheduleContext.schedule.barriersLv.map((b) => b.value),
            wishes: scheduleContext.schedule.wishes.map((w) => w.value),
            baseActivity: scheduleContext.schedule.baseActivity,
            stepsPerDay: scheduleContext.schedule.stepsPerDay,
            height: scheduleContext.schedule.height,
            weight: scheduleContext.schedule.weight,
            goalWeight: scheduleContext.schedule.goalWeight,
            weeklyGoal: scheduleContext.schedule.weeklyGoal,
            levelExercise: scheduleContext.schedule.levelExercise,
            daysPerWeek: scheduleContext.schedule.daysPerWeek,
            periods: scheduleContext.schedule.periods,
            availableExercises: scheduleContext.schedule.availableExercises,
        }))
        fetch('http://localhost:8080/api/schedule/generateSchedule', {
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                name: scheduleContext.schedule.name,
                phoneNumber: scheduleContext.schedule.phoneNumber,
                email: scheduleContext.schedule.email,
                gender: scheduleContext.schedule.gender, 
                birth: scheduleContext.schedule.birth,
                goalsLv1: scheduleContext.schedule.goalsLv1,
                goalsLv2: scheduleContext.schedule.goalsLv2,
                goalsLv3: scheduleContext.schedule.goalsLv3,
                barriersLv: scheduleContext.schedule.barriersLv.map((b) => b.value),
                wishes: scheduleContext.schedule.wishes.map((w) => w.value),
                baseActivity: scheduleContext.schedule.baseActivity,
                stepsPerDay: scheduleContext.schedule.stepsPerDay,
                height: scheduleContext.schedule.height,
                weight: scheduleContext.schedule.weight,
                goalWeight: scheduleContext.schedule.goalWeight,
                weeklyGoal: scheduleContext.schedule.weeklyGoal,
                levelExercise: scheduleContext.schedule.levelExercise,
                daysPerWeek: scheduleContext.schedule.daysPerWeek,
                periods: scheduleContext.schedule.periods,
                availableExercises: scheduleContext.schedule.availableExercises,
            })
        })
        .then(response => response.json())
        .then()
    }, [])

    const handleSubmit = () => {

    }



    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[90vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Kết quả</div>
                    <div className='text-center mt-5 text-md'></div>
                </div>
                <div className='flex flex-col justify-between px-10 mt-8'>
                    

                    <div className='flex justify-between absolute w-[85%] bottom-6'>
                        <button
                            onClick={() => router.back()}
                            className='text-2xl w-44 h-16 bg-white hover:bg-slate-100 font-semibold tracking-wide text-blue-500 border-blue-500 border-2 rounded-xl '
                        >
                            Quay lại
                        </button>
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='text-2xl w-44 h-16 bg-blue-500 hover:bg-blue-700 font-semibold tracking-wide text-white rounded-xl'
                        >
                            Tiếp tục
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Results;