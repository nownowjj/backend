import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Join from "../pages/join/Join";
import Headers from "../component/layout/header"
import Sider from "../component/layout/sider"
import styled from "styled-components";
import MoneyCharge from "../pages/moneyCharge/moneyCharge";
import MoneyPay from "../pages/moneyPay/moneyPay";
import MoneyHistory from "../pages/moneyHistory/moneyHistory";


const CMCSS = styled.div`
    margin:0;
    padding:0;
    box-sizing:border-box;
    overflow-x:hidden;
`;

const CmSection = styled.div`
    color:red;
    width:100%;
    height:100vh;
    padding:40px 0px 0px 200px;
    position:fixed;
    
`;

const Router = () => {
  
    return (
       <CMCSS>
        <BrowserRouter>
                <Headers/>
                {/* Headers  width:100%;   height:40px;  Login,Join 숨김    */}
                <Sider/>
                {/* Sider  width:200px;   height:100vh;  Login,Join 숨김   */}

                     <Routes>
                         <Route path="/" element={<Login />} />
                         <Route path="/join" element={<Join />} />
                     </Routes>
                {/* Headrs와 Sider를 사용하지 않는 login,join은 따로 분리 함 */}
                <CmSection>
                     <Routes>
                       {/* <Route path="/" element={<Login />} />
                       <Route path="/join" element={<Join />} /> */}
                       <Route path="/moneyCharge" element={<MoneyCharge />} />
                       <Route path="/moneyPay" element={<MoneyPay />} />
                       <Route path="/moneyHistory" element={<MoneyHistory />} />
                     </Routes>
                </CmSection>
        </BrowserRouter>
        </CMCSS> 
    );
};

export default Router
