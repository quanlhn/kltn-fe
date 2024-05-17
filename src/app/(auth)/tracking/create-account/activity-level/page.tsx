'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType } from '../SheduleContext';


const ActivityLevel = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const scheduleContext = useContext(ScheduleContext)
    const [name, setName] = useState('')
    const [selectedOpt, setSelectedOpt] = useState( {
        label: '', 
        discription: '',
        value: 0
    })

    useEffect(() => {
        setName(scheduleContext.schedule.name)
    }, [])

    const handleSubmit = () => {
        const updateSchedule = {...scheduleContext.schedule, baseActivity: selectedOpt.value}
        scheduleContext.setSchedule(updateSchedule)
        router.push(`${CREATE_ACCOUNT}/demographic-1`)
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
                if (currentWeightOpt != -1 && idx < opts.length) {
                    diselectOpt(currentWeightOpt)
                }
                clickedOpt?.classList.add('selected')
                clickedOpt?.classList.remove('hover:border-gray-600')
                clickedOpt?.classList.add('border-blue-500')
                clickedOpt?.classList.add('text-blue-500')
                clickedOpt?.classList.add('font-bold')
                setSelectedOpt(opts[idx])
    
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
        for (let i = 0; i < opts.length; i++) {
            if (optsRef.current[i]?.classList.contains('selected')) {
                return i
            }
        }
        return -1
    }

    const opts = [
        {
            label: 'Không', 
            discription: 'Ít hoặc không tập',
            value: 1.2
        },
        {
            label: 'Nhẹ nhàng', 
            discription: 'Tập nhẹ nhàng 1-3 lần/tuần',
            value: 1.375
        },
        {
            label: 'Vừa phải', 
            discription: 'Tập nhẹ nhàng 4-5 lần/tuần',
            value: 1.465
        },
        {
            label: 'Có vận động', 
            discription: 'Tập thể dục hàng ngày hoặc các bài tập mạnh 3-4 lần/tuần',
            value: 1.55
        },
        {
            label: 'Vận động nhiều', 
            discription: 'Tập thể dục mạnh từ 6-7 lần/tuần',
            value: 1.725
        },
        {
            label: 'Vận động rất nhiều', 
            discription: 'Tập thể dục mạnh hàng ngày hoặc lao động chân tay',
            value: 1.9
        },
        
    ]


    return (
        <div className='w-full min-h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white my-5 w-1/3 min-h-[70vh] rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Mức độ hoạt động cơ bản của bạn là gì?</div>
                    {/* <div className='text-center mt-5 text-md'>Không bao gồm các hoạt động thể dục thể thao, chúng ta sẽ tính riêng phầm đó</div> */}
                </div>
                <div className='flex flex-col justify-between px-10 mt-8'>
                    <div>
                        {opts.map((opt, index) => (
                            <div
                                key={index}
                                className='w-full h-20 px-6 cursor-pointer border-2 text-left flex flex-col justify-center items-start mb-3 rounded hover:border-gray-600'
                                ref={(el) => optsRef.current[index] = el}
                                onClick={() => selectOption(index)}
                            >
                                <div className='font-semibold  text-lg tracking-wide'>{opt.label}</div>
                                <div className='text-md '>{opt.discription}</div> 
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-between w-[100%] py-3 bg-white bottom-0 sticky'>
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

export default ActivityLevel;