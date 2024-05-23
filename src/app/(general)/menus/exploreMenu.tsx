import React from "react"
import { RightCircleOutlined } from "@ant-design/icons";
import { DROPDOWN_MENU_STYLE, MENU_LV1_STYLE, MENU_LV2_STYLE, MENU_LV3_STYLE, HR_STYLE } from "../../consts/className";
import { useRouter } from "next/navigation";


const ExploreMenu = () => {

    const router = useRouter()

    return (
        <div className='z-10 dropdownMenu flex right-52 bg-menubg justify-between pt-6 pb-10 absolute w-60%' >

            <div className="Strength-Training-Exercises mr-10 px-10">
                <div className={MENU_LV1_STYLE}>
                    <div className=" ">Tính các chỉ số cơ thể</div> 
                    <RightCircleOutlined className="" />
                </div>
                <hr className={HR_STYLE} />

                <div className="">
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/bmi')} >BMI</div>
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/bodyfatpercent')} >Tỉ lệ mỡ cơ thể</div>
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/calorie')} >Tính Calo của cơ thể</div>
                    {/* <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/bmi')} >Waist-to-Height Ratio</div>
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/bmi')} >Lean Body Mass</div>
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/bmi')} >Body Composition</div>
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/bmi')} >Resting Metabolic Rate</div> */}
                </div>

            </div>

            <div className="px-10">
                <div className={MENU_LV1_STYLE}>
                    <div className="">Tính lượng dinh dưỡng</div>
                    <RightCircleOutlined className="" />
                </div>
                <hr className={HR_STYLE} />

                <div className="">
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/foodcalorie')} >Trong thực phẩm</div>
                    <div className={MENU_LV2_STYLE} onClick={() => router.push('/explore/dishcalorie')} >Trong món ăn</div>
                    {/* <div className={MENU_LV2_STYLE} >Trong thực đơn</div> */}
                    
                </div>

            </div>

           
        </div>
    )
}

export default ExploreMenu