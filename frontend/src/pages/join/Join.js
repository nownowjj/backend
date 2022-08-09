import React, { useState } from 'react'
import { signup } from "../../utils/APIUtils";
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Logo from '../../component/items/logo';
// import Input from '../../component/items/Input';
// import Button from '../../component/items/Button';
import { notification } from "antd";

const JoinSection = styled.div`
  border:1px solid black;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Join = () => {
  //유저정보를 저장한 state를 생성해준다.
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
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
        name: userData.name,
        username: userData.username,
        email: userData.email,
        password: userData.password,
    }
    //JSON타입으로 데이터가 담겼는지 확인
    console.log(JSON.stringify(userData));

    //User정보를 JSON타입으로 api호출해준다 
    signup(user)
    .then(response => {
        notification.success({
            message: 'Hello!!',
            description: "성공적으로 회원가입되었습니다. 로그인을 해주세요.",
        });
        // this.props.history.push("/login");
        console.log(user)
        window.history.pushState(user, '', '/login');
    }).catch(error => {
        notification.error({
            message: 'Error!!',
            description: error.message || '다시 시도해주세요.'
        });
    });
    console.log('addUser실행됨')
}
  return (
    <JoinSection>
      회원가입 페이지(추후 삭제)
     <Logo/>  {/*  E4. 로고 */}
      회원가입
      <form onSubmit={handleSubmit}>

        <input 
        type="text"
        name="name"
        onChange={handleChange}
        value={userData.name} 
        placeholder="이름을 입력하세요"
        />

        <input
        type="text"
        name="username"
        onChange={handleChange}
        value={userData.username} 
        placeholder="아이디를 입력하세요"
         />

        <input 
         type="email"
         name="email" 
         onChange={handleChange} 
         value={userData.email} 
         placeholder="이메일을 입력하세요"
         />
        
        <input 
         type="password"
         name="password" 
         onChange={handleChange} 
         value={userData.password} 
         placeholder="비밀번호를 입력하세요" 
         />
        
        <button type="submit" value="Submit">가입</button>
        <Link to="/">로그인 페이지로 이동</Link>

      </form>

    </JoinSection>
    
  );
}

export default Join
