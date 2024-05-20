'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { API_PATH, CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input, InputNumber, Radio, Select } from 'antd';
import ScheduleContext, { GoalType } from './SheduleContext';


const CreateAccount = () => {

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
        console.log(scheduleContext.schedule)
    }, [])

    const handleSubmit = (values: any) => {
        console.log(values)
        const updateSchedule = {
            ...scheduleContext.schedule,
            email: values.email,
            phoneNumber: values.phone,
            password: values.password,
        }
        scheduleContext.setSchedule(updateSchedule)

        fetch(`${API_PATH}schedule/generateSchedule`, {
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                name: scheduleContext.schedule.name,
                phoneNumber: values.email,
                email: values.phone,
                password: values.password,
                gender: scheduleContext.schedule.gender, 
                birth: scheduleContext.schedule.birth,
                goalsLv1: scheduleContext.schedule.goalsLv1.goal,
                goalsLv2: scheduleContext.schedule.goalsLv2.goal,
                goalsLv3: scheduleContext.schedule.goalsLv3.goal,
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
        .then(data => {
            if (data.userData.success) {
                router.push(`${CREATE_ACCOUNT}/result`)
            } else {
                console.log(data)
                alert('Tạo tài khoản không thành công')
            }
        })





    }

  

    return (
        <div className='w-full min-h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white my-5 w-1/3 min-h-[85vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>Bước cuối cùng! Tạo tài khoản của bạn</div>
                    {/* <div className='text-center mt-5 text-md'>Không bao gồm các hoạt động thể dục thể thao, chúng ta sẽ tính riêng phầm đó</div> */}
                </div>
                <div className='flex flex-col justify-between mt-5'>
                    <Form
                        layout='vertical'
                        size='large'
                        wrapperCol={{
                            span: 20,
                        }}
                        
                        style={{marginLeft: '40px', marginRight: '40px',}}
                        onFinish={handleSubmit}
                    >
                        <div className=''>
                            <div>
                                
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Bạn chưa nhập email' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone"
                                    rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[{ required: true, message: 'Bạn chưa nhập mật khẩu' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Nhập lại mật khẩu"
                                    name="repassword"
                                    rules={[{ required: true, message: 'Bạn chưa nhập lại mật khẩu' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                
                            </div>

                            <div className='flex justify-between absolute w-[85%] bottom-6'>
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
        </div>
    );
};

export default CreateAccount;