import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Skills from './Routes/Skills.tsx'
import ErrorPage from './Routes/ErrorPage.tsx'
import About from './Routes/About.tsx'
import Skill from './Routes/Skill.tsx'
import Login from './Routes/Login.tsx'
import Register from './Routes/Register.tsx'
import Layout from './Components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
        <Route path="/skills" element={<Skills />} />
        <Route index element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill/:id" element={<Skill />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
