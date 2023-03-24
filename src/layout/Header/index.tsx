import styled from 'styled-components'
import { useLocation } from 'wouter'

const StyledHeader = styled.header`
font-weight: 500;
font-size: 18px;
background-color: #f3d84f;
padding: 10px;
border-radius: 30px 30px;
color: #4F4F4F;
display: flex;
justify-content: flex-end;
cursor: pointer;
width: fit-content;
`
const HeaderContainer = styled.div`
display: flex;
justify-content: flex-end;
`

interface Props {
  handleClick: () => void
}

const Header:React.FC<Props> = ({ handleClick }) => {
  const [location, setLocation] = useLocation();
  const onClickFn = location.includes('list') 
  ? () => setLocation('/')
  : handleClick

  return (
    <HeaderContainer>
      <StyledHeader onClick={onClickFn}>
        random 🔃
      </StyledHeader>
    </HeaderContainer>
  )
}

export default Header