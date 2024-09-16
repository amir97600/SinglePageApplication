import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`

function Header() {
  return (
    <StyledContainer>
      <Link to="/">
        <HomeLogo src={logo} alt="Shiny" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/Freelances">Profils</StyledLink>
        <StyledLink to="/Survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </StyledContainer>
  )
}

export default Header
