import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './components/pages/Home/Index'
import './index.css'
import Survey from './components/pages/Survey/Survey'
import Header from './components/Header/header'
import Error from './components/Error/Error'
import Results from './components/pages/Results/Results'
import Freelances from './components/pages/Freelances/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        <Route path="Results" element={<Results />} />
        <Route path="Freelances" element={<Freelances />} />
      </Routes>
    </Router>
  </StrictMode>
)
