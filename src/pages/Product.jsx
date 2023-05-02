import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"

const Container = styled.div``

const Wrapper = styled.div`
    padding:50px;
    display:flex;
`;
const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;

const InfoContainer = styled.div`
flex:1;
padding 0px 50px;
`;

const Title = styled.div`
    font-weight:200;
    font-size: 60px;
`;
const Desc = styled.p`
    margin :20px 0px;
    font-size: 30px;
`
const Price = styled.span`
    font-weight:100;
    font-size:40px;
`


const Product = () => {
  return (
    <Container>
       <Navbar/>
       <Announcements/>
       <Wrapper>
        <ImgContainer>
        <Image src="https://ph-test-11.slatic.net/p/30350921ba0d5403f8f6273887ba77b3.jpg"  />
        </ImgContainer>
        <InfoContainer>
            <Title>Graphic Tee</Title>
            <Desc>vghudewdyg9ehduosan mdcnbdhfyg9udwsiqkjdhyudwiojkdvhydbhfjib hg8ueyrueoiuoed</Desc>
            <Price>₹599</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterTitle>Color</FilterTitle>
                    <FilterTitle>Color</FilterTitle>
                    <FilterTitle>Color</FilterTitle>
                </Filter>
            </FilterContainer>
        </InfoContainer>
       </Wrapper>
    </Container>
  )
}
//Newsletter and footer
export default Product