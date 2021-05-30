import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";

import DefaultImg from '../assets/img/default.png'
import StarchildImg from '../assets/img/faces/starchild.png';
import SpaceaceImg from '../assets/img/faces/spaceace.png';
import DemonImg from '../assets/img/faces/demon.png';
import CatmanImg from '../assets/img/faces/catman.png';
import AnkwarriorImg from '../assets/img/faces/ankhwarrior.png';
import FoxImg from '../assets/img/faces/fox.png';


/* elements */

const imgs = [
    DefaultImg,
    StarchildImg,
    SpaceaceImg,
    DemonImg,
    CatmanImg,
    AnkwarriorImg,
    FoxImg,
]

const HeroMain = styled.div`
position: relative;
width: 100%;
height: 70vh;
top: 0;
text-align: center;
`

const NavBar = styled.div`
position: relative;
text-align: center;

    
`

const Button = styled.button`
  display: inline-block;
  color: #D92534;
  font-size: 20px;
  margin: 5px;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 1px;
  display: inline-block;
  background-color: #292121;
  &:hover {
    background-color: white;
    transform: scale(1.05);
  }
  &:active{
    background-color: white;
  }
`;



const DefaultContent = styled.img`
position: relative;
width: 280px;
height: 300px;
margin-top: 50px;

`

/* transition group */


const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};






export default function Hero() {


    const [resources, setResources] = useState(
       <DefaultContent src={imgs[0]}/>
    );


    return (
        <>
            <HeroMain>

                
                <NavBar>
                    <Button onClick={() => setResources(<DefaultContent src={imgs[1]} />)}>STARCHILD</Button>
                    <Button onClick={() => setResources(<DefaultContent src={imgs[2]} />)}>SPACE ACE</Button>
                    <Button onClick={() => setResources(<DefaultContent src={imgs[3]} />)}>DEMON</Button>
                    <Button onClick={() => setResources(<DefaultContent src={imgs[4]} />)}>CATMAN</Button>
                    <Button onClick={() => setResources(<DefaultContent src={imgs[5]} />)}>ANKH WARRIOR</Button>
                    <Button onClick={() => setResources(<DefaultContent src={imgs[6]} />)}>FOX</Button>
                </NavBar>

                <div>
                    <Fade>{resources}</Fade>
                </div>


            </HeroMain>

        </>

    )
};




