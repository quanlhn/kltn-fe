'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/lipit/article4.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/lipit/article4-1.jpg'
import articleImage3 from '../../../../../../../public/macronutritionsPage/lipit/article4-2.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article4 = () => {
    const router = useRouter()
    
    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>
                <span className='italic cursor-pointer'>Tinh bột</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>8 loại thực phẩm chứa nhiều chất béo omega-3 tốt cho tim mạch</div>

            <p className='font-semibold mt-5 text-justify'>Acid béo omega-3 là một phần quan trọng trong chế độ ăn uống, mang lại những lợi ích cho sức khỏe tổng thể và sức khỏe tim mạch. Vậy những thực phẩm nào chứa nhiều chất béo omega-3 tốt?</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Acid béo omega-3 mang lại nhiều lợi ích cho sức khỏe</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. 8 loại thực phẩm giàu omega-3</Link>
            </div>

            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Acid béo omega-3 mang lại nhiều lợi ích cho sức khỏe</div>
                <p className='indent-8 mt-2 text-justify'>Acid béo omega-3 bao gồm 3 loại là EPA, ALA và DHA. Lợi ích nổi bật của chất béo omega-3 là đặc tính chống viêm, giúp giảm nguy cơ mắc bệnh tim đồng thời hỗ trợ khả năng miễn dịch.</p>
                <p className='indent-8 mt-2 text-justify'>Tăng cường sức khỏe tim mạch: Omega-3 rất quan trọng đối với các tế bào khỏe mạnh, tạo nên một phần của màng bao quanh mọi tế bào trong cơ thể. Omega-3 làm giảm nguy cơ đông máu và giảm số lượng chất béo trong máu được gọi là chất béo trung tính. Sự gia tăng nồng độ chất béo trung tính là nguyên nhân chính dẫn đến các bệnh về tim mạch.</p>
                <p className='indent-8 mt-2 text-justify'>Cải thiện sức khỏe não bộ: Nghiên cứu cho biết omega-3 có tác dụng bảo vệ thần kinh và nâng cao khả năng nhận thức. Acid béo omega-3 hỗ trợ lưu thông máu tới các khu vực trong não bộ liên quan tới trí nhớ và khả năng học tập, do vậy làm giảm nguy cơ mắc bệnh Alzheimer ở người cao tuổi.</p>
                <p className='indent-8 mt-2 text-justify'>Giảm các triệu chứng trầm cảm và lo lắng: Nhiều nghiên cứu đã chứng minh omega-3 tốt cho người bệnh rối loạn lo âu và trầm cảm.</p>
                <p className='indent-8 mt-2 text-justify'>Theo một nghiên cứu, bổ sung đầy đủ omega-3 có lợi trong việc giảm các triệu chứng liên quan đến các vấn đề sức khỏe tâm thần như trầm cảm và lo lắng. Trong đó, EPA là loại có hiệu quả nhất trong việc kiềm chế các rối loạn sức khỏe tâm thần.</p>
                <p className='indent-8 mt-2 text-justify'>Omega-3 hỗ trợ thai kỳ khỏe mạnh: Chất béo omega-3 rất quan trọng cho sự tăng trưởng và phát triển thai nhi trong bụng mẹ. Chất béo giúp tăng cường sức khỏe não bộ của trẻ sơ sinh, đặc biệt là DHA ảnh hưởng trực tiếp tới sự phát triển não và võng mạc.</p>
                <p className='indent-8 mt-2 text-justify'></p>
                <p className='indent-8 mt-2 text-justify'></p>
                
            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. 8 loại thực phẩm giàu omega-3</div>
                <p className='indent-8 mt-2 text-justify'>Để có đủ omega-3, bạn cần ăn các đa dạng nhiều loại thực phẩm từ cả động vật và thực vật. Nguồn cung cấp omega-3 chủ yếu là cá béo và dầu hạt lanh. Các nguồn cung cấp omega-3 tốt nhất là hải sản, bao gồm hàu và cá béo. Nhưng nếu bạn ăn chay, dầu thực vật, quả óc chó và hạt chia là những lựa chọn tốt để cung cấp lượng chất béo omega-3 hàng ngày.</p>
                <p className='indent-8 mt-2 text-justify italic'>Dưới đây là 8 loại thực phẩm chứa chất béo omega-3 và mỗi loại có thể ảnh hưởng đến sức khỏe của bạn như thế nào:</p>

                <div className='mt-2 font-semibold italic'>Cá hồi giàu omega-3 nhất</div>
                <p className='indent-8 mt-2 text-justify'>Cá hồi là một trong những nguồn cung cấp chất béo omega-3 tốt nhất mà bạn nên thêm vào chế độ ăn uống của mình.</p>
                <p className='indent-8 mt-2 text-justify'>Một khẩu phần cá hồi hoang dã 100g chứa khoảng 1,8g acid béo omega-3, nhiều hơn nhu cầu khuyến nghị trong ngày. Tuy nhiên, cá hồi nuôi có lượng omega-3 ít hơn.</p>

                <div className='mt-2 font-semibold italic'>Cá béo</div>
                <p className='indent-8 mt-2 text-justify'>Ăn cá là cách tốt nhất để đưa thêm omega-3 vào chế độ ăn uống của bạn. Đặc biệt, các loại cá nhỏ có hàm lượng chất béo và dầu cao thường giàu omega-3.</p>
                <img src={articleImage2.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Một số nguồn omega-3 từ cá tốt nhất bao gồm:</p>
                <ul className='list-disc ml-20'>
                    <li className='mt-3'>Cá thu: 2,5g trong mỗi khẩu phần 100g.</li>
                    <li className='mt-3'>Cá trích: từ 1,3-2g mỗi khẩu phần.</li>
                    <li className='mt-3'>Cá cơm: 1,4g mỗi khẩu phần.</li>
                    <li className='mt-3'>Cá mòi: 1,2g mỗi khẩu phần.</li>
                    <li className='mt-3'>Cá thầu dầu: 2g mỗi khẩu phần.</li>
                </ul >
                <p className='indent-8 mt-2 text-justify'>Hiệp hội Tim mạch Hoa Kỳ khuyến nghị nên ăn 2-3 khẩu phần cá béo mỗi tuần để bảo vệ sức khỏe trái tim. Cá đóng hộp cũng cung cấp lượng omega-3 tương tự như cá tươi.</p>

                <div className='mt-2 font-semibold italic'>Dầu gan cá tuyết</div>
                <p className='indent-8 mt-2 text-justify'>Dầu gan cá tuyết là một loại dầu cá bổ sung cung cấp một nguồn chất béo omega-3 cần thiết. Một thìa cà phê dầu gan cá tuyết chứa 0,9g acid béo omega-3. Cùng với chất béo omega-3, dầu gan cá cũng rất giàu vitamin tan trong chất béo như vitamin A và vitamin D tốt cho sức khỏe.</p>
                <p className='indent-8 mt-2 text-justify'>Tuy nhiên, cần lưu ý là không nên dùng quá nhiều dầu gan cá tuyết có thể dẫn đến thừa vitamin A và vitamin D gây nguy hiểm. Người lớn có thể dùng khoảng 1 thìa canh (khoảng 15ml) mỗi ngày. Trẻ em dưới 12 tuổi nên dùng cách ngày, mỗi lần tối đa 1 thìa cà phê (khoảng 5ml) mỗi ngày. Nếu ở dạng viên cần tham khảo ý kiến của bác sĩ và dùng đúng theo hướng dẫn của nhà sản xuất ghi trên vỏ hộp.</p>
                <img src={articleImage1.src} className='w-full my-10' alt="" />

                <div className='mt-2 font-semibold italic'>Hàu cũng chứa omega-3</div>
                <p className='indent-8 mt-2 text-justify'>Có thể bạn sẽ ngạc nhiên khi nghe nói rằng hàu chứa chất béo omega-3. Ngoài việc cung cấp các vi chất quan trọng như kẽm, đồng, magie, trong 100g hàu sống có chứa 0,7g omega-3. Hàu có hàm lượng chất béo omega-3 thấp hơn một chút so với cá hồi, cá cơm và cá mòi nhưng vẫn là một nguồn rất phong phú. Hàu cũng cung cấp một số chất dinh dưỡng thiết yếu như vitamin B12 cùng với lượng protein cần thiết.</p>

                <div className='mt-2 font-semibold italic'>Đậu nành</div>
                <p className='indent-8 mt-2 text-justify'>Đậu nành là một nguồn cung cấp omega-3 tuyệt vời cho những người ăn chay. Đậu nành cung cấp một loại chất béo omega-3 được gọi là acid alpha-linolenic (ALA) được tìm thấy tự nhiên trong thực vật. Một khẩu phần đậu nành 100g chứa khoảng 1,4g acid béo ALA.</p>
                <p className='indent-8 mt-2 text-justify'>Cơ thể bạn khó hấp thụ chất béo ALA hơn các chất béo omega-3 khác là acid eicosapentaenoic (EPA) và acid docosahexaenoic (DHA), được tìm thấy trong cá. Vì lý do này, cá nói chung là nguồn cung cấp chất béo omega-3 tốt hơn thực vật.</p>
                <p className='indent-8 mt-2 text-justify'>Nhưng nếu bạn ăn chay hoặc không thích ăn cá, đậu nành và các sản phẩm từ đậu nành là một lựa chọn tốt để cung cấp omega-3, cùng với các chất dinh dưỡng khác như protein thực vật.</p>
                <img src={articleImage3.src} className='w-full my-10' alt="" />

                <div className='mt-2 font-semibold italic'>Hạt chia</div>
                <p className='indent-8 mt-2 text-justify'>Hạt chia rất giàu khoáng chất và nhiều acid béo ALA và là một trong những nguồn thực vật tốt nhất. Trong 1 muỗng hạt chia (khoảng 15g) chứa khoảng 5g chất béo omega-3. Hạt chia cũng rất giàu chất xơ, cung cấp gần 10g trong một muỗng. Hạt chia cũng cung cấp các chất khoáng cần thiết như canxi, sắt, magie và kẽm.</p>

                <div className='mt-2 font-semibold italic'>Quả óc chó</div>
                <p className='indent-8 mt-2 text-justify'>Quả óc chó không chỉ chứa nhiều protein và chất chống oxy hóa mà còn rất giàu acid béo ALA, với 2,5g omega-3 trong một khẩu phần 28g.</p>

                <div className='mt-2 font-semibold italic'>Dầu thực vật</div>
                <p className='indent-8 mt-2 text-justify'>Dầu thực vật cung cấp một lượng nhỏ omega-3, do vậy, nếu bạn không thường xuyên nhận được omega-3 từ cá béo thì dầu thực vật trong chế độ ăn hàng ngày cũng là một lựa chọn.</p>
                <p className='indent-8 mt-2 text-justify'>Nên nhớ một số loại dầu là nguồn omega-3 tốt hơn những loại dầu khác, ví dụ, dầu hạt lanh chứa gấp 6 lần lượng omega-3 của dầu hạt cải và 8 lần trong dầu đậu nành.</p>
            </div>
        </div>
    );
};

export default Article4;