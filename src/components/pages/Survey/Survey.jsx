import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  return (
    <div>
      <h1>Questionnaire </h1>
      <h2>Question {questionNumber}</h2>
      <StyledLink to={`/Survey/${prevQuestionNumber}`}>Précédent</StyledLink>
      {questionNumberInt === 10 ? (
        <StyledLink to="/Results">Résultats</StyledLink>
      ) : (
        <StyledLink to={`/Survey/${nextQuestionNumber}`}>Suivant</StyledLink>
      )}
    </div>
  )
}

export default Survey
