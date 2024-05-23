import { RightCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import article1 from '../../../public/homepage/article1.jpg'
import article2 from '../../../public/homepage/article2.jpg'
import article3 from '../../../public/homepage/article3.jpg'
import article4 from '../../../public/homepage/article4.png'
import article5 from '../../../public/homepage/article5.png'
import article6 from '../../../public/homepage/article6.jpg'
import { MAIN_ARTICLE_AVATAR, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLE_DISCRIBE, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE } from "../consts/className";

export default function Home() {
  return (
    <main className="bg-white-pattern h-full bg-cover px-40">
      <div className="flex w-full pt-16 justify-between ml-10 mb-5">
        <div className="relative w-[35rem] h-[35rem]">
          <img src={article1.src} className="w-[35rem] cursor-pointer" />
          <div className="absolute w-[90%] bg-white opacity-90 bottom-7 left-7 pb-5">
            <div className={MAIN_ARTICLE_TITLE} >Giúp bạn có một chế độ ăn hợp lý</div>
            <div className={MAIN_ARTICLE_DISCRIBE}>Bạn sẽ có thể điều chỉnh thực đơn một cách khoa học và hợp lý hơn</div>
          </div>
        </div>
        <div className="mr-20 h-[35rem]">
          <img src={article2.src} className="w-[28rem] cursor-pointer" />
          <div className=" bg-white w-[28rem] h-[7rem]">
            <div className='cursor-pointer text-2xl pt-2 pb-3 mx-5 font-semibold hover:text-pink1' >Để tránh chấn thương khi tập luyện</div>
            <div className={MAIN_ARTICLE_DISCRIBE}>Bạn sẽ có thể điều chỉnh thực đơn một cách khoa học và hợp lý hơn</div>
          </div>
        </div>
      </div>


      <div className='mt-10'>
          <div className='text-3xl font-semibold mb-5'>Bài viết mới</div>
          <hr className='border-t-2' />

          <div className='feature mt-10 grid grid-cols-2 gap-10'>
            <div className='flex mb-8 '>
              <img src={article3.src} alt="" className={SIDE_ARTICLE_IMAGE} />
              <div className={SIDE_ARTICLE_CHILD_DIV}>
                  <div className={SIDE_ARTICLE_TITLE}>Làm thế nào để xây dựng thể chất cơ bản</div>
                  <div className={SIDE_ARTICLE_DISCRIBE}>Quyết định rằng bạn muốn trở nên mạnh mẽ hơn thật là thú vị! Tuy nhiên, có thể khó biết liệu bạn có thực sự tiến bộ hay không nếu bạn không biết bắt đầu từ đâu. </div> 
              </div>
            </div>
            
            <div className='flex mb-8 '>
              <img src={article4.src} alt="" className={SIDE_ARTICLE_IMAGE} />
              <div className={SIDE_ARTICLE_CHILD_DIV}>
                  <div className={SIDE_ARTICLE_TITLE}>Ăn Chay Có Thể Giảm Nguy Cơ Ung Thư và Bệnh Tim Mạch</div>
                  <div className={SIDE_ARTICLE_DISCRIBE}>Một đánh giá mới về 48 nghiên cứu được công bố trong suốt 23 năm cho thấy rằng ăn chế độ dinh dưỡng từ thực vật có thể ngăn ngừa ung thư và giảm nguy cơ tim mạch. </div> 
              </div>
            </div>

            <div className='flex mb-8 '>
              <img src={article6.src} alt="" className={SIDE_ARTICLE_IMAGE} />
              <div className={SIDE_ARTICLE_CHILD_DIV}>
                  <div className={SIDE_ARTICLE_TITLE}>Các chất dinh dưỡng vi lượng có ảnh hưởng lớn đối với sức khỏe.</div>
                  <div className={SIDE_ARTICLE_DISCRIBE}>Gần 30 loại vitamin và khoáng chất mà cơ thể của bạn không thể sản xuất đủ lượng một cách tự nhiên được gọi là "vi chất dinh dưỡng cần thiết"." </div> 
              </div>
            </div>

            <div className='flex mb-8 '>
              <img src={article5.src} alt="" className={SIDE_ARTICLE_IMAGE} />
              <div className={SIDE_ARTICLE_CHILD_DIV}>
                  <div className={SIDE_ARTICLE_TITLE}>3 cách đốt mỡ hiệu quả để thon gọn vòng 2 bằng việc đạp xe</div>
                  <div className={SIDE_ARTICLE_DISCRIBE}>Đạp xe có ttheer giúp bạn giảm cân nhờ việc tham gia quy trình làm thâm hụt calo của cơ thể.</div> 
              </div>
            </div>

          </div>
      </div>

      <div className="mt-10">
        <div className='text-3xl font-semibold mb-5'>Khám phá</div>
        <hr className='border-t-2' />

        

      </div>
    </main>
  );
}

