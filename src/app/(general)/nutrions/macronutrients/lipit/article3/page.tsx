'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/lipit/article3.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/lipit/article3-1.jpg'
import articleImage3 from '../../../../../../../public/macronutritionsPage/lipit/article3-2.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article3 = () => {
    const router = useRouter()
    
    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>
                <span className='italic cursor-pointer'>Chất béo</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>Bạn nên ăn bao nhiêu chất béo mỗi ngày?</div>

            <p className='font-semibold mt-5 text-justify'>Chất béo là chất dinh dưỡng cần thiết để hỗ trợ các chức năng cơ thể, nhưng ăn quá nhiều cũng không tốt. Điều quan trọng là bạn nên ăn đủ lượng chất béo và chọn loại chất béo nào tốt cho sức khỏe.</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Cơ thể cần chất béo để làm gì?</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. Bạn nên ăn bao nhiêu chất béo mỗi ngày?</Link>
                <Link href={'#session-3'} className='my-2 underline'>3. Nên chọn loại chất béo nào có lợi cho sức khỏe?</Link>
            </div>

            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Cơ thể cần chất béo để làm gì?</div>
                <p className='indent-8 mt-2 text-justify'>Cơ thể chúng ta rất cần chất béo để hoạt động hiệu quả vì chất béo cung cấp năng lượng, duy trì sự phát triển của tế bào, ổn định huyết áp và giúp cơ thể hấp thụ chất dinh dưỡng.</p>
                <p className='indent-8 mt-2 text-justify'>Ở người trưởng thành, có khoảng 18-24% trọng lượng cơ thể là chất béo. Chất béo đóng vai trò quan trọng trong các hoạt động sống của tế bào, giúp dự trữ năng lượng, điều hòa hoạt động, bảo vệ cơ thể trước những thay đổi về nhiệt độ.</p>
                <p className='indent-8 mt-2 text-justify'>Chất béo cũng giúp hấp thu vận chuyển các vitamin tan trong dầu mỡ như vitamin A, D, E và K. Nó cũng có tác dụng tạo hương vị và cảm giác ngon miệng.</p>
                <img src={articleImage1.src} className='w-full my-10' alt="" />

            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. Bạn nên ăn bao nhiêu chất béo mỗi ngày?</div>
                <p className='indent-8 mt-2 text-justify'>Lượng chất béo tiêu thụ hàng ngày sẽ thay đổi tùy theo lượng calo bạn ăn mỗi ngày. Theo hướng dẫn về chế độ ăn uống của Tổ chức Y tế Thế giới (WHO) khuyến nghị lượng chất béo tiêu thụ hàng ngày từ 20% đến 35% tổng lượng calo hàng ngày của mỗi người.</p>
                <p className='indent-8 mt-2 text-justify'>Đối với chế độ ăn 2.000 calo, con số này tương đương với 400-700 calo chất béo mỗi ngày. Vì mỗi gam chất béo chứa 9 calo nên bạn cần chia lượng calo từ chất béo hàng ngày cho 9 để xác định lượng chất béo tiêu thụ hàng ngày tính bằng gam. Đối với chế độ ăn 2.000 calo, con số này tương đương với 44–78gam (g) chất béo mỗi ngày.</p>
                <p className='indent-8 mt-2 text-justify'>Tùy thuộc vào trọng lượng cơ thể và mức độ hoạt động của mỗi người, lượng calo hàng ngày có thể cao hơn hoặc thấp hơn 2.000, vì vậy bạn phải điều chỉnh lượng chất béo nạp vào cho phù hợp. Tuy nhiên, cần tối thiểu 20% calo từ chất béo để đảm bảo cơ thể có đủ acid béo thiết yếu hỗ trợ các chức năng quan trọng của cơ thể.</p>
                <p className='indent-8 mt-2 text-justify'>Theo ThS.BS Lê Thị Hải, nguyên Giám đốc Trung tâm Khám tư vấn dinh dưỡng, Viện Dinh dưỡng quốc gia, đối với người Việt Nam, chất béo nên chiếm 18 -20% tổng năng lượng ăn vào. Ở người trưởng thành, nếu khẩu phần có khoảng 30g chất béo thì trong đó nên có 20g là chất béo nguồn gốc thực vật.</p>
                <p className='indent-8 mt-2 text-justify'>Đối với người bị mỡ máu cao thì lượng chất béo nên ăn khoảng 15% năng lượng chất béo trong khẩu phần ăn. Điều quan trọng là nên chọn ăn chất béo có lợi cho sức khỏe.</p>
            </div>
            
            <div id='session-3'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>3. Nên chọn loại chất béo nào có lợi cho sức khỏe?</div>
                <p className='indent-8 mt-2 text-justify'>Không phải tất cả chất béo đều được tạo ra như nhau. Một số chất béo tốt cho sức khỏe và cần thiết cho chế độ ăn uống lành mạnh, trong khi các loại chất béo khác được coi là chất béo xấu vì chúng gây viêm và nên tiêu thụ ở mức độ vừa phải hoặc không nên tiêu thụ.</p>
                <p className='indent-8 mt-2 text-justify'>Có 3 loại chất béo chính là chất béo không bão hòa, chất béo bão hòa và chất béo chuyển hóa. Chất béo tốt (chất béo lành mạnh) là chất béo không bão hòa giúp giảm cholesterol xấu bảo vệ sức khỏe tim mạch. Chất béo xấu là hai loại chất béo bão hòa và chất béo chuyển hóa, nếu ăn quá nhiều có thể làm tăng nồng độ cholesterol trong máu, đặc biệt là cholesterol xấu có hại cho tim mạch và làm tăng nguy cơ mắc các bệnh khác.</p>
                <img src={articleImage2.src} className='w-full my-10' alt="" />

                <div className='mt-2 font-semibold italic'>Chất béo không bão hòa</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo không bão hòa là chất béo có lợi cho tim. Chất béo không bão hòa được chia thành hai loại là chất béo không bão hòa đa và chất béo không bão hòa đơn. Loại chất béo này được các chuyên gia dinh dưỡng khuyến cáo nên có chủ yếu trong chế độ ăn uống hằng ngày.</p>
                <p className='indent-8 mt-2 text-justify'>Theo ThS. BS Lê Thị Hải, chất béo không bão hòa đơn và không bão hòa đa giúp cải thiện mức cholesterol trong máu. Các loại chất béo này có trong: dầu ô liu, dầu đậu phộng, dầu đậu nành, dầu hướng dương, quả óc chó, quả bơ và các loại hạt. Các loại cá như cá hồi, cá trích, cá thu, cá mòi, cá cơm… là nguồn chất béo tốt chứa nhiều omega-3 giúp giảm cholesterol.</p>

                <div className='mt-2 font-semibold italic'>Chất béo bão hòa</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo bão hòa chủ yếu được tìm thấy trong các sản phẩm động vật như thịt đỏ và sữa, nó cũng được tìm thấy trong dừa và các sản phẩm từ dừa. Vì chất béo bão hòa có thể gây viêm và làm tăng nguy cơ mắc các bệnh tim mạch, WHO khuyến nghị nên duy trì lượng chất béo bão hòa ở mức dưới 10% lượng calo hàng ngày.</p>
                <img src={articleImage3.src} className='w-full my-10' alt="" />

                <div className='mt-2 font-semibold italic'>Chất béo chuyển hóa</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo chuyển hóa chủ yếu được tạo ra từ quá trình hydro hóa một phần (một phản ứng hóa học gây ra bởi hydro phân tử và một hợp chất khác) xảy ra trong quá trình chế biến thực phẩm công nghiệp.</p>
                <p className='indent-8 mt-2 text-justify'>Loại chất béo này tạo ra nhiều tình trạng viêm trong cơ thể và có hại cho sức khỏe. Nó có thể được xem là loại chất béo xấu nhất cho cơ thể vì chúng làm giảm hàm lượng cholesterol tốt; tăng cholesterol xấu và triglycerides. Chất béo chuyển hóa còn gây nguy cơ mắc bệnh tim mạch cao gấp 3 lần so với chất béo bão hòa. Và việc loại bỏ ra khỏi cơ thể còn khó hơn chất béo bão hòa.</p>
                <p className='indent-8 mt-2 text-justify'>Chất béo chuyển hóa được tìm thấy trong thực phẩm chiên, đồ nướng đã qua chế biến và dầu hydro hóa một phần được sử dụng để chế biến nhiều loại thực phẩm đã qua chế biến, thức ăn nhanh…</p>
                <p className='indent-8 mt-2 text-justify'>WHO cũng khuyến nghị nên duy trì lượng chất béo chuyển hóa ở mức dưới 1% lượng calo hằng ngày hoặc lý tưởng nhất là tránh hoàn toàn.</p>

            </div>
        </div>
    );
};

export default Article3;