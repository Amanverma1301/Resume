import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Navbarcontext = createContext();
export const NavbarColorContext = createContext();

const Navcontext = ({children}) => {
const [navopen,setnavopen]=useState(false)
    const [navColor, setNavColor] = useState('white')
 const locate = useLocation().pathname
    useEffect(function(){
        if(locate == '/' || locate == '/project'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])
    
  return (
   
        <Navbarcontext.Provider value={[navopen,setnavopen]}>
                <NavbarColorContext.Provider value={[navColor,setNavColor]}>

            {children}
         </NavbarColorContext.Provider>

        </Navbarcontext.Provider>
      
  )
}

export default Navcontext
