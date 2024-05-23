'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/carbohydrat/article1.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/carbohydrat/article1-1.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article1 = () => {
    const router = useRouter()
    
    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>
                <span className='italic cursor-pointer'>Tinh bột</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>Tinh bột cần thiết thế nào với hoạt động trí não?</div>

            <p className='font-semibold mt-5 text-justify'>SKĐS - Chế độ dinh dưỡng đầy đủ có vai trò rất quan trọng đối với sức khỏe của sĩ tử, nhất là khi mùa thi sắp đến. Tuy nhiên, có một số trường hợp trẻ học quá nhiều, thức khuya dậy muộn thường bỏ bữa sáng hay ăn kiêng tinh bột gây ảnh hưởng lớn đến sức khỏe và kết quả học tập, thi cử.</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Vai trò của tinh bột với hoạt động của trí não</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. Vai trò của tinh bột với hoạt động của trí não</Link>
                <Link href={'#session-3'} className='my-2 underline'>3. Một số tinh bột không lành mạnh cần hạn chế</Link>
            </div>

            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Vai trò của tinh bột với hoạt động của trí não</div>
                <p className='indent-8 mt-2 text-justify'>Tinh bột là nguồn cung cấp năng lượng chính cho cơ thể và glucose là một loại đường chủ yếu được cung cấp từ thực phẩm giàu tinh bột như: gạo, bánh mì, ngũ cốc, ngô, khoai, sắn…</p>
                <p className='indent-8 mt-2 text-justify'>Cơ thể có thể phân hủy carbohydrate tiêu hóa trong những thực phẩm này thành glucose, được vận chuyển trong máu đến não và các cơ quan khác để tạo năng lượng.</p>
                <p className='indent-8 mt-2 text-justify'>Não là cơ quan tiêu thụ nhiều glucose nhất trong cơ thể. Để não hoạt động tốt thì lượng đường trong máu cần ổn định (không nên quá thấp hay quá cao).</p>
                <p className='indent-8 mt-2 text-justify'>Các nghiên cứu cho thấy sự sụt giảm về lượng glucose có thể có tác động tiêu cực đến sự tập trung, trí nhớ, học tập và nhận thức. Bộ não cũng sử dụng nhiều glucose hơn trong các thời điểm trí não cần tập trung cao độ.</p>
                <p className='indent-8 mt-2 text-justify'>Glucose có ảnh hưởng đáng kể đến tâm trạng và hành vi, chúng cũng quan trọng không kém đối với sức khỏe tâm thần. Những người áp dụng chế độ ăn ít chất béo, ít carbohydrate trong một năm có nhiều lo lắng, trầm cảm và tức giận hơn những người theo chế độ ăn ít chất béo, nhiều carbohydrate. Nếu không có đủ glucose, hệ thống thần kinh trung ương sẽ bị ảnh hưởng, có thể gây chóng mặt hoặc suy nhược tinh thần và thể chất…</p>
                <img src={articleImage1.src} className='w-full my-10' alt="" />
            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. Ăn tinh bột như thế nào là đủ?</div>
                <p className='indent-8 mt-2 text-justify'>Do não bộ nhạy cảm với sự sụt giảm nồng độ đường huyết trong thời gian ngắn và phản ứng tích cực với sự gia tăng mức độ này. Do đó, điều đặc biệt quan trọng là giữ cho lượng đường trong máu ở mức tối ưu để có chức năng nhận thức tốt. Ăn đầy đủ các bữa ăn giàu dinh dưỡng có thể giúp đạt được mục tiêu này.</p>
                <p className='indent-8 mt-2 text-justify'>Để có sức khỏe tốt, cơ thể cần được cung cấp đầy đủ chất dinh dưỡng từ 4 nhóm thực phẩm:</p>
                <ul className='list-disc ml-20'>
                    <li className='mt-3'>Tinh bột (chủ yếu từ gạo, các loại ngũ cốc).</li>
                    <li className='mt-3'>Chất đạm (thịt, cá, trứng, sữa, các loại đậu, đỗ...).</li>
                    <li className='mt-3'>Chất béo (mỡ động vật, dầu thực vật).</li>
                    <li className='mt-3'>Vitamin và khoáng chất (các loại rau, củ, quả tươi...).</li>
                </ul >
                <p className='indent-8 mt-2 text-justify'>Riêng nhóm tinh bột cần cung cấp 60% năng lượng hàng ngày, tương đương với 400g gạo. Như vậy, một ngày chúng ta có thể ăn 3 bữa chính: bữa sáng, trưa, tối. Bữa sáng có thể ăn cháo, phở, mỳ, bún, bánh mì… Bữa trưa và tối mỗi bữa ăn khoảng 2 bát cơm.</p>
            </div>
            
            <div id='session-3' className='mt-10'>
                <div   className='font-bold mt-2 text-lg'>3. Một số tinh bột không lành mạnh cần hạn chế</div>
                
                <ul className='list-disc ml-20'>
                    <li className='mt-3'>- Hạn chế đồ ăn vặt như: đồ ăn nhẹ, mì ống, đồ ngọt, ngũ cốc ăn sáng, bánh mì kẹp thịt, khoai tây chiên…</li>
                    <li className='mt-3'>- Nên hạn chế các loại đường hấp thu nhanh vào máu như bánh kẹo ngọt, nước ngọt... Vì chúng sẽ làm đường huyết tăng nhanh và sau đó sẽ giảm nhanh. Hơn nữa các thức ăn này chỉ cung cấp "calo rỗng", không cung cấp các chất dinh dưỡng khác.</li>
                </ul >
                <p className='indent-8 mt-2 text-justify'>Những thực phẩm này đều chứa nhiều carbohydrate, nhiều calo, muối, chất béo không lành mạnh, thiếu vitamin và khoáng chất. Nếu ăn nhiều và thường xuyên sẽ ảnh hưởng xấu tới sức khỏe như: làm tăng đường trong máu, gây đầy bụng, khó tiêu, dễ mắc bệnh răng miệng, ảnh hưởng đến trí nhớ…</p>
                <img src={articleImage2.src} className='w-full my-10' alt="" />
            </div>
        </div>
    );
};

export default Article1;