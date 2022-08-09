import React from "react";
import { useState } from "react";
import { login } from "../utils/APIUtils";

const ACCESS_TOKEN = 'accessToken';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        usernameOrEmail: "",
        password: "",
    })

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);

        let loginRequest = {
            usernameOrEmail: userInfo.usernameOrEmail,
            password: userInfo.password,
        }
        //JSON타입으로 데이터가 담겼는지 확인
        console.log(JSON.stringify(userInfo));
    
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        });

        console.log(userInfo);
            
    }

    return (
        <div>
        <h1>Login.js에 존재하는 로그인 페이지입니다.</h1>
            <form onSubmit={handleSubmit}>

                <input 
                    name="usernameOrEmail"
                    value={userInfo.usernameOrEmail}
                    placeholder="이메일을 입력하세요"
                    onChange={handleChange}
                />

                <input  
                    type="password"
                    name="password"
                    value={userInfo.password}
                    placeholder="비밀번호를 입력하세요"
                    onChange={handleChange}
                />
                <button type="submit" value="Submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;