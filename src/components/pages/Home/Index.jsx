import background from '../../../assets/home-illustration.svg'
import styled from 'styled-components'
import { StyledLink } from '../../Header/header'
import colors from '../../../utils/style/colors'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  margin: 30px;
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  background: ${colors.background};
  max-width: 1200px;
`
const LeftCol = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`
const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`
export default function App() {
  return (
    <Container>
      <Wrapper>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s'occupe du reste avec les meilleurs talents
          </StyledTitle>
          <StyledLink to="/Survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={background} />
      </Wrapper>
    </Container>
  )
}
