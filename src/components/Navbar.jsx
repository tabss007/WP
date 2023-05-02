import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartRounded } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height:60px;
//background-color: powder-blue; 
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display flex;
    justify-content: space-between;
    align-items: cneter;
// to center them horizontally use justify content
`
const Left = styled.div`
flex:1 ;
display flex;
//to make whole items horizontally use flexbox
align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

`
const SearchContainer= styled.div`
    border: 5px solid lightgray;
    display flex;
    align-items: center;
// to center them vertically use align items center
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
border: none;
`;
const Center = styled.div`
flex:1 ;
text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
flex:1 ;
display flex;
align-items: center;
justify-content: space-between;
//justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 15 px;
    cursor: pointer;
    margin-left: 125px;

`
const Navbar = () => {
    return (
      <Container>
          <Wrapper>
              <Left>
              <Language>EN</Language>
              <SearchContainer>
                  <Input/>
                  <Search style = {{color: "blue", fontSize: "25px"}}/>
              </SearchContainer>
              </Left>
              <Center><Logo>KAPUSS</Logo></Center>
              <Right>
                  <MenuItem>Sign up</MenuItem>
                  <MenuItem>Login</MenuItem>
                  <MenuItem> 
                  <Badge badgeContent={4} color="primary">
                  <ShoppingCartRounded/>
                  </Badge>
                  </MenuItem>
              </Right>
          </Wrapper>
      </Container>
    );
  };
  
export default Navbar