import { useState } from "react";

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace) => {
    const oldHistory = [...history];

    if (replace) {
      oldHistory.pop();
    }

    setHistory([...oldHistory, newMode]);
  };

  const back = () => {
    const oldHistory = [...history];
    if (oldHistory.length !== 1) {
      oldHistory.pop()
    }
    setHistory(oldHistory);
  }
  
  return {mode: history[history.length - 1], transition, back};
};
  
export default useVisualMode;