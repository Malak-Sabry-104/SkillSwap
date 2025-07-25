import { createClient } from '@supabase/supabase-js';
import React, { createContext, useContext } from 'react';

const supabaseUrl = 'https://maczizzuefqzxskcnacv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hY3ppenp1ZWZxenhza2NuYWN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjAzMDYsImV4cCI6MjA2OTAzNjMwNn0.jeGPRgWn-pwFoKWZ6T2Y344dV8wfX4O1_cIHfDntTNg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SupabaseContext = createContext(supabase);

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => (
  <SupabaseContext.Provider value={supabase}>{children}</SupabaseContext.Provider>
);

export const useSupabase = () => useContext(SupabaseContext);

export type Skill = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
};

interface SkillContextType {
  skills: Skill[];
  addSkill: (skill: Skill) => void;
  removeSkill: (id: number) => void;
}

const SkillContext = createContext<SkillContextType>({
  skills: [],
  addSkill: () => {},
  removeSkill: () => {},
});

export const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [skills, setSkills] = React.useState<Skill[]>([]);

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

export const useSkillContext = () => useContext(SkillContext);
