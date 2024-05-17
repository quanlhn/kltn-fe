'use client'

import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext from '../SheduleContext';


const InputName = () => {

    const router = useRouter()
    const scheduleContext = useContext(ScheduleContext)

    const handleSubmit = (values: any) => {
        console.log(values.name)
        const updateSchedule = {...scheduleContext.schedule, name: values.name}
        scheduleContext.setSchedule(updateSchedule)
        router.push(`${CREATE_ACCOUNT}/goals`)
    }

    useEffect(() => {
        console.log(scheduleContext.schedule)
    }, [])    


    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[70vh] relative rounded-xl shadow-2xl'>
                <div>
                    <div className='text-center mt-10 text-2xl font-bold font-sans'>Tên bạn là gì?</div>
                    <div className='text-center mt-5 text-md'>Chào mừng bạn tới với 
                        <span className='font-serif text-[#0066ee] text-lg font-semibold'> healthcare</span>
                    </div>
                    <div className='text-center mt-1 text-md'>Hãy cho chúng tôi biết chút thông tin về bạn</div>
                </div>
                <Form
                    layout='vertical'
                    style={{marginLeft: '40px', marginRight: '40px', marginTop: '4rem',}}
                    onFinish={handleSubmit}
                >
                    <div className='flex flex-col justify-between'>
                        <div>
                            <Form.Item
                            
                            name="name"
                            rules={[{ required: true, message: 'Bạn chưa nhập tên' }]}
                            >
                                <Input size='large' style={{height: '50px', fontSize: '20px'}} placeholder='Tên của bạn'/>
                            </Form.Item>  
                        </div>

                        <div className='flex justify-between absolute w-[85%] bottom-10'>
                            <button 
                                onClick={() => router.push(`${CREATE_ACCOUNT}/welcome`)}
                                type='button'
                                className='text-2xl w-44 h-16 bg-white hover:bg-slate-100 font-semibold tracking-wide text-blue-500 border-blue-500 border-2 rounded-xl '
                            >
                                Quay lại
                            </button>
                            <button 
                                type='submit'
                                className='text-2xl w-44 h-16 bg-blue-500 hover:bg-blue-700 font-semibold tracking-wide text-white rounded-xl'
                            >
                                Tiếp tục
                            </button>
                        </div>
                    </div>

                </Form>
                    
            </div>
        </div>
    );
};

export default InputName;