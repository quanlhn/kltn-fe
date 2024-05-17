'use client'

import React, {useState, useEffect, useRef, useContext} from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType } from '../../SheduleContext';


const BigStep = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const scheduleContext = useContext(ScheduleContext)
    const [goalsLv1, setGoalsLv1] = useState<GoalType>({goal: '', label: '', level: 1})

    useEffect(() => {
        console.log(scheduleContext.schedule)
        setGoalsLv1(scheduleContext.schedule.goalsLv1)
    }, [])

    const handleSubmit = () => {
        router.push(`${CREATE_ACCOUNT}/goals/${goalsLv1?.goal}/options`)
    }



    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[70vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Tuyệt vời! Bạn vừa thực hiện một bước lớn trên hành trình của mình.</div>
                    <div className='text-center mt-5 text-md'>Bạn có biết rằng việc theo dõi chế độ ăn của mình là một phương pháp khoa học đã được chứng minh để đạt được thành công? Đó được gọi là "tự theo dõi" và bạn càng kiên định, bạn càng có khả năng đạt được mục tiêu của mình.</div>
                    <div className='text-center mt-5 text-md'>Bây giờ, hãy nói về mục tiêu của bạn là {goalsLv1.label.toLocaleLowerCase()}.</div>
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

export default BigStep;