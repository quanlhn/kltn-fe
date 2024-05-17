import React from "react"
import { RightCircleOutlined } from "@ant-design/icons";
import { DROPDOWN_MENU_STYLE, MENU_LV1_STYLE, MENU_LV2_STYLE, MENU_LV3_STYLE, HR_STYLE } from "../../consts/className";

const ExercisesMenu = () => {
    return (
        <div className={DROPDOWN_MENU_STYLE} >

            <div className="Strength-Training-Exercises min-w-72">
                <div className={MENU_LV1_STYLE}>
                    <div className="">Rèn luyện cơ bắp</div>
                    <RightCircleOutlined className="" />
                </div>
                <hr className={HR_STYLE} />

                <div className="">
                    <div className={MENU_LV2_STYLE} >Tập với tạ</div>
                    <div className={MENU_LV2_STYLE} >Bài tập sử dụng sức nặng cơ thể</div>
                    <div className={MENU_LV2_STYLE} >Dây kháng lực Resistance band</div>
                </div>

            </div>

            <div className="Flexibility-Exercises min-w-72">
                <div className={MENU_LV1_STYLE}>
                    <div className="">Tập luyện sự linh hoạt</div>
                    <RightCircleOutlined/>
                </div>
                <hr className={HR_STYLE} />

                <div className="">
                    <div className={MENU_LV2_STYLE} >Yoga</div>
                    <div className={MENU_LV2_STYLE} >Pilates</div>
                    <div className={MENU_LV2_STYLE} >Stretching </div>
                </div>
            </div>

            <div className="min-w-72">
                <div className={MENU_LV1_STYLE}>
                    <div className=''>Cardio</div>
                    <RightCircleOutlined/>
                </div>
                <hr className={HR_STYLE} />
                <div>
                    <div className={MENU_LV2_STYLE}>Nhảy dây</div>
                    <div className={MENU_LV2_STYLE}>Chạy bộ</div>
                    <div className={MENU_LV2_STYLE}>Bơi lội</div>
                    <div className={MENU_LV2_STYLE}>Bài tập cường độ cao ngắt quãng</div>
                    <div className={MENU_LV2_STYLE}>Bài tập cường thấp cao ổn định</div>
                </div>

            </div>

            <div className="min-w-72">
                <div className={MENU_LV1_STYLE}>
                    <div className=''>Thể thao</div>
                    <RightCircleOutlined/>
                </div>
                <hr className={HR_STYLE} />
                <div>
                    <div className={MENU_LV2_STYLE}>Bóng đá</div>
                    <div className={MENU_LV2_STYLE}>Cầu lông</div>
                    <div className={MENU_LV2_STYLE}>Bóng chuyền</div>
                    <div className={MENU_LV2_STYLE}>Bóng rổ</div>
                </div>
                </div>
        </div>
    )
}

export default ExercisesMenu