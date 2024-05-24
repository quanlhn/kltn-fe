'use client'

import React from 'react';

import cover from "../../../../../public/macronutritionsPage/cover.jpg"
import whatIsMacronutrients from "../../../../../public/macronutritionsPage/article1.jpg"
import article2 from "../../../../../public/macronutritionsPage/article2.jpg"
import article3 from "../../../../../public/macronutritionsPage/article3.jpg"
import article4 from "../../../../../public/macronutritionsPage/article4.jpg"
import vitaminB from "../../../../../public/micronutrionsPage/vitaminB.png"
import carbs1 from "../../../../../public/macronutritionsPage/carbohydrat/article1.jpg"
import carbs2 from "../../../../../public/macronutritionsPage/carbohydrat/article2.jpg"
import carbs3 from "../../../../../public/macronutritionsPage/carbohydrat/article3.jpg"
import carbs4 from "../../../../../public/macronutritionsPage/carbohydrat/article4.jpg"

import lipit1 from "../../../../../public/macronutritionsPage/lipit/article1.jpg"
import lipit2 from "../../../../../public/macronutritionsPage/lipit/article2.jpg"
import lipit3 from "../../../../../public/macronutritionsPage/lipit/article3.jpg"
import lipit4 from "../../../../../public/macronutritionsPage/lipit/article4.jpg"



import Ca from "../../../../../public/micronutrionsPage/Ca.png"
import Q10 from "../../../../../public/micronutrionsPage/q10.jpg"
import Zn from "../../../../../public/micronutrionsPage/Zn.png"

import Fe from "../../../../../public/micronutrionsPage/fe.jpg"
import Mg from "../../../../../public/micronutrionsPage/mg.jpg"
import Na from "../../../../../public/micronutrionsPage/na.jpg"
import Omega3 from "../../../../../public/micronutrionsPage/omega3.jpg"
import Se from "../../../../../public/micronutrionsPage/se.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { useRouter } from 'next/navigation';


import { HR_STYLE, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLES_DIV, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE, SIDE_ARTICLE_DISCRIBE, MAIN_ARTICLE_AVATAR } from '@/app/consts/className';


function Macronutrients() {

    const router = useRouter()

    return (
        <div className='mt-10 '>
            <div className='relative h-[22rem]'>
                <img src={cover.src} className='w-screen h-[22rem]' /> 
                <div className='text-5xl font-semibold absolute bottom-5 px-3 py-2 rounded-md opacity-80 left-10 bg-white'>Chất dinh dưỡng đa lượng</div>
            </div>

            <div className='mx-40 mt-10'>
                <div className='text-3xl font-semibold mb-5'>Nổi bật</div>
                <hr className='border-t-2' />

                <div className='feature flex mt-10'>
                    <div className={MAIN_ARTICLE_DIV}>
                        <img src={whatIsMacronutrients.src} alt="" className={MAIN_ARTICLE_AVATAR} />
                        <div className={MAIN_ARTICLE_TITLE}>Những chất dinh dưỡng đa lượng cần thiết cho cơ thể</div>
                        <div className={MAIN_ARTICLE_DISCRIBE}>Các thành phần dinh dưỡng cần thiết cho cơ thể gồm chất dinh dưỡng đa lượng và chất dinh dưỡng vi lượng. Vậy chất dinh dưỡng đa lượng là gì, có tác dụng gì đối với sức khỏe?</div>
                    </div>
                    <div className={SIDE_ARTICLES_DIV}>
                        <div className='flex mb-8 '>
                            <img src={article2.src} alt="" className={SIDE_ARTICLE_IMAGE} />
                            <div className={SIDE_ARTICLE_CHILD_DIV}>
                                <div className={SIDE_ARTICLE_TITLE}>Tinh bột là gì? Thực phẩm, thức ăn tinh bột gồm những gì </div>
                                <div className={SIDE_ARTICLE_DISCRIBE}>Thực phẩm, thức ăn tinh bột là nguồn năng lượng quan trọng, vô cùng thiết yếu đối với cơ thể. Cần sử dụng đồ ăn tinh bột một cách khoa học để vừa cung cấp năng lượng cho cơ thể vừa không làm tăng cân.</div> 
                            </div>
                        </div>
                        <div className='flex mb-8'>
                            <img src={article3.src} alt="" className={SIDE_ARTICLE_IMAGE} />
                            <div className={SIDE_ARTICLE_CHILD_DIV}>
                                <div className={SIDE_ARTICLE_TITLE}>Hiểu biết về chất béo và lựa chọn chất béo thông minh</div>
                                <div className={SIDE_ARTICLE_DISCRIBE}> Chất béo đóng vai trò quan trọng đối với sức khỏe và không thể thiếu trong khẩu phần ăn, ngay cả chế độ ăn kiêng giảm béo.</div> 
                            </div>
                        </div>
                        <div className='flex mb-8'>
                            <img src={article4.src} alt="" className={SIDE_ARTICLE_IMAGE} />
                            <div className={SIDE_ARTICLE_CHILD_DIV}>
                                <div className={SIDE_ARTICLE_TITLE}>Protein là gì và vai trò của protein với cơ thể</div>
                                <div className={SIDE_ARTICLE_DISCRIBE}>Protein có vai trò quan trọng trong việc duy trì các hoạt động sống của cơ thể, đặc biệt là giúp cơ bắp chắc khỏe.</div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
            <div className='mx-40 mt-10'>
                <div className='text-3xl font-semibold mb-5'>Tinh bột</div>
                <hr className='border-t-2' />

                <div className='vitamin mt-10 '>
                    <Swiper 
                        slidesPerView={3}
                        spaceBetween={5}
                        navigation={true}
                        modules={[Navigation]}
                        className='mySwiper'
                        loop = {true}
                    >
                         <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/cacbohydrat/article1')} src={carbs1.src} className='cursor-pointer w-[20rem] h-[15rem] shadow-xl rounded-md' />
                                <div onClick={() => router.push('./macronutrients/cacbohydrat/article1')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>Tinh bột cần thiết thế nào với hoạt động trí não?</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/cacbohydrat/article2')} src={carbs2.src} className='cursor-pointer w-[20rem] h-[15rem] rounded-md shadow-xl' />
                                <div onClick={() => router.push('./macronutrients/cacbohydrat/article2')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>Cắt giảm tinh bột như thế nào để giảm cân hiệu quả</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/cacbohydrat/article3')} src={carbs3.src} className='cursor-pointer w-[20rem] h-[15rem] rounded-md shadow-xl' />
                                <div onClick={() => router.push('./macronutrients/cacbohydrat/article3')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>Nhu cầu về chất béo và tinh bột cho phụ nữ có thai</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/cacbohydrat/article4')} src={carbs4.src} className='cursor-pointer w-[20rem] h-[15rem] rounded-md shadow-xl' />
                                <div onClick={() => router.push('./macronutrients/cacbohydrat/article4')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>Những sai lầm phổ biến khi kiêng ăn tinh bột để giảm cân</div>
                            </div>
                        </SwiperSlide>
                        
                         
                    </Swiper>
                </div>
            </div>
        
            <div className='mx-40 mt-10'>
                <div className='text-3xl font-semibold mb-5'>Chất béo</div>
                <hr className='border-t-2' />

                <div className='vitamin mt-10 '>
                    <Swiper 
                        slidesPerView={3}
                        spaceBetween={5}
                        navigation={true}
                        modules={[Navigation]}
                        className='mySwiper'
                        loop = {true}
                    >
                         <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/lipit/article1')} src={lipit1.src} className='cursor-pointer w-[20rem] h-[15rem] shadow-xl rounded-md' />
                                <div onClick={() => router.push('./macronutrients/lipit/article1')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>7 lợi ích của việc ăn chất béo lành mạnh</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/lipit/article2')} src={lipit2.src} className='cursor-pointer w-[20rem] h-[15rem] rounded-md shadow-xl' />
                                <div onClick={() => router.push('./macronutrients/lipit/article2')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>10 thực phẩm đốt cháy chất béo nên ăn khi giảm cân</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/lipit/article3')} src={lipit3.src} className='cursor-pointer w-[20rem] h-[15rem] rounded-md shadow-xl' />
                                <div onClick={() => router.push('./macronutrients/lipit/article3')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>Bạn nên ăn bao nhiêu chất béo mỗi ngày?</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center'>
                                <img onClick={() => router.push('./macronutrients/lipit/article4')} src={lipit4.src} className='cursor-pointer w-[20rem] h-[15rem] rounded-md shadow-xl' />
                                <div onClick={() => router.push('./macronutrients/lipit/article4')} className='mt-5 ml-2 w-[20rem] text-lg cursor-pointer hover:text-pink1 font-semibold'>8 loại thực phẩm chứa nhiều chất béo omega-3 tốt cho tim mạch</div>
                            </div>
                        </SwiperSlide>
                        
                         
                    </Swiper>
                </div>
            </div>

            <div className='mx-40 mt-20'>
                <div className='text-3xl font-semibold mb-5'>Khoáng chất</div>
                <hr className='border-t-2' />
                <div className='vitamin mt-10 '>
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation]}
                        className='mySwiper'
                        loop = {true}
                    >
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Ca.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Canxi</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Fe.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Sắt</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Mg.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Magie</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Na.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Natri</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Omega3.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Omega 3</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Q10.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Q10</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Se.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Selen</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={Zn.src} alt="" className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Kẽm</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>                    
                </div>
            </div>

            <div className="mx-40 mt-20">
                <div className='text-3xl font-semibold mb-5'>Bài viết mới</div>
                
            </div>
        </div>
    );
}

export default Macronutrients;