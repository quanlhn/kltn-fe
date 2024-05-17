'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';

const Welcome = () => {

    const router = useRouter()


    return (
        <div className='w-full h-screen bg-white flex flex-col justify-between items-center absolute top-0 left-0'>
            <div className='mt-24 flex flex-col items-center'>
                <div className='text-lg font-serif mb-3'>Chào mừng tới</div>
                <div className='text-[#0066ee] font-serif font-semibold text-4xl'>healthcare</div>
            </div>
            <div className='introduce flex justify-center mb-12'>
                <div className='w-72 mx-14'>
                    <img src="/introduce1.jpg" alt="" className='w-72 h-72 rounded-3xl' />
                    <div className='px-1 text-center text-lg mt-3 '>Bạn đã sẵn sàng thay đổi? <br /> Hãy bắt đầu từ hôm nay! </div>
                </div>
                <div className='w-72 mx-14'>
                    <img src="/introduce2.jpg" alt="" className='w-72 h-72 rounded-3xl' />
                    <div className='px-1 text-center text-lg mt-3 '>Khám phá tác động của thực phẩm và thể dục đối với bạn.</div>
                </div>
                <div className='w-72 mx-14'>
                    <img src="/introduce3.png" alt="" className='w-72 h-72 rounded-3xl' />
                    <div className='px-1 text-center text-lg mt-3 '>Biến việc ăn uống điều độ thành thói quen trong cuộc sống</div>
                </div>
            </div>
            <button
                onClick={() => router.push(`${CREATE_ACCOUNT}/input-name`)}
                className='mb-20 text-xl text-white font-bold bg-blue-500 hover:bg-blue-700 shadow-lg rounded-xl w-64 h-12'
            >
                Tiếp tục
            </button>
        </div>
    );
};

export default Welcome;