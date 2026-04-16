import { createContext, useContext } from "react";

export const typescriptContext = createContext<{name:string} | undefined>(undefined);

export function TypescriptComponent ({children}:{children: React.ReactNode}) {
    return (
        <typescriptContext.Provider value={{name:'Mumin'}}>
            {children}
        </typescriptContext.Provider>
    )
}

export const useTypescriptContext = () => { 
    const context = useContext(typescriptContext);

    if (context === undefined) 
        throw new Error('useTypescriptContext must used within TypescriptComponent')
    
    return context;
};