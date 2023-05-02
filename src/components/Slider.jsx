
import styled from "styled-components";
import { useState } from "react";
import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@material-ui/icons";
import { sliderItems } from "../data";
const Container= styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    position: relative;
    overflow: hidden;
    `;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor:pointer;
        opacity: 0.5;
    z-index: 2;

`;
const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    
    `;
const Slide = styled.div`
    width: 200vw;
    height: 200vh;
    display:flex;
    align-items:center;
    background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
height: 100%;
flex:1;
`;
const Image = styled.img`
height: 45%;
`;
const InfoContainer= styled.div`
flex: 5;
padding: 20px;
display:flex;
align-items:center;
`;

const Title = styled.h1`
    font-size:50px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 10px;
    font-weight:300;
    letter-spacing: 3px;
`;

const Button= styled.button`
    padding: 10px;
    font-size: 10px;
    background-color: transparent;
    cursor:pointer;
`;
const Slider = () => {
    const[slideIndex, setSlideIndex]= useState(0);
    const handleClick = (direction) => {
        if(direction==="left")
        {
            setSlideIndex(slideIndex>0 ? slideIndex-1:2);
        } else{
            setSlideIndex(slideIndex<2 ? slideIndex+1:0);
        }
    };
  return (
    <Container>
       <Arrow direction="left" onClick={() => handleClick("left")}>
    <ArrowBackIosRounded />
       </Arrow>
        <Wrapper slideIndex={slideIndex}>
             {sliderItems.map(item=>(
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
               <Image src = {item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Shop now</Button>
            </InfoContainer>
            </Slide >
        ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
    <ArrowForwardIosRounded />
        </Arrow>

    </Container>
  )
}

export default Slider
