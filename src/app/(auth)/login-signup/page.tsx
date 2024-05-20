'use client'

import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import {useState, useRef} from 'react';

const LoginAndSignup: React.FC = () => {

    const [type, setType] = useState("signIn");
    const handleOnClick = (text: React.SetStateAction<string>) => {
        if (text !== type) {
            setType(text);
        return;
        }
    };
    const containerClass ="container w-1/2 max-h-full mt-48" + (type === "signUp" ? "right-panel-active" : "");

    const formRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)

    const changeType = (text: string) => {
        if (text !== type) {
            setType(text);
        }
        if (text == 'signUp') {
            // console.log(text)
            
            formRef.current?.classList.add('translate-x-[100%]')
            overlayRef.current?.classList.remove('translate-x-[100%]')
        } else {
            // console.log(text)
            formRef.current?.classList.remove('translate-x-[100%]')
            overlayRef.current?.classList.add('translate-x-[100%]')
        }
    }

    const signupOverlay = <div className='flex flex-col h-full justify-center text-center items-center bg-orange-300 rounded-r-3xl'>
        <h1 className='text-3xl mb-10'>Chào mừng bạn!</h1>
        <p className='px-8'>Để tiếp tục nâng cao nhận thức và sức khỏe cơ thể, hãy đăng nhập tài khoản của bạn</p>
        <button className='log-button ghost mt-16' onClick={() => changeType('signUp')}>Đăng ký</button>
    </div>
    const signinOverlay = <div className='flex flex-col h-full justify-center text-center items-center bg-orange-300 rounded-l-3xl'>
        <h1 className='text-3xl mb-10'>Xin chào bạn!</h1>
        <p className='px-8'>Enter your personal details and start journey with us</p>
        <button className='log-button ghost mt-16' onClick={() => changeType('signIn')}>Đăng nhập</button>
    </div>

    return (
        <div className="login-and-signup-page text-center w-full h-full  ">
            <div className="container w-1/2 max-h-full mt-48 h-[28rem] relative left-1/2 translate-x-[-50%] rounded-3xl shadow-2xl">
                <div ref={formRef} className='absolute w-96 h-full ease-in-out duration-700'>
                    {type == "signIn" ? <LoginForm fc={() => changeType('signUp')}/> : <SignupForm/>}
                </div>
                <div ref={overlayRef} className='overlay absolute w-96 h-full translate-x-[100%] ease-in-out duration-700'>
                    {type == "signIn" ? signupOverlay : signinOverlay}
                </div>
            </div>
        </div>
    )
}

export default LoginAndSignup;