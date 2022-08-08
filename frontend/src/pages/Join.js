import React, { useState} from "react";
import ApiService from "../api/ApiService";

const Join = () => {
    //유저정보를 저장한 state를 생성해준다.
    const [userData, setUserData] = useState({
        username: "",
        password: "",
        email: "",
        message: null
    })

    //변화된 값을 담아주는 function
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    //변화된 값을 해당 변수에 저장해주고
    //정해진 url에 연동해준다.
    //sumbit하면 실행되는 function
    const handleSubmit = (e) => {
        //아무런 정보없이 버튼이 눌리면 리프레쉬되는것을 방지해준다.
        e.preventDefault();

        //페이지에서 입력한 정보가 해당 userDate state에 저장된다.
        let user = {
            username: userData.username,
            password: userData.password,
            email: userData.email,
            message: userData.message,
        }
        //JSON타입으로 데이터가 담겼는지 확인
        console.log(JSON.stringify(userData));
    
        //User정보를 JSON타입으로 api호출해준다 
        ApiService.addUser(user)
        console.log('addUser실행됨')
    }

    return (
        <div>
            <h1>Join.js에 존재하는 회원가입폼입니다!!</h1>
            <form onSubmit={handleSubmit}>
                
                <input
                type="text"
                name="username"
                onChange={handleChange}
                value={userData.username} 
                placeholder="이름을 입력하세요"
                />
                
                <input
                type="email"
                name="email" 
                onChange={handleChange} 
                value={userData.email} 
                placeholder="이메일을 입력하세요" />
                
                <input
                type="password"
                name="password" 
                onChange={handleChange} 
                value={userData.password} 
                placeholder="비밀번호를 입력하세요" />
                
                <input type="submit" value="Submit" />
            
            </form>
        </div>
    );
}

export default Join;