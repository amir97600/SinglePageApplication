import { Outlet, Link } from 'react-router-dom'

function Survey() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Questionnaire</h1>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
    </div>
  )
}

export default Survey
