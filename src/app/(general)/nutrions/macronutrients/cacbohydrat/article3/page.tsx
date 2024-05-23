'use client'

import React from 'react';

import articleImage1 from '../../../../../../../public/macronutritionsPage/carbohydrat/article3.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Article3 = () => {
    const router = useRouter()
    
    return (
        <div className='mt-28 mx-80'>
            <div>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Dinh dưỡng/</span>
                <span onClick={() => router.push('/nutrions/macronutrients')} className='italic cursor-pointer'>Chất dinh dưỡng đa lượng/</span>
                <span className='italic cursor-pointer'>Tinh bột</span>
            
            </div>
            <hr />
            <div className='mt-10 text-4xl font-semibold'>Nhu cầu về chất béo và tinh bột cho phụ nữ có thai</div>

            <p className='font-semibold mt-5 text-justify'>Chế độ dinh dưỡng, vận động, nghỉ ngơi hợp lý, đầy đủ sẽ giúp thai nhi phát triển tối ưu, bà mẹ đủ sức khỏe để sinh con, nuôi dưỡng và chăm sóc con.</p>
            <img src={articleImage1.src} className='w-full my-10' alt="" />
            
            <div id='session-1' className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>Nhu cầu lipid (chất béo)</div>
                <p className='indent-8 mt-2 text-justify'>Lipid trong cơ thể đóng vai trò quan trọng trong cấu trúc màng tế bào và dự trữ trong các mô như nguồn năng lượng dự trữ của cơ thể. Lipid là dung môi để hòa tan các vitamin tan trong chất béo, mặt khác lipid cũng là thành phần cung cấp năng lượng quan trọng trong khẩu phần. Nguồn cung cấp lipid là dầu, mỡ và các loại hạt có dầu như lạc, vừng, hạt điều...</p>
                <p className='indent-8 mt-2 text-justify'>Thực phẩm có nguồn gốc động vật và thực vật chứa nhiều loại lipid khác nhau với chất lượng khác nhau. Vì vậy, cần phải có sự cân bằng các loại thực phẩm trên trong khẩu phần để đảm bảo nhu cầu lipid đối với cơ thể không chỉ về số lượng và còn cả về chất lượng.</p>
                <p className='indent-8 mt-2 text-justify'>Để giúp cơ thể tăng cường hấp thu các loại vitamin tan trong chất béo (vitamin A, D, E, K), đồng thời chủ động phòng thừa cân, béo phì, nhu cầu lipid được khuyến nghị từ 25 đến 30% năng lượng tổng số, tối thiểu cũng đạt 20% năng lượng của khẩu phần. Khuyến nghị về tỷ lệ lipid động vật/lipid tổng số đối với người trưởng thành hiện nay là không nên vượt quá 60%.</p>
                <p className='indent-8 mt-2 text-justify'>Lipid đặc biệt quan trọng trong thời gian mang thai và cho con bú, quan trọng nhất là lipid tham gia vào quá trình hình thành và phát triển não trong quá trình mang thai và bảo đảm chất lượng của sữa mẹ. Tiêu thụ lipid quá thấp trong bữa ăn hàng ngày, không những ảnh hưởng đến sự phát triển não bộ và thần kinh mà còn nhiều cơ quan khác của của thai nhi.</p>
                <p className='indent-8 mt-2 text-justify'>Thiếu Lipid trong bữa ăn làm giảm sự hấp thu các chất dinh dưỡng, ảnh hưởng đến sức khỏe bà mẹ và dự trữ mỡ cho tạo sữa sau sinh. Bà mẹ mang thai ăn thiếu lipid có thể dẫn đến hậu quả là không đạt mức tăng cân trong thai kỳ, không bài tiết đủ lượng sữa và thiếu dinh dưỡng do thiếu protein năng lượng. Ngược lại, tiêu thụ quá nhiều lipid có thể dẫn đến thừa cân, béo phì, ảnh hưởng đến phát triển của thai cũng như một số bệnh mạn tính không lây và hội chứng rối loạn chuyển hóa cho mẹ.</p>
                <p className='indent-8 mt-2 text-justify'>Nhu cầu về chất lượng lipid: Khuyến nghị đầu tiên và quan trọng nhất vẫn là các acid béo no không được vượt quá 10% năng lượng khẩu phần. Để làm được điều này, có thể tăng cường sử dụng các loại dầu thực vật và hạn chế tiêu thụ các loại mỡ động vật. Các acid béo không no (như acid linoleic, linolenic, decosahexaenoic và các acid béo không no khác) phải đảm bảo cung cấp 11-15% năng lượng. Để đạt được điều này, cần tăng cường tiêu thụ các loại dầu thực vật và dầu cá.</p>
            </div>
            
            <div id='session-2'  className='mt-10'>
                <div  className='font-bold mt-2 text-lg'>Nhu cầu glucid (chất bột)</div>
                <p className='indent-8 mt-2 text-justify'>Chất bột đường bao gồm các loại lương thực, đường và chất xơ. Đây là thành phần cơ bản nhất, chiếm khối lượng lớn nhất trong bữa ăn và là nguồn cung cấp năng lượng chính cho cơ thể.</p>
                <p className='indent-8 mt-2 text-justify'>Căn cứ vào số lượng các phân tử đường, người ta phân chia chất bột đường thành 3 loại chính là đường đơn, đường đôi (có phân tử đường dao động từ 2 – 10) và đường đa phân tử (số lượng phân tử đường &gt; 10 như glycogen, tinh bột, chất xơ). Đường đơn và đường đôi có trong bánh ngọt, sô –cô- la, bánh bích quy và những loại nước ngọt có gaz. Loại chất bột đường này có hàm lượng đường cao nhưng giá trị dinh dưỡng thấp. Năng lượng mà chúng cung cấp có thể được hấp thụ nhanh nhưng chỉ tồn tại trong một thời gian ngắn. Vì vậy, phụ nữ mang thai nên hạn chế ăn những loại thức ăn này trong thai kỳ.</p>
                <p className='indent-8 mt-2 text-justify'>Đường đa phân tử có trong mì ống, bánh mì, gạo, khoai tây và đậu. Năng lượng do chúng cung cấp được hấp thụ chậm hơn do tinh bột phức tạp phải được phân hủy thành tinh bột đơn giản trước khi được hấp thu vào trong máu. Do đó các loại đường đa phân tử không làm tăng gánh nặng sản xuất insulin của tuyến tụy, giúp ổn định hệ vi sinh đường ruột và phòng ngừa sâu răng. Loại đường này có nhiều trong tinh bột, hoa quả, đậu tương, sữa và các sản phẩm từ sữa.</p>
                <p className='indent-8 mt-2 text-justify'>Cơm, bánh mì và mì (không sử dụng công nghệ chiên rán) là nguồn thức ăn quan trọng vì nó chứa vitamin, chất khoáng và chất xơ giúp phòng ngừa táo bón. Phụ nữ mang thai nên ăn 4 – 6 bữa mỗi ngày. Nếu ăn thiếu bột đường sẽ dẫn đến sút cân, mệt mỏi, hạ đường huyết, có thể toan hóa máu do tăng thể cetonic trong máu. Nếu ăn thừa thì bột đường sẽ chuyển hóa thành lipid gây thừa cân, béo phì, kích thích dạ dày, đầy hơi, rối loạn chuyển hóa…</p>
                <p className='indent-8 mt-2 text-justify'>Năng lượng khuyến cáo cho người Việt Nam từ chất bột đường chiếm 55 – 65% tổng số năng lượng, trong đó các đường đa phân tử nên chiếm 70%. Không nên ăn quá nhiều đường tinh chế như bánh kẹo, bột tinh chế hoặc ngũ cốc đã xay xát kỹ. Với phụ nữ trưởng thành nhu cầu bột đường là 290 – 360g/ ngày; phụ nữ mang thai 3 tháng đầu cần thêm 7 – 10g/ ngày, 3 tháng giữa cần thêm 35-40g/ ngày, 3 tháng cuối cần thêm 65 – 70g/ ngày; phụ nữ cho con bú cần thêm 50 – 55g/ ngày. Với chất xơ, phụ nữ mang thai cần thêm 28g/ ngày, phụ nữ cho con bú cần 29g/ ngày.</p>
                <p className='indent-8 mt-2 text-justify'>Nguồn glucid chủ yếu trong khẩu phần là từ gạo, bún, miến, phở, khoai, củ… Ngoài vai trò sinh năng lượng, glucid có cả vai trò tạo hình và điều hòa hoạt động của cơ thể. Phụ nữ có thai cần ăn thêm nhiều thức ăn có nhiều glucid để bổ sung năng lượng, tham gia vào quá trình cấu tạo tế bào, tổ chức. Ăn đủ lượng glucide cũng góp phần thúc đẩy quá trình chuyển hóa lipid. Không nên ăn quá nhiều glucid tinh chế như đường, bánh kẹo, bột tinh chế hoặc gạo đã xay xát kỹ.</p>
            </div>
        </div>
    );
};

export default Article3;