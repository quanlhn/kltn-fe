'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import ScheduleContext, { GoalType } from '../SheduleContext';


const Demographic1 = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const scheduleContext = useContext(ScheduleContext)
    const [name, setName] = useState('')

    useEffect(() => {
        setName(scheduleContext.schedule.name)
    }, [])

    const handleSubmit = (values: any) => {
        const updateSchedule = {
            ...scheduleContext.schedule,
            birth: values.birth.toDate(),
            height: values.height,
            weight: values.weight,
            gender: values.gender,
            goalWeight: values.goalWeight
        }
        console.log(values)

        scheduleContext.setSchedule(updateSchedule)
        router.push(`${CREATE_ACCOUNT}/weekly-goal`)
    }

    const onDateChange = (values: any) => {
        console.log(values.toDate())
    }

    return (
        <div className='w-full min-h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white my-5 w-1/3 min-h-[90vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Hãy cho chúng tôi biết thêm về các số liệu cá nhân của bạn</div>
                    {/* <div className='text-center mt-5 text-md'>Không bao gồm các hoạt động thể dục thể thao, chúng ta sẽ tính riêng phầm đó</div> */}
                </div>
                <div className='flex flex-col justify-between mt-5'>
                    <Form
                        layout='vertical'
                        size='large'
                        wrapperCol={{
                            span: 16,
                        }}
                        
                        style={{marginLeft: '40px', marginRight: '40px',}}
                        onFinish={handleSubmit}
                    >
                        <div className='flex flex-col '>
                            <div>
                                <div className='flex justify-between'>
                                    <Form.Item 
                                        label={ <p className='text-lg font-semibold'>Bạn là ?</p> } 
                                        name='gender'
                                        rules={[{ required: true, message: 'Bạn chưa chọn giới tính'}]}
                                    >
                                        <Radio.Group style={{marginLeft: '1rem'}} >
                                            <Radio value="male" > Nam </Radio>
                                            <Radio value="female"> Nữ </Radio>
                                        </Radio.Group>
                                    </Form.Item> 

                                    <Form.Item
                                        label={ <p className='text-lg font-semibold'>Ngày sinh</p> } 
                                        name='birth'
                                        rules={[{ required: true, message: 'Bạn chưa chọn ngày sinh'}]}
                                    >
                                        <DatePicker onChange={onDateChange} style={{width: '200px'}} />
                                    </Form.Item>

                                </div>

                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Cân nặng của bạn là ...</p> }
                                    name='weight' 
                                    rules={[{ required: true, message: 'Chưa nhập cân nặng'}]}
                                >
                                    <InputNumber style={{marginLeft: '1rem'}} addonAfter="kg"/>
                                </Form.Item>
                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Bạn cao bao nhiêu?</p> }
                                    name='height' 
                                    rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}
                                >
                                    <InputNumber style={{marginLeft: '1rem'}} addonAfter="cm"/>
                                </Form.Item>
                                <Form.Item 
                                    label={ <p className='text-lg font-semibold'>Mục tiêu cân nặng của bạn là ...</p> }
                                    name='goalWeight' 
                                    rules={[{ required: true, message: 'Chưa nhập chọn mục tiêu'}]}
                                >
                                    <InputNumber style={{marginLeft: '1rem'}} addonAfter="kg"/>
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

export default Demographic1;