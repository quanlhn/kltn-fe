import React from "react"
import { RightCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { DROPDOWN_MENU_STYLE, MENU_LV1_STYLE, MENU_LV2_STYLE, MENU_LV3_STYLE, HR_STYLE } from "../../consts/className";
import { useRouter } from "next/navigation";

interface PropsType {
    currentDropdown: number,
    setCurrentDropdown(i: number): void
}

const NutritionMenus = ({currentDropdown, setCurrentDropdown}: PropsType) => {
    const router = useRouter()

    const mouseOut = () => {
        setCurrentDropdown(0)
        console.log(1)
    }


    return (
        <div className={DROPDOWN_MENU_STYLE}  >

            <div className="Micronutrients min-w-72">
            <div className={MENU_LV1_STYLE}>
                <div className="" onClick={() => router.push('/nutrions/micronutrients')}>Chất dinh dưỡng vi lượng</div>
                <RightCircleOutlined className="" />
            </div>
            <hr className={HR_STYLE} />

            <div className="vitamin ">
                <div className={MENU_LV2_STYLE} >Vitamin</div>

                <div>
                <div className={MENU_LV3_STYLE} >Vitamin Tan trong Chất béo</div>
                <div className={MENU_LV3_STYLE} >Vitamin Tan trong Nước</div>
                </div>

                <div className={MENU_LV2_STYLE} >Khoáng chất</div>
                <div>
                <div className={MENU_LV3_STYLE} >Khoáng chất đa lượng</div>
                <div className={MENU_LV3_STYLE} >Khoáng chất vi lượng</div>   

                </div>
            </div>

            </div>

            <div className="Macronutrients min-w-72">
                <div className={MENU_LV1_STYLE}>
                    <div className="">Chất dinh dưỡng đa lượng</div>
                    <RightCircleOutlined/>
                </div>
                <hr className={HR_STYLE} />

                <div className="">
                    <div className={MENU_LV2_STYLE} >Cacbohydrat</div>
                    <div className="c">
                        <div className={MENU_LV3_STYLE} >Carbs đơn giản</div>
                        <div className={MENU_LV3_STYLE} >Carbs phức tạp</div>
                    </div>
                    <div className={MENU_LV2_STYLE} >Proteins</div>
                    <div className="pro">
                        <div className={MENU_LV3_STYLE} >Nguồn gốc động vật</div>
                        <div className={MENU_LV3_STYLE} >Nguồn gốc thực vật</div>
                    </div>
                    <div className={MENU_LV2_STYLE} >Chất béo</div>
                </div>
            </div>

            <div className="min-w-72">
            <div className={MENU_LV1_STYLE}>
                <div className=''>Biểu đồ dinh dưỡng</div>
                <RightCircleOutlined/>
            </div>
            <hr className={HR_STYLE} />
            <div>ăn kiêng</div>

            </div>

            <div className="min-w-72">
            <div className={MENU_LV1_STYLE}>
                <div className=''>Thực phẩm bổ sung</div>
                <RightCircleOutlined/>
            </div>
            <hr className={HR_STYLE} />
            <div>bột protein</div>
            </div>
        </div>
    )
}

export default NutritionMenus