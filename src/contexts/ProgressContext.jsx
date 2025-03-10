import { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [courseProgress, setCourseProgress] = useState({});

  const updateProgress = (courseId, moduleId, completed) => {
    setCourseProgress(prev => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        [moduleId]: completed
      }
    }));
  };

  return (
    <ProgressContext.Provider value={{ courseProgress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext); 