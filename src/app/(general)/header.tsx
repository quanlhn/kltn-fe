'use client'

import React, {useContext, useEffect, useState} from "react";
import {Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { group } from "console";
import NutritionMenus from "./menus/nutrionMenu";
import ExercisesMenu from "./menus/exercisesMenu";
import ExploreMenu from "./menus/exploreMenu";
import UserContext from "../UserContext";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter()
    const [userName, setUserName] = useState('')
    const userContext = useContext(UserContext)
    const defaultUser = {
        userID: 0,
        name: '',
        phoneNumber: '',
        email: '',
        role:'',
        gender: '',
        birth: '',
        isLoggedIn: false,
    }
    const [userStorage, setUserStorage] = useState(defaultUser)

    if (typeof window !== 'undefined') {
        useEffect(() => {
            if (typeof (Storage) !== undefined && localStorage.user) {
                const localUser = JSON.parse(localStorage.user) 
                setUserName(localUser.name)
                setUserStorage(() => JSON.parse(localStorage.user)   )
                if (!userContext.user.isLoggedIn) {
                    userContext.setUser(JSON.parse(localStorage.user))
                }
            }
        }, [localStorage['user']])
    }

    const [currentDropdown, setCurrentDropdown] = useState(0);



    return (
        <div className="z-20 fixed top-0 left-0 right-0" onMouseLeave={() => setCurrentDropdown(0)} >
            <div className="bg-black text-white flex px-40 justify-between">
                <div className="nav flex w-full">
                    <div className="cursor-pointer logo px-6 py-5 font-serif font-extrabold text-2xl w-1/5">healthcare</div>
                    <div className="w-[75%] flex justify-between">
                        <div className="flex cursor-pointer px-4 py-5 items-center" onMouseOver={() => setCurrentDropdown(1)}>
                            <div className="font-sans font-semibold mr-2 text-xl">Dinh dưỡng </div>
                            <DownOutlined className="text-sm mt-1" />
                        </div>
                        <div className="flex cursor-pointer px-4 py-5 items-center" onMouseOver={() => setCurrentDropdown(2)}>
                            <div className="font-sans font-semibold mr-2 text-xl">Hoạt động thể chất </div>
                            <DownOutlined className="text-sm mt-1" />
                        </div>
                        <div className="flex cursor-pointer px-4 py-5 items-center" onMouseOver={() => setCurrentDropdown(3)}>
                            <div className="font-sans font-semibold mr-2 text-xl">Khám phá </div>
                            <DownOutlined className="text-sm mt-1" />
                        </div>
                        <div className="flex cursor-pointer px-4 py-5 items-center" onMouseOver={() => setCurrentDropdown(4)}>
                            <div className="font-sans font-semibold mr-2 text-xl">Lập kế hoạch</div>
                            <DownOutlined className="text-sm mt-1" />
                        </div>
                    </div>
                    {/* <div className="menu h-[100%] w-[80%]">
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            items={[
                                {
                                    label: 'Dinh dưỡng',
                                    key: "dinhduong",
                                    icon: <DownOutlined/>,
                                    style: menuStyle,
                                    children: [
                                        {
                                            label: <NutritionMenu />,
                                            key: 'nutritionMenu',
                                            style: {
                                                height: "fit-content",
                                            }
                                        },
                                    ]
                                },
                                {
                                    label: 'Hoạt động thể chất',
                                    key: "hdthechat",
                                    style: menuStyle,
                                    icon: <DownOutlined/>,
                                },
                                {
                                    label: 'Khám phá',
                                    key: "khampha",
                                    style: menuStyle,
                                    icon: <DownOutlined/>,
                                },
                                {
                                    label: 'Theo dõi',
                                    key: "theodoi",
                                    style: menuStyle,
                                    icon: <DownOutlined/>,
                                },
                            ]}
                        >

                        </Menu>

                    </div> */}


                </div>
                <div className="search-user mx-6 w-56 font-sans flex items-center font-semibold text-lg">
                    {userName != '' 
                    ?
                        <div>
                            Xin chào, {userName}
                        </div>
                    :
                        <div className="cursor-pointer" onClick={() => router.push('/login-signup')} >Đăng ký / Đăng nhập</div>
                    }
                </div>
            </div>
            <div className="z-10" >
                {
                    currentDropdown == 1 ? <NutritionMenus currentDropdown={currentDropdown} setCurrentDropdown={setCurrentDropdown} /> : 
                    currentDropdown == 2 ? <ExercisesMenu /> :
                    currentDropdown == 3 ? <ExploreMenu /> : <></>
                }
            </div>
            {/* <NutritionMenus /> */}
        </div>
    )


}

export default Header;