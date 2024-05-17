'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType } from '../SheduleContext';


const SelectGoals = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const scheduleContext = useContext(ScheduleContext)
    const [name, setName] = useState('')

    useEffect(() => {
        setName(scheduleContext.schedule.name)
    }, [])

    const getSelectedWeightOpt = () => {
        for (let i = 0; i < 4; i++) {
            if (optsRef.current[i]?.classList.contains('selected')) {
                return i
            }
        }
        return -1
    }

    
    const selectOption = (idx: number) => {
        const clickedOpt = optsRef.current[idx]
        if (clickedOpt?.classList.contains('selected')) {
            // diselect
            clickedOpt.classList.remove('selected')
            clickedOpt.classList.remove('border-blue-500')
            clickedOpt.classList.remove('text-blue-500')
            clickedOpt.classList.remove('font-bold')
            clickedOpt.classList.add('diselected')
            clickedOpt.classList.add('hover:border-gray-600')
        } else {
            // select
                const currentWeightOpt = getSelectedWeightOpt()
                if (currentWeightOpt != -1 && idx < 4) {
                    diselectOpt(currentWeightOpt)
                }
                clickedOpt?.classList.add('selected')
                clickedOpt?.classList.remove('hover:border-gray-600')
                clickedOpt?.classList.add('border-blue-500')
                clickedOpt?.classList.add('text-blue-500')
                clickedOpt?.classList.add('font-bold')
    
                // if (getAmountSelectedOpts() == 3) {
                //     handleSubmit()
                // }
        }
    }

    const diselectOpt = (idx: number) => {
        const clickedOpt = optsRef.current[idx]
        clickedOpt?.classList.remove('selected')
        clickedOpt?.classList.remove('border-blue-500')
        clickedOpt?.classList.remove('text-blue-500')
        clickedOpt?.classList.remove('font-bold')
        clickedOpt?.classList.add('diselected')
        clickedOpt?.classList.add('hover:border-gray-600')
    }

    

    const opts = [
        {
            label: '0.25 kg mỗi tuần', 
            goal: 0.25,
        },
        {
            label: '0.5 kg mỗi tuần', 
            goal: 0.5,
        },
        {
            label: '0.75 kg mỗi tuần', 
            goal: 0.75,
        },
        {
            label: '1 kg mỗi tuần', 
            goal: 1,
        },
        
    ]

    const handleSubmit = () => {
        const selectedWeightOpt = getSelectedWeightOpt()
        if (selectedWeightOpt == -1) {

        } else {
            const weeklyGoal = opts[selectedWeightOpt].goal

            const updateSchedule = {
                ...scheduleContext.schedule,
                weeklyGoal
                
            }
            scheduleContext.setSchedule(updateSchedule)

            router.push(`${CREATE_ACCOUNT}/demographic-2`)
        }
    }



    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[90vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Mục tiêu</div>
                    <div className='text-center mt-5 text-md'>Chọn mục tiêu cân nặng hàng tuần của bạn </div>
                </div>
                <div className='flex flex-col justify-between px-10 mt-8'>
                    <div>
                        {opts.map((opt, index) => (
                            <div
                                key={index}
                                className='w-full tracking-wide h-14 cursor-pointer border-2 text-center text-lg leading-[3.5rem] mb-3 rounded hover:border-gray-600'
                                ref={(el) => optsRef.current[index] = el}
                                onClick={() => selectOption(index)}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>

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

export default SelectGoals;