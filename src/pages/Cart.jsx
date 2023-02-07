 import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
 
const Container = styled.div`
  
`

const Wrapper = styled.div`
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton= styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props)=> props.type === 'filled' && 'none'};
  background-color: ${(props)=> props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props)=> props.type === 'filled' && 'white'};
`

const TopTexts = styled.div`
  
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Imagen = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: ${(props)=> props.color};
`
const ProductSize = styled.span`

`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`
const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 1px;
  margin: 5px;
`

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Summary = styled.div`
  flex: 1;
  border: .5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 44vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItems = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === 'total' && '500'};
  font-size: ${props=> props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span`
  
`

const SummaryItemTotal = styled.span`
  
`
const Button = styled.button`
  width: 100%;
  margin: 30px 0px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

 function Cart() {
   return (
     <Container>
      <Navbar/>
      <Announcement/>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>

            <TopButton>CONTINE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
            <Product>
                <ProductDetail>
                  <Imagen src='https://i.ebayimg.com/images/g/iuAAAOSw8QdjaeIc/s-l1600.jpg' />
                  <Details>
                    <ProductName><b>Product:</b> Nike Air Jordan </ProductName>
                    <ProductId><b>ID:</b> 90939349 </ProductId>
                    <ProductColor color='gray' />
                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 120</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr />
              <Product>
                <ProductDetail>
                  <Imagen src='https://i.ebayimg.com/images/g/qmQAAOSw8zxj2BzX/s-l500.png' />
                  <Details>
                    <ProductName><b>Product:</b> Camiseta deportiva de juego Nike de Travis Kelce #87 </ProductName>
                    <ProductId><b>ID:</b> 90939349 </ProductId>
                    <ProductColor color='red' />
                    <ProductSize><b>Size:</b> YL</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ 120</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItems>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemTotal>$ 240</SummaryItemTotal>
              </SummaryItems>
              <SummaryItems>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemTotal>$ 5.90</SummaryItemTotal>
              </SummaryItems>
              <SummaryItems>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemTotal>$ -5.90</SummaryItemTotal>
              </SummaryItems>
              <SummaryItems type='total'>
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemTotal>$ 240</SummaryItemTotal>
              </SummaryItems>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      <Footer/> 
     </Container>
   )
 }
 
 export default Cart
 