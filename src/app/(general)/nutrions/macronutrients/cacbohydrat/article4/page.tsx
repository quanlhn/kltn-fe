'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/carbohydrat/article4.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/carbohydrat/article2-2.jpg'
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
            <div className='mt-10 text-4xl font-semibold'>Những sai lầm phổ biến khi kiêng ăn tinh bột để giảm cân</div>

            <p className='font-semibold mt-5 text-justify'>Carbohydrate (hay còn gọi là tinh bột) là một loại dinh dưỡng đa lượng cần thiết với cơ thể nhưng gần đây nó được coi là “thủ phạm” gây tăng cân. Nếu bạn kiêng ăn tinh bột với mục đích giảm cân, hãy đọc bài viết này để không tiếp tục sai lầm.</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Carbohydrate là một thành phần dinh dưỡng thiết yếu với cơ thể</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. Cắt giảm carbohydrate có thực sự giúp giảm cân?</Link>
                <Link href={'#session-3'} className='my-2 underline'>3. Lưu ý khi ăn thực phẩm chứa carbs để tránh tăng cân</Link>
            </div>

            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Carbohydrate là một thành phần dinh dưỡng thiết yếu với cơ thể</div>
                <p className='indent-8 mt-2 text-justify'>Theo ThS.BS. Lê Thị Hải - nguyên Giám đốc Trung tâm Khám và Tư vấn dinh dưỡng, Viện Dinh dưỡng quốc gia, carbs (viết tắt của carbohydrate) là một trong 3 thành phần chất dinh dưỡng chính của cơ thể có trong thức ăn của con người, cùng với protein (chất đạm) và lipid (chất béo), carbs là các chất dinh dưỡng đa lượng cần thiết.</p>
                <p className='indent-8 mt-2 text-justify'>Carbohydrate chứa các nguyên tử carbon, hydro và oxy, hoạt động như một nguồn năng lượng quan trọng và giúp kiểm soát lượng đường trong máu. Carbs cũng tham gia vào quá trình chuyển hóa cholesterol và chất béo trung tính.</p>
                <p className='indent-8 mt-2 text-justify'>Công dụng chính của carbs là sinh ra năng lượng (đo bằng kcalo). Muốn sinh năng lượng, hệ tiêu hóa phải "chặt" carbs thành glucose, ruột mới hấp thu được, rồi chuyển glucose vào máu đem đến các tế bào để "đốt" sinh ra năng lượng cho cơ thể.</p>
                <p className='indent-8 mt-2 text-justify'>Dựa trên ảnh hưởng của carbohydrate đối với lượng đường trong máu và tác động của chúng đối với insulin, chia thành 3 loại carbohydrate đơn giản, carbohydrate phức hợp và chất xơ.</p>
                <div className='font-semibold'>Carbohydrate đơn giản</div>
                <p className='indent-8 mt-2 text-justify'>Carbohydrate đơn giản là các loại đường đơn, monosacarit hoặc disacarit như glucose, galactose, lactose, sucrose và maltose. Cơ thể chúng ta sử dụng chúng một cách hiệu quả và gây ra sự gia tăng ngay lập tức lượng đường trong máu và insulin. Đó là loại carbs gây tăng cân.</p>
                <div className='font-semibold'>Carbohydrate phức hợp</div>
                <p className='indent-8 mt-2 text-justify'>Carbohydrate phức hợp là các polysacarit phức tạp như amylose, cellulose, dextrin và rutinulose. Những chất này mất nhiều thời gian hơn để tiêu hóa và làm tăng lượng đường trong máu từ từ thay vì tăng nhanh. Carbohydrate phức hợp cũng bao gồm một phân nhóm được gọi là tinh bột, chủ yếu được sản xuất bởi thực vật. Carbs phức hợp là carbs tốt để giảm cân.</p>
                <div className='font-semibold'>Chất xơ</div>
                <p className='indent-8 mt-2 text-justify'>Chất xơ là carbohydrate phức hợp khuyến khích sự phát triển của vi khuẩn lành mạnh trong ruột. Chúng cũng hoạt động như một chất độn, làm tăng khối lượng và làm mềm phân, do đó giúp đại tiện dễ dàng hơn. Chất xơ cũng được biết là làm giảm mức cholesterol trong máu và giảm mức đường huyết sau bữa ăn. Thành phần chính của chất xơ là cellulose, hemicellulose và pectin.</p>
                
            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. Cắt giảm carbohydrate có thực sự giúp giảm cân?</div>
                <p className='indent-8 mt-2 text-justify'>Mặc dù có vai trò thiết yếu trong cơ thể bạn, nhưng carbohydrate lại mang tiếng xấu. Quan niệm sai lầm rằng carbohydrate gây béo ngăn cản mọi người áp dụng một chế độ ăn uống cân bằng hợp lý. Do đó, đa số tin rằng carbs là "kẻ thù" trong hành trình giảm cân của mình và cố gắng tránh chúng hoàn toàn.</p>
                <p className='indent-8 mt-2 text-justify'>ThS. Lê Thị Hải cho biết: Nhiều người thường cho rằng chất bột đường (carbohydrate) là "kẻ thù" của sức khỏe, chính là "thủ phạm" gây tăng cân. Thế nhưng, thực tế hoàn toàn không hẳn vậy, cũng giống như chất béo có loại xấu, loại tốt. Chất bột đường cũng vậy.</p>
                <ul className='list-disc ml-20'>
                    <li className='mt-3'>Carbohydrate đơn giản hoặc tinh chế làm tăng nhanh lượng đường của bạn và thường được chuyển hóa thành chất béo và gây tăng cân. Những loại carbs đơn giản này là lý do tại sao carbohydrate lại có hình ảnh xấu như vậy. Tuy nhiên, cắt giảm lượng carbs là không lý tưởng và không bền vững.</li>
                    <li className='mt-3'>Các loại carbs phức hợp mất nhiều thời gian hơn để tiêu hóa và khiến lượng đường tăng chậm. Để đưa ra những lựa chọn lành mạnh, bạn cần biết sự khác biệt giữa carbs tốt và xấu, chủ yếu là cách chúng ảnh hưởng đến cân nặng của bạn.</li>
                </ul >
                <p className='indent-8 mt-2 text-justify'>Để theo đuổi mục tiêu giảm cân, điểm mấu chốt là tập trung vào hành trình giảm cân bền vững. Tất cả phụ thuộc vào những gì bạn đang ăn hàng ngày và những gì tạo nên mức thâm hụt calo của bạn.</p>
                <p className='indent-8 mt-2 text-justify'>Tuy nhiên, trước tiên, điều cần thiết là phải lưu ý đến lượng carb bạn chọn tiêu thụ. Hãy nhớ rằng, sự cân bằng là rất quan trọng, tiêu thụ carbs là bình thường và không cần phải loại bỏ chúng. Carbs là nguồn sinh năng lượng chủ yếu, dù cho cơ thể có thể lấy năng lượng qua con đường bẻ gãy chất béo hoặc protein.</p>
                <p className='indent-8 mt-2 text-justify'>ThS. BS Lê Thị Hải giải thích, nếu trong chế độ ăn không cung cấp đủ lượng carbs cần thiết, cơ thể có thể bị táo bón bởi thiếu hụt lượng chất xơ và dưỡng chất cần thiết. Thiếu carbs khiến cơ thể sử dụng protein hoặc chất béo để sinh năng lượng. Do đó, cơ thể sẽ không thể phát triển hoặc hồi phục tổn thương vì protein là thành phần cấu trúc của cơ thể. Sử dụng chất béo quá nhiều có thể tạo ra các ketone gây hiện tượng toan máu.</p>
            </div>

            <div id='session-3'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>3. Lưu ý khi ăn thực phẩm chứa carbs để tránh tăng cân</div>
                <p className='indent-8 mt-2 text-justify'>Carbohydrate có trong nhiều loại thực phẩm như đường, trái cây, rau và các loại đậu. Mặc dù có rất nhiều loại và phân chia carbohydrate, nhưng chỉ một số loại carbs được coi là tốt cho sức khỏe.</p>
                <p className='indent-8 mt-2 text-justify'>Không phải tất cả các loại carbs đều được tạo ra như nhau. Nếu ăn đúng loại carbs và khẩu phần thích hợp của những thực phẩm này sẽ cung cấp cho cơ thể nguồn dinh dưỡng và nhiên liệu thích hợp mà cơ thể cần. Điều này có nghĩa là bạn có thể ăn carbs mà vẫn giảm cân, khỏe hơn và cơ thể săn chắc hơn.</p>
                <img src={articleImage1.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Các loại carbohydrate tốt nhất để tiêu thụ là những loại giàu chất xơ như trái cây, rau, khoai tây, bí, đậu và ngũ cốc nguyên hạt. Những loại carbs này còn được gọi là carbs thông minh, cung cấp giá trị cho cơ thể với hàm lượng chất dinh dưỡng và chất xơ cao - điều này khá quan trọng nếu bạn đang cố gắng sống một lối sống lành mạnh.</p>
                <p className='indent-8 mt-2 text-justify'>Tinh bột thông minh là loại tinh bột bạn nên ăn với khẩu phần phù hợp trong các bữa ăn của mình. Đây là những loại carbs sẽ có tác động tích cực đến cảm giác của bạn, hiệu suất của bạn khi tập thể dục và mức năng lượng hàng ngày của bạn.</p>
                <p className='indent-8 mt-2 text-justify'>Nên hạn chế tiêu thụ các loại carbs tinh chế ví dụ như mì ống, bánh mì trắng, ngũ cốc tinh chế, khoai tây chiên, bánh kẹo, nước ngọt,… Đây là những loại thực phẩm tiện lợi và ngon miệng nhưng đã bị loại bỏ chất xơ và chất dinh dưỡng, do đó không mang lại giá trị gì cho cơ thể.</p>
            </div>
        </div>
    );
};

export default Article4;