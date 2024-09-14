import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './components/pages/Home/Index'
import './index.css'
import Survey from './components/pages/Survey/Survey'
import Header from './components/Header/header'
import ClientForm from './components/ClientForm/ClientForm'
import FreelanceForm from './components/FreelanceForm/FreelanceForm'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Survey" element={<Survey />}>
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
