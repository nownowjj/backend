import React from "react";
import { useState } from "react";
import { login } from "../utils/APIUtils";
import { notification } from "antd";

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

        let loginRequest = {
            usernameOrEmail: userInfo.usernameOrEmail,
            password: userInfo.password,
        }
        //JSON타입으로 데이터가 담겼는지 확인
        console.log(JSON.stringify(userInfo));
    
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            alert('로그인에 성공하였습니다!');
            window.history.pushState(ACCESS_TOKEN, '', '/welcome');
        }).catch(error => {
            notification.error({
                message: 'Error!!',
                description: error.message || '다시 시도해주세요.'
            });
        });
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