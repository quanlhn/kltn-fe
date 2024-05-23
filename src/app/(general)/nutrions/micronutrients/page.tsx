'use client'

import React from 'react';

import cover from "../../../../../public/micronutrionsPage/ddViLuong.jpg"
import whatIsMicronutrients from "../../../../../public/micronutrionsPage/whatIsMicronutrients.jpg"
import article2 from "../../../../../public/micronutrionsPage/article2.png"
import article3 from "../../../../../public/micronutrionsPage/article3.png"
import article4 from "../../../../../public/micronutrionsPage/article4.jpg"
import vitaminB from "../../../../../public/micronutrionsPage/vitaminB.png"
import vitaminA from "../../../../../public/micronutrionsPage/vitaminA.jpg"
import vitaminD from "../../../../../public/micronutrionsPage/vitaminD.png"
import vitaminE from "../../../../../public/micronutrionsPage/vitaminE.png"
import vitaminK from "../../../../../public/micronutrionsPage/vitaminK.jpg"
import vitaminC from "../../../../../public/micronutrionsPage/vitaminC.jpg"

import Ca from "../../../../../public/micronutrionsPage/Ca.png"
import Fe from "../../../../../public/micronutrionsPage/fe.jpg"
import Mg from "../../../../../public/micronutrionsPage/mg.jpg"
import Na from "../../../../../public/micronutrionsPage/na.jpg"
import Omega3 from "../../../../../public/micronutrionsPage/omega3.jpg"
import Q10 from "../../../../../public/micronutrionsPage/q10.jpg"
import Se from "../../../../../public/micronutrionsPage/se.jpg"
import Zn from "../../../../../public/micronutrionsPage/Zn.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import { HR_STYLE, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLES_DIV, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE, SIDE_ARTICLE_DISCRIBE, MAIN_ARTICLE_AVATAR } from '@/app/consts/className';


function Micronutrients() {
    return (
        <div className='mt-10 '>
            <div className='relative h-[22rem]'>
                <img src={cover.src} className='w-screen h-[22rem]' /> 
                <div className='text-5xl font-semibold absolute bottom-10 left-10'>Chất dinh dưỡng vi lượng</div>
            </div>

            <div className='mx-40 mt-10'>
                <div className='text-3xl font-semibold mb-5'>Nổi bật</div>
                <hr className='border-t-2' />

                <div className='feature flex mt-10'>
                    <div className={MAIN_ARTICLE_DIV}>
                        <img src={whatIsMicronutrients.src} alt="" className={MAIN_ARTICLE_AVATAR} />
                        <div className={MAIN_ARTICLE_TITLE}>Dinh dưỡng vi lượng là gì? Chất dinh dưỡng quan trọng nhưng không phải ai cũng biết</div>
                        <div className={MAIN_ARTICLE_DISCRIBE}>Micronutrients là gì? Liệu thiếu nó bạn có bị “tiêu đời” không? Làm cách nào để bổ sung thêm micronutrients vào cơ thể chúng ta?</div>
                    </div>
                    <div className={SIDE_ARTICLES_DIV}>
                        <div className='flex mb-8 '>
                            <img src={article2.src} alt="" className={SIDE_ARTICLE_IMAGE} />
                            <div className={SIDE_ARTICLE_CHILD_DIV}>
                                <div className={SIDE_ARTICLE_TITLE}>Các chất dinh dưỡng vi lượng có ảnh hưởng lớn đối với sức khỏe.</div>
                                <div className={SIDE_ARTICLE_DISCRIBE}>Gần 30 loại vitamin và khoáng chất mà cơ thể của bạn không thể sản xuất đủ lượng một cách tự nhiên được gọi là "vi chất dinh dưỡng cần thiết"." </div> 
                            </div>
                        </div>
                        <div className='flex mb-8'>
                            <img src={article3.src} alt="" className={SIDE_ARTICLE_IMAGE} />
                            <div className={SIDE_ARTICLE_CHILD_DIV}>
                                <div className={SIDE_ARTICLE_TITLE}>Magnesium: what you need to know about this important micronutrient</div>
                                <div className={SIDE_ARTICLE_DISCRIBE}>While most of us aren’t getting enough magnesium, supplements may not be necessary. </div> 
                            </div>
                        </div>
                        <div className='flex mb-8'>
                            <img src={article4.src} alt="" className={SIDE_ARTICLE_IMAGE} />
                            <div className={SIDE_ARTICLE_CHILD_DIV}>
                                <div className={SIDE_ARTICLE_TITLE}>Micronutrient Deficiency</div>
                                <div className={SIDE_ARTICLE_DISCRIBE}>Who is most affected by the "hidden hunger" of micronutrient deficiency? </div> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
            <div className='mx-40 mt-10'>
                <div className='text-3xl font-semibold mb-5'>Vitamin</div>
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
                                <img src={vitaminA.src} className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Vitamin A</div>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={vitaminB.src} className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Vitamin B</div>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={vitaminC.src} className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Vitamin C</div>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={vitaminD.src} className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Vitamin D</div>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={vitaminE.src} className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Vitamin E</div>
                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='flex flex-col items-center ml-8'>
                                <img src={vitaminK.src} className='w-36 rounded-full shadow-xl' />
                                <div className='mt-2'>Vitamin K</div>
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

export default Micronutrients;