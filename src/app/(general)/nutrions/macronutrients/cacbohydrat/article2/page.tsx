'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/carbohydrat/article2.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/carbohydrat/article2-2.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article2 = () => {
    const router = useRouter()  

    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>  
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>    
                <span className='italic cursor-pointer'>Tinh bột</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>Cắt giảm tinh bột như thế nào để giảm cân hiệu quả?</div>

            <p className='font-semibold mt-5 text-justify'>Nhiều người muốn giảm cân nhanh chóng đã áp dụng chế độ cắt giảm quá mức thậm chí cắt giảm hoàn toàn tinh bột trong khẩu phần ăn hàng ngày. Vậy việc này có nên không? Cần cắt giảm tinh bột như thế nào để giúp giảm cân an toàn?</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Có nên cắt giảm hoàn toàn tinh bột để giảm cân nhanh?</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. Nên ăn tinh bột như thế nào để giảm cân hiệu quả?</Link>
            </div>

            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Có nên cắt giảm hoàn toàn tinh bột để giảm cân nhanh?</div>
                <p className='indent-8 mt-2 text-justify'>Trong khẩu phần ăn hằng ngày, tinh bột cung cấp tới 2/3 tổng năng lượng cho cơ thể. Bởi vậy, nếu muốn giảm cân, cần phải giảm tinh bột (carbohydrate). Thế nhưng, điều này không có nghĩa rằng bạn nên cắt giảm hoàn toàn tình bột trong khẩu phần ăn để giảm cân nhanh. Do tinh bột có đường cung cấp năng lượng cho não hoạt động, nên việc giảm lượng tinh bột quá nhiều có thể khiến bạn gặp các vấn đề sức khỏe như kiệt sức, mệt mỏi, choáng váng, đau đầu, thậm chí ảnh hưởng đến trí nhớ.</p>
                <p className='indent-8 mt-2 text-justify'>Chính vì vậy, để đảm bảo sức khỏe trong quá trình giảm cân, tốt nhất bạn nên lắng nghe chính mình và cắt giảm tinh bột một cách từ từ để cơ thể dần dần thích nghi. Ví dụ, trước kia, bạn thường ăn 3 bát cơm mỗi bữa thì có thể giảm dần xuống 2 bát, rồi xuống còn 1 bát. Nếu gặp các biểu hiện như mệt mỏi, choáng, đau đầu, thiếu năng lượng, bạn nên điều chỉnh lại chế độ ăn uống để không làm ảnh hưởng đến sức khỏe cũng như năng suất làm việc.</p>
                <p className='indent-8 mt-2 text-justify'>Bên cạnh đó, việc áp dụng một số chế độ ăn kiêng cắt giảm tinh bột trong thời gian dài có thể dẫn đến thiếu hụt các vi chất cần thiết như các vitamin nhóm B. Những vi chất này thường có trong gạo hoặc các thực phẩm từ thực vật như cà chua, rau dền, bí, súp lơ, nấm, khoai lang... Các loại hạt cũng là một nguồn cung cấp dồi dào vitamin B mà bạn có thể tăng cường trong chế độ ăn giảm cân, vừa giúp cung cấp vi chất thiết yếu, vừa là món ăn nhẹ lành mạnh thúc đẩy cảm giác no lâu.</p>
                <img src={articleImage1.src} className='w-full my-10' alt="" />
            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. Nên ăn tinh bột như thế nào để giảm cân hiệu quả?</div>
                <p className='indent-8 mt-2 text-justify'>Để giảm cân một cách an toàn, hiệu quả, mỗi người cần đảm bảo nguyên tắc năng lượng nạp vào nhỏ hơn năng lượng tiêu hao. Bên cạnh đó, cần kết hợp chế độ vận động, luyện tập hợp lý, cộng thêm việc kiểm soát chế độ ăn để có thể giảm cân mà vẫn săn chắc, khỏe mạnh.</p>
                <p className='indent-8 mt-2 text-justify'>Bạn vẫn có thể ăn đa dạng thực phẩm, kể cả tinh bột, tuy nhiên cần tính toán sao cho lượng calo nạp vào cơ thể ở trong mức cho phép. Thay vì sử dụng tinh bột đã qua tinh chế gạo trắng, mì ống trắng, bánh mì trắng, bạn có thể ưu tiên các loại thực phẩm để bổ sung carbohydrate trong chế độ ăn như:</p>
                <ul className='list-disc ml-20'>
                    <li className='mt-3'>Khoai tây: Trung bình 1 củ khoai tây chứa 2 gam chất xơ và 110 calo. Ngoài carbohydrate, khoai tây còn cung cấp nhiều chất dinh dưỡng khác như kali, sắt, vitamin B, vitamin C cho cơ thể.</li>
                    <li className='mt-3'>Khoai lang: Khoai lang là một trong những thực phẩm chứa carb tốt, bởi chúng chứa chỉ số đường huyết thấp đồng thời giúp duy trì năng lượng cho cơ thể lâu hơn. Ngoài ra khoai lang giàu vitamin A, C, D, E, K, B6 cùng các khoáng chất thiết yếu cho cơ thể giúp tăng cường hệ miễn dịch. Khoai lang cũng giàu chất xơ, khá nhiều protein thực vật.</li>
                    <li className='mt-3'>Các loại đậu: Tuy thuộc nhóm tinh bột nhưng trong đậu lại chứa nhiều kali, chất xơ, axit folic, magie… rất tốt cho sức khỏe. Nhờ vào hàm lượng chất xơ cao, ăn đậu sẽ giúp bạn no lâu hơn và hạn chế cảm giác thèm ăn vặt. Việc tăng khẩu phần ăn các loại đậu trong những bữa ăn hàng ngày không chỉ giúp giảm cân mà còn giảm lượng cholesterol trong máu và bảo vệ đường ruột.</li>
                    <li className='mt-3'>Yến mạch: Yến mạch là một trong những thực phẩm tốt giúp thúc đẩy giảm cân. Ngoài tinh bột, yến mạch cũng giàu protein, chất xơ, đảm bảo cung cấp đầy đủ chất dinh dưỡng cho cơ thể.</li>
                    <li className='mt-3'>Hạt diêm mạch: Hạt diêm mạch hay còn gọi là quinoa, chứa rất nhiều chất dinh dưỡng tốt cho sức khỏe. Với lượng lớn chất xơ và protein trong thành phần, bạn có thể ăn hạt quinoa trong nhiều món ăn khác nhau để giúp no lâu, kiểm soát lượng calo nạp vào cơ thể.</li>
                </ul >
                <img src={articleImage2.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Cần nhớ rằng, giảm cân và duy trì cân nặng là một quá trình lâu dài. Nếu sau khi đã giảm cân, bạn quay lại chế độ ăn nhiều tinh bột như cũ thì cân nặng lại tiếp tục tăng lên và thậm chí tăng nhanh hơn trước. Do đó, cần xây dựng một chế độ ăn phù hợp, có thể áp dụng lâu dài để kiểm soát cân nặng theo mong muốn.</p>
                <p className='indent-8 mt-2 text-justify'>Ngoài chế độ ăn uống, mỗi ngày bạn nên duy trì ít nhất 30 phút cho các hoạt động như tập thể dục thể thao. Chẳng hạn như đi bộ, đạp xe hay chơi các môn thể thao yêu thích. Điều này sẽ giúp bạn tăng cường trao đổi chất, đốt cháy calo và thúc đẩy giảm cân, giảm mỡ thừa.</p>
            </div>
        </div>
    );
};

export default Article2;