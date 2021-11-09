import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext(null);

// export function useAppContext(){
//     return useContext(AppContext);

// }

export function useAppContext(){
    return useContext(AppContext);

}

