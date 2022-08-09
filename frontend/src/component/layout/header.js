import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

const CmHeader = styled.div`
    position:fixed;
    width:100%;
    height:40px;
    background-color:red;
    color:white;
    font-size:24px;
    border:1px solid black;
    text-align:center;
    z-index:10;
`;



const Cmheader =() => {
    const locationNow = useLocation();
    // console.log(locationNow);
    if(locationNow.pathname === "/") return null;
    if(locationNow.pathname === "/join") return null;

    // if (window.location.pathname === '/join') return null;
    // if (window.location.pathname === '/') return null;
    return (
    	// <CmHeader/>
//     );
    
//   return (
    <CmHeader>
      E4.Pay Service
      
      <Link to="/">로그아웃 버튼</Link>
    </CmHeader>
  )
}

export default Cmheader
