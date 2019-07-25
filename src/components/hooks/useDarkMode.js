import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
   
const [darkMode, setDarkMode] = useLocalStorage('darkMode')

useEffect( () => {
    if(darkMode === true){
        document.body.classList.add('dark-mode')
    }
    else(
        document.body.classList.remove('dark-mode')
    )
    },[darkMode]) 
    
   return [darkMode, setDarkMode]; 
}