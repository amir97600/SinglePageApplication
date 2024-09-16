import image from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Container = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors};
  align-items: center;
`

const Image = styled.img`
  max-width: 800px;
`
const FirstTitle = styled.h1`
  font-weight: 300;
`
const SubTitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

function Error() {
  return (
    <Container>
      <Wrapper>
        <FirstTitle>Oups...</FirstTitle>
        <Image src={image} alt="Error 404!" />
        <SubTitle>Il semblerait qu'il y ait un problème</SubTitle>
      </Wrapper>
    </Container>
  )
}

export default Error
