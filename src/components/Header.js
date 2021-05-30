import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/img/logos/logo1.png';

const Header = styled.div`
position: relative;
width: 100%;
height: 30%;
top: 0;
text-align: center;

`
const HeaderLogo = styled.img`
height: 100px;
width: 250px;
padding: 20px 0 20px 0;

`


export default function header() {

    return (
        <>
            <Header>
                <HeaderLogo src={Logo} />
            </Header>

        </>

    )


};


