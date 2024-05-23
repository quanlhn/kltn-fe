'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/lipit/article2.jpg'
import articleImage2 from '../../../../../../../public/macronutritionsPage/lipit/article2-1.jpg'
import articleImage3 from '../../../../../../../public/macronutritionsPage/lipit/article2-2.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article2 = () => {
    const router = useRouter()  

    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>  
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>    
                <span className='italic cursor-pointer'>Chất béo</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>10 thực phẩm đốt cháy chất béo nên ăn khi giảm cân</div>

            <p className='font-semibold mt-5 text-justify'>Những gì ăn hằng ngày đóng vai trò then chốt trong việc giảm cân. Cách để giảm cân là đảm bảo dinh dưỡng tốt và thêm thực phẩm đốt cháy chất béo vào chế độ ăn uống.</p>
            
            <div className="mucluc flex flex-col mt-10 px-3 py-2 bg-gray-200 rounded-lg w-3/5">
                <div className='font-semibold underline '>Nội dung</div>
                <Link href={'#session-1'} className='my-2 underline'>1. Giảm cân nhưng đảm bảo dinh dưỡng tốt</Link>
                <Link href={'#session-2'} className='my-2 underline'>2. Dinh dưỡng quan trọng trong việc giảm cân</Link>
                <Link href={'#session-3'} className='my-2 underline'>3. 10 thực phẩm đốt cháy chất béo hỗ trợ giảm cân</Link>
            </div>

            <div id='session-0' className='mt-10'>
                <p className='indent-8 mt-2 text-justify'>Không có loại thực phẩm nào đảm bảo giảm cân nhưng có rất nhiều lựa chọn lành mạnh giúp hỗ trợ giảm cân khi được đưa vào chế độ ăn uống lành mạnh. Ngoài việc là món bổ sung thơm ngon cho các bữa ăn chính và bữa ăn nhẹ, gần như tất cả các loại thực phẩm này đều chứa chất xơ hoặc protein (hoặc cả hai) - những chất dinh dưỡng giúp no lâu hơn. Thường xuyên ăn những thực phẩm này là một cách đơn giản để tối đa hóa bữa ăn.</p>
            </div>

            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>1. Giảm cân nhưng đảm bảo dinh dưỡng tốt</div>
                <img src={articleImage2.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Dinh dưỡng tốt có nghĩa là đảm bảo cơ thể nhận được tất cả các chất dinh dưỡng, khoáng chất và vitamin cần thiết để hoạt động tốt nhất. Không có một loại thực phẩm nào chứa tất cả các chất dinh dưỡng thiết yếu cần thiết để khỏe mạnh, đó là lý do tại sao cần một chế độ ăn uống cân bằng, đa dạng.</p>
                <p className='indent-8 mt-2 text-justify'>Một chế độ ăn uống lành mạnh không chỉ là đảm bảo ăn đủ lượng calo cho cơ thể. Đó cũng là việc đảm bảo nhận được nhiều loại chất dinh dưỡng mà cơ thể cần. Mặc dù tiêu thụ ít calo hơn lượng calo đốt cháy là khía cạnh cơ bản của việc giảm cân nhưng không phải tất cả lượng calo đều được tạo ra như nhau, vì vậy cũng cần tiêu thụ đúng loại thực phẩm.</p>
            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>2. Dinh dưỡng quan trọng trong việc giảm cân</div>
                <p className='indent-8 mt-2 text-justify'>Mặc dù có rất nhiều lợi ích khác nhưng dinh dưỡng và giảm cân luôn song hành với nhau. Nhiều nghiên cứu đã tìm thấy mối liên hệ giữa thực phẩm chế biến sẵn và bệnh béo phì, đó là lý do tại sao người ta khuyến nghị chế độ ăn uống chủ yếu bao gồm "thực phẩm thực sự" nhiều chất dinh dưỡng, hầu hết là thực phẩm chưa qua chế biến như trái cây, rau quả, giàu vitamin và khoáng chất.</p>
                <p className='indent-8 mt-2 text-justify'>Trong khi đó, thực phẩm chế biến sẵn thường cung cấp ít giá trị dinh dưỡng nhưng lại chứa nhiều calo.</p>
                
                <p className='indent-8 mt-2 text-justify'>Ăn thực phẩm bổ dưỡng là điều bắt buộc đối với những người muốn giảm cân. Khi nói đến chất béo và giảm cân, protein là chất dinh dưỡng quan trọng nhất. Nó có tác dụng sinh nhiệt cao hơn carbs hoặc chất béo (có nghĩa là tiêu hóa nó sử dụng nhiều năng lượng hơn), tăng cường trao đổi chất và ảnh hưởng đến việc sản xuất hormone điều chỉnh cân nặng.</p>
                <p className='indent-8 mt-2 text-justify'>Thực phẩm tươi là nguồn cung cấp protein tuyệt vời vì chúng hầu như chưa qua chế biến. Đồng thời, chúng cũng có xu hướng chứa ít calo hơn các loại thực phẩm khác, vì vậy rất quan trọng trong việc giảm cân.</p>
                <p className='indent-8 mt-2 text-justify'>Chất dinh dưỡng là một phần quan trọng trong bất kỳ hành trình giảm cân nào và thực phẩm chế biến sẵn sẽ làm chậm nỗ lực. Chế độ ăn giàu vi chất dinh dưỡng cũng sẽ giúp cảm thấy no lâu hơn, nghĩa là giảm ăn vặt hoặc xu hướng ăn nhiều hơn.</p>
                <p className='indent-8 mt-2 text-justify'>Vì vậy, chế độ ăn giàu chất dinh dưỡng có thể giúp giảm béo, cải thiện tình trạng thiếu hụt dinh dưỡng, giảm tình trạng đói.</p>
            </div>

            <div id='session-3' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>3. 10 thực phẩm đốt cháy chất béo hỗ trợ giảm cân</div>
                <div className='mt-2 font-semibold'>Hạt chia</div>
                <img src={articleImage1.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Khi nói đến giảm cân, chất xơ luôn được chú trọng vì chất xơ làm chậm quá trình tiêu hóa và giúp chúng ta cảm thấy no lâu hơn. Điều này cực kỳ quan trọng khi cắt giảm lượng calo, một phương pháp giảm cân phổ biến. Tiêu thụ một khẩu phần hạt chia khoảng 2 muỗng canh đáp ứng khoảng 1/4 nhu cầu chất xơ hàng ngày. Hạt chia rất dễ kết hợp vào các bữa ăn, đặc biệt là bữa sáng và bữa ăn nhẹ.</p>
                
                <div className='mt-2 font-semibold'>Cá béo</div>
                <p className='indent-8 mt-2 text-justify'>Cá béo không chứa chất béo bão hòa, cá là nguồn cung cấp acid béo omega-3 cho cơ thể. Acid béo omega-3 thúc đẩy việc kiểm soát cân nặng. Cá giàu protein, chất béo lành mạnh, lượng protein trong các khẩu phần cá không chỉ giúp no lâu hơn mà còn hỗ trợ quá trình xây dựng cơ bắp của cơ thể. Tăng khối lượng cơ bắp, giảm mỡ là một trong những nguyên tắc giảm cân lành mạnh.</p>
                <p className='indent-8 mt-2 text-justify'>Ngoài ra, cá rất giàu iốt, có tác dụng hỗ trợ các hormone tuyến giáp hoạt động bình thường. Chất dinh dưỡng này cũng có liên quan đến quá trình trao đổi chất của cơ thể ở mức tối ưu. Tăng cường quá trình trao đổi chất tốt giúp đốt cháy calo nhiều hơn, cải thiện hiệu suất tập luyện.</p>
                <p className='indent-8 mt-2 text-justify'>Một số loại cá lành mạnh cho quá trình giảm cân như cá hồi, cá ngừ, cá tuyết, cá mòi, cá thu. Nên chế biến như hấp, luộc, làm salad với các loại cá này để thêm vào chế độ ăn kiêng giảm cân.</p>

                <div className='mt-2 font-semibold'>Rau họ cải</div>
                <p className='indent-8 mt-2 text-justify'>Lợi ích sức khỏe của các loại rau họ cải bao gồm bông cải xanh, súp lơ trắng và các loại rau lá xanh đậm như cải xoăn... được công nhận.</p>
                <p className='indent-8 mt-2 text-justify'>Các loại rau thuộc họ cải cũng chứa ít calo và carbohydrate, do đó là thực phẩm bổ sung không chứa tinh bột hoàn hảo cho kế hoạch ăn giảm cân. Những loại rau này rất đơn giản để bổ sung trong suốt cả tuần. Tham khảo làm món salad, thay thế lượng carb thấp cho ngũ cốc.</p>

                <div className='mt-2 font-semibold'>Các loại ngũ cốc</div>
                <p className='indent-8 mt-2 text-justify'>Ngoài vitamin, khoáng chất và chất dinh dưỡng thực vật, ngũ cốc nguyên hạt như mì ống làm từ lúa mì nguyên hạt, gạo lứt và quinoa còn chứa chất xơ giúp cảm thấy no. Ngoài ra, cơ thể và bộ não thích năng lượng từ carbohydrate, vì vậy tiêu thụ những thực phẩm này cùng với protein và chất béo lành mạnh giúp giảm cảm giác thèm ăn carbohydrate hoặc đường tinh chế.</p>

                <div className='mt-2 font-semibold'>Hạt dẻ cười</div>
                <p className='indent-8 mt-2 text-justify'>Tất cả các loại hạt đều có thể được đưa vào chế độ ăn kiêng giảm cân lành mạnh. Chúng mang lại cảm giác no và thỏa mãn nhờ hàm lượng chất béo, chất xơ và protein lành mạnh. Điều quan trọng là kiểm soát khẩu phần ăn, vì một khẩu phần hạt có vỏ (khoảng 1/4 cốc) chứa khoảng 160 đến 200 calo.</p>
                <p className='indent-8 mt-2 text-justify'>Về lượng calo, hạt dẻ cười có vỏ là loại hạt nằm giữa cung cấp 183 calo mỗi khẩu phần. Ngoài việc ngon miệng, hạt dẻ cười còn có rất nhiều lợi ích cho sức khỏe. Theo một nghiên cứu năm 2020 trên tạp chí Nutrients (Dinh dưỡng của Hoa Kỳ), việc tiêu thụ hạt dẻ cười thường xuyên có liên quan đến việc giảm cân, kể cả ở bụng, ở những người thừa cân. Ăn hạt dẻ cười hai lần trở lên mỗi tuần có thể làm giảm nguy cơ tăng cân trong tương lai, theo một nghiên cứu năm 2019 trên BMJ Nutrition, Prevention & Health.</p>

                <div className='mt-2 font-semibold'>Đậu lăng</div>
                <p className='indent-8 mt-2 text-justify'>Đậu lăng có kích thước nhỏ nhưng là một lựa chọn thực phẩm tuyệt vời bởi có tác dụng lớn trong việc giảm cân. Đậu lăng rất giàu carbohydrate phức tạp, một chất dinh dưỡng giúp tăng cường trao đổi chất và giúp đốt cháy chất béo. Vì đậu lăng hầu như không chứa chất béo nhưng lại có nhiều chất xơ nên chúng có xu hướng khiến no mà không cần thêm lượng calo không cần thiết vào bữa ăn. Điều này đặc biệt hữu ích cho những người luôn phải vật lộn với cảm giác đói.</p>
                <p className='indent-8 mt-2 text-justify'>Ăn nhiều đậu lăng giúp mọi người duy trì cân nặng khỏe mạnh hoặc giảm cân. Thay thế thực phẩm giàu năng lượng (hoặc nhiều calo) bằng các loại đậu như đậu lăng có thể giúp mọi người ngăn ngừa hoặc kiểm soát béo phì và giảm cân.</p>

                <div className='mt-2 font-semibold'>Quả táo</div>
                <img src={articleImage3.src} className='w-full my-10' alt="" />
                <p className='indent-8 mt-2 text-justify'>Giống như rau, trái cây là sự bổ sung thông minh cho bất kỳ kế hoạch giảm cân lành mạnh nào. Do hàm lượng nước và chất xơ cao (hãy nhớ ăn cả vỏ), táo giúp no lâu và ít calo, giàu chất chống oxy hóa, và giúp ngăn chặn cảm giác thèm đồ ngọt - những yếu tố đóng vai trò giúp giảm cân.</p>
                <p className='indent-8 mt-2 text-justify'>Táo chiếm tới 85 – 86% nước trọng lượng của táo. Táo giúp thúc đẩy quá trình giảm cân vì chúng có lượng calo thấp tự nhiên. Tùy thuộc vào kích cỡ, táo cung cấp 80 đến 130 calo mỗi quả, đường tự nhiên trong táo cũng giúp hạn chế cảm giác thèm đồ ngọt.</p>
                <p className='indent-8 mt-2 text-justify'>Do táo giàu chất xơ nên có thể giúp ăn ít hơn vì chúng tạo cảm giác no. Một quả táo chứa 4 đến 5g chất xơ, cung cấp khoảng 12% đến 16% lượng chất xơ khuyến nghị hàng ngày. Táo có tác dụng làm no lâu, giúp kiềm chế cơn đói, giúp dễ dàng duy trì tình trạng thiếu calo để giảm cân. Táo còn là thực phẩm có lượng đường huyết thấp, được biết là có tác dụng hỗ trợ giảm cân bền vững.</p>

                <div className='mt-2 font-semibold'>Thực phẩm lên men</div>
                <p className='indent-8 mt-2 text-justify'>Sức khỏe đường ruột rất quan trọng, theo một đánh giá năm 2020 trên Tạp chí Dinh dưỡng Dự phòng và Khoa học Thực phẩm Hoa Kỳ, ngoài việc hỗ trợ khả năng miễn dịch và tiêu hóa tốt, sự cân bằng lành mạnh của vi khuẩn tốt trong đường ruột có thể giúp thúc đẩy quá trình đốt cháy chất béo.</p>
                <p className='indent-8 mt-2 text-justify'>ác nguồn cung cấp men vi sinh tốt (vi khuẩn tốt) bao gồm kefir và sữa chua có chứa vi khuẩn sống, dưa cải bắp tự làm, tempeh... Cố gắng ăn một vài miếng hoặc ngụm thực phẩm giàu men vi sinh trong hầu hết các ngày, ngoài việc ăn prebiotic (như chuối, măng tây, các loại đậu và hành tây), cung cấp nhiên liệu cho vi khuẩn đường ruột khỏe mạnh.</p>

                <div className='mt-2 font-semibold'>Quả bơ</div>
                <p className='indent-8 mt-2 text-justify'>Quả bơ dường như có tác dụng cắt giảm hầu hết mọi kế hoạch ăn kiêng. Quả bơ cung cấp một lượng lớn chất béo và chất xơ lành mạnh, cùng với kết cấu bơ giúp tăng thêm sự phong phú cho các bữa ăn và đồ ăn nhẹ.</p>
                <p className='indent-8 mt-2 text-justify'>Một nghiên cứu năm 2021 trên Tạp chí Dinh dưỡng cho thấy những phụ nữ tiêu thụ một quả bơ mỗi ngày cùng với chế độ ăn giảm calo sẽ giảm mô mỡ nội tạng nhiều hơn so với những phụ nữ không đưa bơ vào chế độ ăn giảm calo.</p>
                <p className='indent-8 mt-2 text-justify'>Nhưng một nghiên cứu khác của Tạp chí Hiệp hội Tim mạch Hoa Kỳ năm 2022 không tìm thấy tác dụng nào như vậy, mặc dù ăn một quả bơ hàng ngày làm giảm nhẹ cholesterol toàn phần và LDL (loại có hại). Mặc dù có nhiều nghiên cứu khác nhau về tác dụng của bơ đối với mỡ bụng nhưng chúng là một thực phẩm bổ sung đầy đủ dinh dưỡng và thỏa mãn cho chế độ ăn uống lành mạnh.</p>

                <div className='mt-2 font-semibold'>Trứng</div>
                <p className='indent-8 mt-2 text-justify'>Trứng thực sự là một loại protein gần như hoàn hảo, đặc biệt là khi giảm cân. Theo một nghiên cứu năm 2020 trên Tạp chí Quốc tế về Nghiên cứu Môi trường và Sức khỏe Cộng đồng, khi ăn vào bữa sáng, trứng đã được chứng minh là có tác dụng giúp giảm cân.</p>
                <p className='indent-8 mt-2 text-justify'>Trứng là thực phẩm ít calo, giàu protein và các chất dinh dưỡng khác. Ăn trứng cũng hỗ trợ giảm cân, tăng cường trao đổi chất, đặc biệt nếu một người kết hợp chúng vào chế độ ăn kiêng kiểm soát lượng calo. Một nghiên cứu được công bố trên Tạp chí Dinh dưỡng cho thấy thực phẩm giàu protein làm tăng cảm giác no, giảm cảm giác thèm ăn, từ đó giúp giảm cân.</p>

            </div>

        </div>
    );
};

export default Article2;