'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input, InputNumber, Radio, Select } from 'antd';
import ScheduleContext, { GoalType } from '../SheduleContext';


const Demographic2 = () => {

    const { Option } = Select;

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

    const handleSubmit = (values: any) => {
        console.log(values)
        const updateSchedule = {
            ...scheduleContext.schedule,
            daysPerWeek: values.daysPerWeek,
            availableExercises: values.exercises,
            levelExercise: values.levelExercise,
            periods: values.periods
        }
        scheduleContext.setSchedule(updateSchedule)
        router.push(`${CREATE_ACCOUNT}`)

    }

    const exercises = [
        {
            exercises: 'gym',
            label: 'Tập gym'
        },
        {
            exercises: 'push-up',
            label: 'Chống đẩy'
        },
        {
            exercises: 'pull-up',
            label: 'Kéo xà'
        },
        {
            exercises: 'plank',
            label: 'Plank'
        },
        {
            exercises: 'yoga',
            label: 'Yoga'
        },
        {
            exercises: 'pilates',
            label: 'Pilates'
        },
        {
            exercises: 'skipping-rope',
            label: 'Nhảy dây'
        },
        {
            exercises: 'runinng',
            label: 'chạy bộ'
        },
        {
            exercises: 'walking',
            label: 'đi bộ'
        },
        {
            exercises: 'swimming',
            label: 'Bơi lội'
        },
        {
            exercises: 'cycling',
            label: 'Đạp xe'
        },
        {
            exercises: 'hiit',
            label: 'Bài tập cường độ cao ngắt quãng'
        },
        {
            exercises: 'football',
            label: 'Bóng đá'
        },
        {
            exercises: 'badminton',
            label: 'Cầu lông'
        },
        {
            exercises: 'basketball',
            label: 'Bóng rổ'
        },
        
    ]

    const periods = [
        {
            time: 0.25,
            label: '15 phút'
        },
        {
            time: 0.5,
            label: '15 - 30 phút'
        },
        {
            time: 1,
            label: '30 - 60 phút'
        },
        {
            time: 1.5,
            label: '1 - 2 tiếng'
        },
    ]

    const daysPerWeek = [
        {
            value: 1,
            label: '1 lần/tuần'
        },
        {
            value: 2,
            label: '2 lần/tuần'
        },
        {
            value: 3,
            label: '3 lần/tuần'
        },
        {
            value: 4,
            label: '4 lần/tuần'
        },
        {
            value: 5,
            label: '5 lần/tuần'
        },
        {
            value: 6,
            label: '6 lần/tuần'
        },
        {
            value: 7,
            label: '7 lần/tuần'
        },
    ]

    return (
        <div className='w-full min-h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white my-5 w-1/3 min-h-[85vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Bạn có thể tập luyện như nào?</div>
                    {/* <div className='text-center mt-5 text-md'>Không bao gồm các hoạt động thể dục thể thao, chúng ta sẽ tính riêng phầm đó</div> */}
                </div>
                <div className='flex flex-col justify-between mt-10'>
                    <Form
                        layout='vertical'
                        size='large'
                        wrapperCol={{
                            span: 20,
                        }}
                        
                        style={{marginLeft: '40px', marginRight: '40px',}}
                        onFinish={handleSubmit}
                    >
                        <div className='flex flex-col justify-between'>
                            <div>
                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Các bài tập bạn có thể tham gia</p> } 
                                    name='exercises'
                                    rules={[{ required: true, message: 'Bạn chưa chọn các bài tập'}]}
                                >
                                    <Select
                                        mode='multiple'
                                        style={{width: '100%'}}
                                        placeholder = 'Chọn bài tập'
                                        
                                    >
                                        {exercises.map((ex, index) => (
                                            <Option key={index} value={ex.exercises}>{ex.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item> 

                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Bạn đã tập bộ môn trên bao giờ chưa</p> } 
                                    name='levelExercise'
                                    rules={[{ required: true, message: 'Bạn chưa chọn mức độ'}]}
                                >
                                    <Select
                                        style={{width: '100%'}}
                                        placeholder = 'Mức độ kinh nghiệm của bạn'
                                        
                                    >
                                        <Option value='beginner' >Tôi chưa từng tập</Option>
                                        <Option value='intermediate' >Tôi có ít kinh nghiệm và đang muốn học thêm</Option>
                                        <Option value='proficient' >Tôi khá giỏi bộ môn này</Option>
                                        <Option value='advanced' >Tôi đã nắm vững và có kỹ thuật cao</Option>
                                    </Select>
                                </Form.Item> 

                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Số ngày bạn có thể tập trong tuần</p> }
                                    name='daysPerWeek' 
                                    rules={[{ required: true, message: 'Vui lòng chọn số ngày'}]} 
                                >
                                    <Select                    
                                        style={{width: '100%'}}
                                        placeholder = 'Số lần/tuần'
                                        
                                    >
                                        {daysPerWeek.map((day, index) => (
                                            <Option key={index} value={day.value}>{day.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Mỗi ngày bạn có thể tập bao lâu</p> }
                                    name='periods' 
                                    rules={[{ required: true, message: 'Vui lòng chọn khoảng thời gian'}]}
                                >
                                    <Select                    
                                        style={{width: '100%'}}
                                        placeholder = 'Thời gian tập'
                                        
                                    >
                                        {periods.map((p, index) => (
                                            <Option key={index} value={p.time}>{p.label}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                
                            </div>

                            <div className='flex justify-between absolute w-[85%] bottom-6'>
                                <button 
                                    onClick={() => router.back()}
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
        </div>
    );
};

export default Demographic2;