import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {


  const [posY, setPosY] = useState(0)
  const [posX, setPosX] = useState(0)

  const [isActive, setIsActive] = useState(true);
  const [touchMove, setTouchMove] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(false);
  var oldValue = 0;

  useEffect(() => {
    window.onscroll = () => {
      let newValue = window.scrollY;
      setPosY(newValue);
      setIsActive(newValue > oldValue ? false : true)
      oldValue = newValue;
    }

    window.ontouchstart = (e) => {
      setTouchStart(e.targetTouches[0].clientY)
    }
    window.ontouchmove = (e) => {
      setTouchMove(e.targetTouches[0].clientY)
    }
    window.ontouchend = (() => {
      setTouchEnd(true)
    })
  }, [])

  useEffect(() => {
    if (touchEnd && touchMove && touchStart) {
      console.log("istouched"+touchMove+ ""+touchStart)
      setIsActive((touchMove - touchStart) > 100 ? true : false);
    }
  }, [touchEnd])



  return (
    <AppContext.Provider value={{ valueY: [posY, setPosY], valueX: [posX, setPosY], valueActive: [isActive, setIsActive] }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}