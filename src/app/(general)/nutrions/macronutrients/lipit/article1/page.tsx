'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/lipit/article1.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/lipit/article1-1.jpg'
import articleImage3 from '../../../../../../../public/macronutritionsPage/lipit/article1-2.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article1 = () => {
    const router = useRouter()
    
    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>
                <span className='italic cursor-pointer'>Chất béo</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>7 lợi ích của việc ăn chất béo lành mạnh</div>

            <p className='font-semibold mt-5 text-justify'>Khi ăn chất béo lành mạnh như một phần của chế độ dinh dưỡng cân bằng, bạn sẽ nhận được 7 lợi ích sức khỏe tiềm ẩn như điều chỉnh hormone, giảm viêm và bảo vệ sức khỏe của tim.</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Chất béo lành mạnh giúp tăng cường chức năng não</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. Hỗ trợ quản lý cân nặng</Link>
                <Link href={'#session-3'} className='my-2 underline'>3. Tiêu thụ chất béo lành mạnh giúp cơ thể hấp thụ chất dinh dưỡng tối ưu</Link>
                <Link href={'#session-4'} className='my-2 underline'>4. Tăng cường sức khỏe của mắt</Link>
                <Link href={'#session-5'} className='my-2 underline'>5. Chất béo lành mạnh hỗ trợ hệ thống miễn dịch</Link>
                <Link href={'#session-6'} className='my-2 underline'>6. Chất béo lành mạnh giúp chống viêm</Link>
                <Link href={'#session-7'} className='my-2 underline'>7. Hỗ trợ mức độ hormone cân bằng</Link>
            </div>

            
            <div id='session-0' className='mt-10'>
                <p className='indent-8 mt-2 text-justify'>Khi nói đến việc cung cấp chất béo, điều quan trọng cần nhớ là không phải tất cả chất béo đều được tạo ra như nhau. Chìa khóa để đưa chất béo lành mạnh vào chế độ ăn uống cân bằng là hiểu được chất béo nào được coi là tốt cho sức khỏe và loại chất béo nào nên kiêng.</p>
                <p className='indent-8 mt-2 text-justify'>Chất béo không lành mạnh chủ yếu là chất béo chuyển hóa và chất béo bão hòa - là những chất béo có liên quan đến kết quả tiêu cực về sức khỏe, bao gồm cả cholesterol tăng cao và nguy cơ mắc bệnh tim mạch. Những chất béo không lành mạnh này thường được tìm thấy trong thực phẩm chiên rán, dầu mỡ dùng lại nhiều lần, đồ ăn nhẹ chế biến sẵn và đồ nướng.</p>
                <p className='indent-8 mt-2 text-justify'>Chất béo lành mạnh, bao gồm chất béo không bão hòa đơn và không bão hòa đa, đóng vai trò then chốt trong nhiều khía cạnh sức khỏe. Theo ThS. BS. Lê Thị Hải, nguyên Giám đốc Trung tâm Khám tư vấn dinh dưỡng, Viện Dinh dưỡng Quốc gia, chất béo không bão hòa đơn và không bão hòa đa giúp cải thiện mức cholesterol trong máu.</p>
                <p className='indent-8 mt-2 text-justify'>Các loại chất béo này có trong: dầu ô liu, dầu đậu phộng, dầu đậu nành, dầu hướng dương, quả óc chó, quả bơ và các loại hạt. Các loại cá như cá hồi, cá trích, cá thu, cá mòi, cá cơm... là nguồn chất béo tốt chứa nhiều omega-3 giúp giảm cholesterol.</p>
                <p className='indent-8 mt-2 text-justify'>Việc kết hợp chất béo lành mạnh vào chế độ ăn uống là rất quan trọng để duy trì sức khỏe tim mạch. Thực phẩm giàu chất béo có lợi này không chỉ bổ dưỡng mà còn tăng thêm sự đa dạng và hương vị cho chế độ ăn có lợi cho tim.</p>
                <p className='indent-8 mt-2 text-justify'>Dưới đây là 7 lợi ích sức khỏe chủ yếu khi bạn tiêu thụ chất béo lành mạnh như một phần của chế độ ăn lành mạnh hàng ngày.</p>

            </div>
            
            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Chất béo lành mạnh giúp tăng cường chức năng não</div>
                <img src={articleImage1.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Chất béo lành mạnh, đặc biệt là acid béo omega-3 có trong cá béo, các loại hạt và quả bơ đóng một vai trò quan trọng đối với sức khỏe não bộ cũng như chức năng nhận thức. Những chất béo này là thành phần thiết yếu trong cấu trúc của não, góp phần tạo nên tính linh hoạt và tính toàn vẹn của màng tế bào. Tính linh hoạt này cho phép giao tiếp tốt hơn giữa các tế bào thần kinh, tăng cường trí nhớ, khả năng học tập và chức năng tổng thể của não. Acid béo omega-3 còn được biết đến với đặc tính chống viêm, giúp bảo vệ não chống lại sự lão hóa và các bệnh thoái hóa thần kinh như bệnh Alzheimer.</p>
            </div>
            
            <div id='session-2' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. Hỗ trợ quản lý cân nặng</div>
                <p className='indent-8 mt-2 text-justify'>Nghe có vẻ hơi vô lý nhưng thực tế, các nghiên cứu đã chứng minh chất béo lành mạnh đóng một vai trò quan trọng trong việc quản lý cân nặng, chủ yếu bằng cách thúc đẩy cảm giác no, giúp giảm lượng calo tiêu thụ. Thực phẩm giàu chất béo lành mạnh giúp bạn cảm thấy no lâu hơn do đó ngăn cản việc ăn quá nhiều và ăn vặt không cần thiết, điều này rất cần thiết để duy trì cân nặng khỏe mạnh.</p>
                <img src={articleImage2.src} className='w-full my-10' alt="" />
            </div>
            
            <div id='session-3' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>3. Tiêu thụ chất béo lành mạnh giúp cơ thể hấp thụ chất dinh dưỡng tối ưu</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo lành mạnh đóng vai trò quan trọng trong việc hấp thụ các vitamin tan trong chất béo, bao gồm vitamin A, D, E và K. Những vitamin này rất cần thiết cho các chức năng cơ thể khác nhau, từ duy trì thị lực và sức khỏe làn da đến hỗ trợ hệ thống miễn dịch và đông máu. Sự hiện diện của chất béo lành mạnh trong chế độ ăn giúp tăng cường khả năng hòa tan của các vitamin này trong ruột, tạo điều kiện cho chúng hấp thụ vào cơ thể. Điều này là do chất béo tạo ra môi trường dung môi cho các vitamin này, cho phép chúng hòa tan và dễ dàng được các tế bào ruột hấp thụ để vận chuyển khắp cơ thể.</p>
            </div>
            
            <div id='session-4' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>4. Tăng cường sức khỏe của mắt</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo lành mạnh, đặc biệt là acid béo omega-3, rất quan trọng để duy trì sức khỏe và thị lực của mắt tối ưu. Những chất béo này là thành phần thiết yếu của màng tế bào, bao gồm cả màng tế bào trong mắt. Chúng đóng một vai trò quan trọng trong việc hỗ trợ sức khỏe của võng mạc, duy trì tính toàn vẹn của hệ thần kinh và chống lại chứng viêm, có khả năng làm giảm nguy cơ mắc các bệnh mắt như thoái hóa hoàng điểm.</p>
                <img src={articleImage3.src} className='w-full my-10' alt="" />
            </div>
            
            <div id='session-5' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>5. Chất béo lành mạnh hỗ trợ hệ thống miễn dịch</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo lành mạnh hỗ trợ sức khỏe miễn dịch. Những chất béo này góp phần vào sự toàn vẹn của màng tế bào khắp cơ thể, bao gồm cả các tế bào miễn dịch. Tính toàn vẹn về cấu trúc này là điều cần thiết để cho phép các tế bào miễn dịch giao tiếp và phản ứng hiệu quả với các mầm bệnh xâm nhập, do đó củng cố các cơ chế phòng vệ của cơ thể.</p>
                <p className='indent-8 mt-2 text-justify'>Ngoài ra, acid béo omega-3 có đặc tính chống viêm giúp điều chỉnh phản ứng của hệ miễn dịch. Bằng cách giảm viêm, acid béo omega-3 có thể giúp duy trì hệ thống miễn dịch đáp ứng thích hợp, đặc biệt có lợi trong việc kiểm soát các bệnh tự miễn và dị ứng.</p>
            </div>
            
            <div id='session-6' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>6. Chất béo lành mạnh giúp chống viêm</div>
                <p className='indent-8 mt-2 text-justify'>Chất béo lành mạnh đóng vai trò quan trọng trong việc chống viêm, nguyên nhân gốc rễ của nhiều bệnh mạn tính. Thực phẩm giàu acid béo omega-3 đã được chứng minh là làm giảm mức độ các dấu hiệu viêm trong cơ thể.</p>
            </div>
            
            <div id='session-2' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>7. Hỗ trợ mức độ hormone cân bằng</div>
                <p className='indent-8 mt-2 text-justify'>Ăn chất béo lành mạnh hỗ trợ nồng độ hormone trong cơ thể, góp phần đáng kể vào sức khỏe và tinh thần tổng thể. Chất béo, đặc biệt là acid béo omega-3, là nền tảng cho việc sản xuất và điều hòa một số hormone, bao gồm cả những hormone chịu trách nhiệm kiểm soát quá trình trao đổi chất, tăng trưởng, chức năng miễn dịch và sức khỏe sinh sản. Do đó, tiêu thụ đủ lượng chất béo lành mạnh không chỉ hỗ trợ sản xuất hormone mà còn đảm bảo chức năng và sự phân phối tối ưu của chúng, nhấn mạnh tầm quan trọng của chất béo trong chế độ ăn uống lành mạnh.</p>
            </div>
            
        </div>
    );
};

export default Article1;