import { createContext, useContext } from "react";

export const EditorContext = createContext({});
EditorContext.displayName = "EditorContext";

export const useEditor = () => useContext(EditorContext);
