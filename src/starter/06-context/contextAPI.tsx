import React, { createContext, useContext, useState } from "react";

const TypescriptContext = createContext<TypeTheme | undefined>(undefined);

type Theme = 'light' | 'dark' | 'system';

type TypeTheme = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

type ThemeComponent = {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

// this component returns the created context with a dot Provider
export function TypescriptComponent({ children, defaultTheme = 'system' }: ThemeComponent) {
    
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    
    return (
        <TypescriptContext.Provider value={{theme, setTheme}}>
            {children}
        </TypescriptContext.Provider>
    );
}

export const useTypescriptContext = () => { 
    const myContext = useContext(TypescriptContext);

    if (myContext === undefined)
        throw new Error('useTypescriptContext must used within TypescriptComponent');
    
    return myContext;
}; 
