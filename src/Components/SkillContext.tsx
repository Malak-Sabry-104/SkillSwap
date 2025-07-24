import { createContext, useContext, useState,type ReactNode } from "react";

// Define the Skill type
export type Skill = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
};

// Define the shape of the context
interface SkillContextType {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (id: number) => void;
}

// Create the context with default values
const SkillContext = createContext<SkillContextType>({
  skills: [],
  addSkill: () => {},
  removeSkill: () => {},
});

// Create provider
export const SkillProvider = ({ children }: { children: ReactNode }) => {
  const [skills, setSkills] = useState<Skill[]>([]);

  const addSkill = (skill: Skill) => {
    setSkills((prev) => [...prev, skill]);
  };

  const removeSkill = (id: number) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <SkillContext.Provider value={{ skills, addSkill, removeSkill }}>
      {children}
    </SkillContext.Provider>
  );
};

// Custom hook for easier usage
export const useSkillContext = () => useContext(SkillContext);
