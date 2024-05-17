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

    const handleSubmit = () => {
        console.log('hihi')
        const selectedWeightOpt = getSelectedWeightOpt()
        if (selectedWeightOpt == -1) {

        } else {
            // const goalsLv1 = selectedWeightOpt == 0 ? GOALSLV1 : (selectedWeightOpt == 2 ? GOALSLV2 : GOALSLV3)
            let goalsLv2 = {goal: '', label: '', level: 2}
            let goalsLv3 = {goal: '', label: '', level: 2}
            for (let i = selectedWeightOpt + 1; i < 6; i++) {
                if (optsRef.current[i]?.classList.contains('selected')) {
                    if (goalsLv2.label == '') {
                        goalsLv2 = opts[i]
                    } else {
                        goalsLv3 = opts[i]
                    }
                }
            }

            const updateSchedule = {
                ...scheduleContext.schedule,
                goalsLv1: opts[selectedWeightOpt],
                goalsLv2,
                goalsLv3,
            }
            scheduleContext.setSchedule(updateSchedule)
            router.push(`${CREATE_ACCOUNT}/goals/big-step`)


        }
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
            if (getAmountSelectedOpts() <= 2) {
                const currentWeightOpt = getSelectedWeightOpt()
                if (currentWeightOpt != -1 && idx < 3) {
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

    const getAmountSelectedOpts = () => {
        let count = 0
        for (let ref of optsRef.current) {
            if (ref?.classList.contains('selected')) {
                count++
            }
        }
        return count
    }

    const getSelectedWeightOpt = () => {
        for (let i = 0; i < 3; i++) {
            if (optsRef.current[i]?.classList.contains('selected')) {
                return i
            }
        }
        return -1
    }

    const opts: GoalType[] = [
        {
            label: 'Giảm cân', 
            goal: 'lose-weight',
            level: 1
        },
        {
            label: 'Giữ cân', 
            goal: 'maintain-weight',
            level: 1
        },
        {
            label: 'Tăng cân', 
            goal: 'gain-weight',
            level: 1
        },
        {
            label: 'Tăng cơ', 
            goal: 'gain-muscle',
            level: 2
        },
        {
            label: 'Điều chỉnh chế độ ăn', 
            goal: 'modify-diet',
            level: 2
        },
        {
            label: 'Tăng sự linh hoạt', 
            goal: 'gain-flexibility',
            level: 2
        },
    ]


    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[90vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Cảm ơn {name}! Bây giờ đến với mục tiêu của bạn</div>
                    <div className='text-center mt-5 text-md'>Chọn 3 mục tiêu quan trọng với bạn, trong đó bao gồm một mục tiêu về cân nặng </div>
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