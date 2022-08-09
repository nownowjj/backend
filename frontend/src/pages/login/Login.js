import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TextLogo from '../../component/items/textLogo';
import Logo from '../../component/items/logo';
import Input from '../../component/items/Input';
import Button from '../../component/items/Button';

const ACCESS_TOKEN = 'accessToken';

const LoginSection = styled.div`
  border:1px solid black;
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;

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
    <LoginSection>

      <Logo/>  {/*  E4. 로고 */}
      <TextLogo/>

      <form>
        <Input
        placeholder="Id"
        name="id" 
        value={userData.id} 
        onChange={onChange}
        />

        <Input
        placeholder="PassWord" 
        name="password" 
        value={userData.password} 
        onChange={onChange}
        />
        
        <Button type="submit" value="Submit">로그인</Button>

      </form>
      
        {/* <Link to="/moneyHistory" > 로그인</Link> */}
        <Link to="/join" > 회원가입</Link>

    </LoginSection>
  )
}

export default Login
