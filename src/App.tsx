import FeaturedSkills from "./Components/FeaturedSkills";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import RequestsPage from './Routes/Requests';
import { SupabaseProvider } from './Components/SkillContext';
import { Route } from "react-router-dom";

const App = () => {
  return (
    <SupabaseProvider>
      <Hero />
      <FeaturedSkills />
      <HowItWorks/>
    </SupabaseProvider>
  );
};

export default App;
