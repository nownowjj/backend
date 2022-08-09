import React from "react";
import styled from "styled-components";

const CMTextLogo = styled.div`
    font-size:14px;
`;

const textlogo = (data) => {
    return <CMTextLogo style={data.style}>서비스를 이용하시려면 로그인을 해주세요.</CMTextLogo>;
};

export default textlogo;
