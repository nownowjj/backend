import React from "react";
import { useState } from "react";


const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(values, null, 2));
        console.log(values);
    }

    return (
        <div>
        <h1>Login.js에 존재하는 로그인 페이지입니다.</h1>
            <form onSubmit={handleSubmit}>

                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="이메일을 입력하세요"
                    onChange={handleChange}
                />

                <input  
                    type="password"
                    name="password"
                    value={values.password}
                    placeholder="비밀번호를 입력하세요"
                    onChange={handleChange}
                />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;