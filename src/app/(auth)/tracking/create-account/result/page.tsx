'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType } from '../SheduleContext';
import Password from 'antd/es/input/Password';


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
            password: scheduleContext.schedule.password,
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
        
    }, [])

    const handleSubmit = () => {
        router.push('/login-signup')
    }



    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[70vh] flex flex-col justify-between rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Lập kế hoạch thành công</div>
                    <div className='text-center mt-5 text-md'>Cảm ơn bạn đã tin tưởng lựa chọn 
                        <span className='text-[#0066ee] font-serif font-semibold text-lg'> healthcare </span>
                    </div>
                    <div className='text-center mt-5 text-md'>Một kế hoạch dinh dưỡng và tập luyện đã được tạo cho bạn</div>
                    <div className='text-center mt-5 text-md'>Đăng nhập để xem chi tiết</div>
                </div>
                
                    

                <div className='flex w-full justify-center mb-10'>
                    <button
                        type='submit'
                        onClick={handleSubmit}
                        className='text-2xl w-44 h-16 bg-blue-500 hover:bg-blue-700 font-semibold tracking-wide text-white rounded-xl'
                    >
                        Đăng nhập
                    </button>
                </div>
                


            </div>
        </div>
    );
};

export default Results;