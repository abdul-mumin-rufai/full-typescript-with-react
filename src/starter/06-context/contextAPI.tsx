import { createContext, useContext } from "react";

const TypescriptContext = createContext<{name:string} | undefined>(undefined);


// this component returns the created context with a dot Provider
export function TypescriptComponent ({children}:{children: React.ReactNode}) {
    return (
        <TypescriptContext.Provider value={{ name: 'Mumin' }}>
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
