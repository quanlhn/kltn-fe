'use client'

import React, {useContext, useEffect, useState} from "react";
import {Menu, Dropdown} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { group } from "console";
import { useRouter } from "next/navigation";
import { Avatar, Space } from 'antd';

const CreateHeader = () => {

    const router = useRouter()
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

    return (
        <div className="z-20" >
            <div className="bg-white text-[#0066ee] flex px-64 h-[8vh] shadow-lg shadow-neutral-200 justify-between">
                <div className="nav flex justify-between items-center w-full">
                    <div className="cursor-pointer logo font-serif font-extrabold text-3xl ">healthcare</div>
                    {/* <Avatar style={{backgroundColor: 'white'}} size="large" icon={<UserOutlined style={{color: 'black'}} />} /> */}
                </div>
            </div>
        </div>
    )


}

export default CreateHeader;