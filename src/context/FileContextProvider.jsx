import { useState, createContext, useContext } from "react";

const FileContext = createContext();
export const useFileContext = () => useContext(FileContext);

export function FileContextProvider({ children }) {
  const [filename, setFilename] = useState("Untitled");

  return (
    <FileContext.Provider value={{filename, setFilename}}>
      {children}
    </FileContext.Provider>
  );
}