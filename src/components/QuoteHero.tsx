import React from 'react';
import styled from 'styled-components';

const QuoteText = styled.p`
    font-weight: 500;
    font-size: 22px;
    width: 80%;
    line-height: 120%;
    color: #000000;
    display: flex;
    margin-left: 8px;

    @media all and (min-width: 600px) {
    width: 614px;
    margin-left: 60px;
    font-size: 28px;
    }
    @media all and (min-width: 900px) {
    margin-left: 99px;
    font-size: 36px;
    }
`;


const Container = styled.div<{showTitle: boolean}>`
  display: flex;
  justify-content: center;

  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    background: #F7DF94;
  }
  
  ${props => props.showTitle 
    ? 
    ` margin-top: 65px;        
      &:before {
      height: auto; 
      }
    ` 
    : 'margin-top: 95px;'}  

  @media all and (min-width: 600px) {
    ${props => props.showTitle 
    ? 
    `margin-top: 140px;
    &:before {
     height: auto; 
    }` 
    : 'margin-top: 125px;'}  
  }
  @media all and (min-width: 900px) {
    ${props => props.showTitle 
      ? 
      `margin-top: 60px;
      &:before {
       height: auto; 
      }` 
      : 'margin-top: 65px;'}  
  }
  @media all and (min-width: 1440px) {
    ${props => props.showTitle 
      ? 
      `margin-top: 140px;
      &:before {
       height: auto; 
      }` 
      : 'margin-top: 225px;'}  
  }
`

interface Props {
    text: string
    list?: boolean
}
const QuoteHero: React.FC<Props> = ({ text, list = false }) => {
    return (
        <Container showTitle={list}>
            <QuoteText>
                “{text}”
            </QuoteText>
        </Container>
    )
}

export default QuoteHero