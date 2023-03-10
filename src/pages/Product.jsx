
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { Add, Remove } from "@mui/icons-material"

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
const ImageContainer = styled.div`
  flex: 1;
`

const Imagen = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer = styled.div`
  width: 40%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilsterZise = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterZiseOption = styled.option`
  
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmontContainer = styled.div  `
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #f8f4f4;
  }
`


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImageContainer>
            <Imagen src="https://http2.mlstatic.com/D_NQ_NP_601791-MLA51647768886_092022-W.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nostrum nisi atque voluptatem. Eum numquam labore, saepe iste unde harum quo rem? Aliquid libero iusto exercitationem quae hic obcaecati ex. ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda beatae, culpa accusamus rem impedit similique veniam repellendus iusto at! ipsum dolor,dipisicing elit.</Desc>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilsterZise>
                  <FilterZiseOption>XS</FilterZiseOption>
                  <FilterZiseOption>S</FilterZiseOption>
                  <FilterZiseOption>M</FilterZiseOption>
                  <FilterZiseOption>L</FilterZiseOption>
                  <FilterZiseOption>XL</FilterZiseOption>
                  <FilterZiseOption>XS</FilterZiseOption>
                </FilsterZise>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmontContainer>
                <Add />
                <Amount>1</Amount>
                <Remove />
              </AmontContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer/>
    </Container>
  )
}

export default Product