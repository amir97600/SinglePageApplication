import { useState, useEffect } from 'react'
import DefaultPicture from '../../../assets/profile.png'
import Card from '../../Card/Card'
import styled from 'styled-components'
import { Loader } from '../../../utils/style/atoms'
import colors from '../../../utils/style/colors'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.background};
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
  color: black;
`
const Subtitle = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
  color: ${colors.secondary};
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const [isLoading, setIsLoading] = useState(false)
  const [freelanceProfiles, setFreelanceProfiles] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchSurvey() {
      setIsLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelanceProfiles(freelancersList)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  if (error) {
    return (
      <LoaderWrapper>
        <h2>Oups il y a eu un problème</h2>
      </LoaderWrapper>
    )
  }

  return (
    <Container>
      <Wrapper>
        <StyledTitle>Trouvez votre prestataire</StyledTitle>
        <Subtitle>
          Chez Shiny nous réunissons les meilleurs profils pour vous.
        </Subtitle>
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <CardsContainer>
            {freelanceProfiles.map((profile, index) => (
              <Card
                key={`${profile.name}-${index}`}
                label={profile.job}
                picture={profile.picture}
                title={profile.name}
              />
            ))}
          </CardsContainer>
        )}
      </Wrapper>
    </Container>
  )
}

export default Freelances
