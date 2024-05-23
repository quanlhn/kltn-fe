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
import { button } from "@material-tailwind/react";
import type { MenuProps } from 'antd';
import { API_PATH } from "../consts/path";
import Cookies from 'js-cookie'

const Header = () => {

    const router = useRouter()
    const [userName, setUserName] = useState('')
    const userContext = useContext(UserContext)
    const defaultUser = {
        id: '',
        name: '',
        phoneNumber: '',
        email: '',
        role:'',
        gender: '',
        birth: new Date(),
        isLoggedIn: false,
        schedule: ''
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

    
    const logOut = () => {
        console.log('hihi')
        localStorage.removeItem('user')
        setUserStorage(defaultUser)
        setUserName('')
        userContext.setUser(defaultUser)
        Cookies.remove('accessToken',)
        fetch(API_PATH + 'user/logout', {
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
                
            },
        })
        .then(res => {
            router.push('/')
        })


    }

    const items: MenuProps['items'] = [{
        key: '1',
        label: (<button className="w-16 underline italic cursor-pointer" onClick={logOut} >Đăng xuất</button>)
    }]


    const [currentDropdown, setCurrentDropdown] = useState(0);

    const toTrackingPage = () => {
        if (localStorage.user) {
            console.log('hihi')
            router.push(`/tracking/${userStorage.id}`)
        } else {
            console.log('haha')
            router.push('/tracking/create-account/welcome')
        }
    }


    return (
        <div className="z-20 " onMouseLeave={() => setCurrentDropdown(0)} >
            <div className="bg-black text-white flex px-40 justify-between">
                <div className="nav flex w-full">
                    <div className="cursor-pointer logo px-6 py-5 font-serif font-extrabold text-2xl w-1/5" onClick={() => router.push('/')}>healthcare</div>
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
                        <div className="flex cursor-pointer px-4 py-5 items-center" onClick={() => toTrackingPage()} onMouseOver={() => setCurrentDropdown(4)}>
                            <div className="font-sans font-semibold mr-2 text-xl" >Lập kế hoạch</div>
                        </div>
                    </div>

                </div>
                <div className="search-user mx-6 w-56 font-sans flex items-center font-semibold text-lg">
                    {userName != '' 
                    ?
                        <Dropdown menu={{ items }} placement="bottomRight">
                            <div className="cursor-pointer">Xin chào, {userName}</div>
                        </Dropdown>
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