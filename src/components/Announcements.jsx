import styled from "styled-components"

const Container = styled.div`
    height: 40px;
    background-color: teal;
    color: white;
    display: flex;
    align-itmes:center;
    justify-content:center;
    font-size:35px;
    font-weight: 500;
`
const Announcements = () => {
  return (
    <Container>
        !!Check these offers out!!
    </Container>
  )
}

export default Announcements