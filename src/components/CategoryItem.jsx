import styled from "styled-components";

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
positiion: relative;
`;

const Image= styled.img`
width:100%;
height:100%;
object-fit:cover;
`;

const Info= styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  flex-direction:coloumn;
  align-items:center;
  justify-content:center;
`;

const Title= styled.h1`
    color:black;
    margin-bottom:20px;
`;
const Button = styled.button`
    borderRadius:33;
    padding:10px;
    font-size:20px;
    background-color: white;
    color:gray;
    cursor:pointer;
    font-weight:600;
    align-items:center;
    justify-content:center;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info/>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
    </Container>
  )
}

export default CategoryItem