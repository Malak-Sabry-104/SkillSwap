import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.tsx";
import Skills from "./Routes/Skills.tsx";
import ErrorPage from "./Routes/ErrorPage.tsx";
import About from "./Routes/About.tsx";
import Skill from "./Routes/ShowSkill.tsx";
import Login from "./Routes/Login.tsx";
import Register from "./Routes/Register.tsx";
import Layout from "./Components/Layout.tsx";
import MySkills from "./Routes/MySkills.tsx";
import Offer from "./Routes/Offer.tsx";

import { SkillProvider } from "./Components/SkillContext.tsx"; // ✅ make sure the path is correct
import RequestsPage from "./Routes/Requests.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkillProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/my-skills" element={<MySkills />} />
            <Route path="/skill/:id" element={<Skill />} />
            <Route path="/login" element={<Login />} />
            <Route path="/requests" element={<RequestsPage />} />

            <Route path="/register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SkillProvider>
  </StrictMode>
);
