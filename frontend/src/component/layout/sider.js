import React from 'react'
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';


const CmSider = styled.div`
    width:200px;
    height:100vh;
    border:1px solid black;
    position:fixed;
    padding-top:40px;
    z-index:10;
`;

const Cmsider =() =>{
    // if (window.location.pathname === '/join') return null;
    // if (window.location.pathname === '/') return null;

    const locationNow = useLocation();
    console.log(locationNow);
    if(locationNow.pathname === "/") return null;
    if(locationNow.pathname === "/join") return null;
    
  return (
    <CmSider>
      <div>
        <ul>
            <li><Link to="/moneyCharge">머니 충전</Link></li>
            <li><Link to="/moneyPay">상품 결제</Link></li>
            <li><Link to="/moneyHistory">거래내역</Link></li>
        </ul>
      </div>
    </CmSider>
  )
}

export default Cmsider
