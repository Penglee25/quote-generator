import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'

const Container = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #4f4f4f;
  padding: 50px 30px;
  margin: 9px auto 16px auto;
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #333333;
    color: #f2f2f2;
    cursor: pointer;
  }

  @media all and (min-width: 600px) {
    font-size: 24px;
    margin: 80px auto 16px auto;
    width: 472px;
  }
  @media all and (min-width: 900px) {
    margin: 25px auto 15px auto;
    padding: 40px 20px;
  }
  @media all and (min-width: 1440px) {
    margin: 109px auto 16px auto;
    padding: 50px 30px;
  }
`

const Author = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #828282;
  }
`

interface Props {
    author?: string
}

const QuoteFooter: React.FC<Props> = ({ author }) => {

  console.log(author);
  
    return (
        <Link href={`/list/${author}`}>
            <Container>
                <Author>
                    {author}
                </Author>
                ⏩
            </Container>
        </Link>
    )
}

export default QuoteFooter
