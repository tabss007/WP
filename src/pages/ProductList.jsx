
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';
import Products from '../components/Products';
//import Newsletter and footer when made

const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`
const Filter = styled.div`
margin:20px;
`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;
const Select = styled.select`
    padding:20px;
    margin-right:20px;
 `;
const Option = styled.option``
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>T-shirts</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
             <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option Selected>Newest</Option>
                    <Option>Most Popular</Option>
                    <Option>Price (low to high)</Option>
                    <Option>Price (high to low)</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <Products/>

    </Container>
  )
}
//<Newsletter/>
//<Footer/>
export default ProductList
