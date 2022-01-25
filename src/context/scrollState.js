import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

  
  const[posY, setPosY] =useState(0)
  const[posX, setPosX]= useState(0)
  
const [isActive, setIsActive] =useState(true)
  var oldValue =0;
  
useEffect(()=>{
 
  window.onscroll = () =>{
    let newValue = window.scrollY;
    setPosY(newValue);
    setIsActive( newValue> oldValue ? false: true)
    oldValue = newValue;
  }
 
},[])

  return (
    <AppContext.Provider value={{valueY:[posY, setPosY], valueX:[posX, setPosY], valueActive:[isActive, setIsActive]}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}