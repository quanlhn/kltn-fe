import React, { useState, useContext } from "react";
import { useRouter } from 'next/navigation'
import UserContext from "../../UserContext";
import { API_PATH } from "@/app/consts/path";

type Props = {
    fc: (text: string) => void
}

const LoginForm: React.FC<Props> = ({fc}: Props) => {

    const router = useRouter()
    const [state, setState] = React.useState({
        username: "",
        password: ""
      });

    const user = useContext(UserContext)



    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const target = evt.target
        const { username, password } = state;

        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
        // console.log(state)
        fetch(`${API_PATH}login`, {
            method: 'POST',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(response => response.json())
            .then(data => {
                
                if (data.success) {
                    // console.log(data.schedule)
                    const userData = {
                        id: data.id,
                        name: data.name,
                        phoneNumber: data.phone,
                        email: data.email,
                        isLoggedIn: true,
                        gender: data.gender,
                        birth: data.birth,
                        role: data.role,
                        schedule: data.schedule
                    }
                    user.setUser(userData)
                    localStorage.setItem('user', JSON.stringify(userData));
                    router.push(`/tracking/${userData.id}`)
                } else {
                    console.log(data.message)
                }
            });
    }


    return (
        <div className="sign-in-container form-container w-full mt-16">
            <h1 className="font-bold text-2xl">Đăng nhập</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group pt-6">
                    {/* <label htmlFor="name">Name</label> */}
                    <input type="text" name="username" className="form-control w-2/3 h-8 bg-grey3" onChange={handleChange} id="name" placeholder="Username" />
                </div>
                <div className="form-group pt-6">
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="password" name="password" className="form-control w-2/3 h-8 bg-grey3" onChange={handleChange} id="password" placeholder="Password" />
                </div>
                <div className="form-group pt-6 text-xs">
                    Nếu chưa có tài khoản, đăng ký <span onClick={() => fc('signUp')} className="italic text-[#ff416c] cursor-pointer" >tại đây</span>
                </div>
                <div className="form-group absolute left-0 right-0 mx-auto bottom-16">
                    <button className="log-button">Đăng nhập</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;