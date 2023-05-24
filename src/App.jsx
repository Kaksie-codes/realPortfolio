import React, { useEffect, useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage';
import Portfoliopage from './pages/Portfoliopage';

function App() {
 //message popup
 const [visible, setVisible] = useState(false);
 const [isDark, setIsDark] = useState(false);
 const cardRef = useRef(null);

 useEffect(() => {
   let handleOutsideClick = (e) => {
     if(!cardRef.current.contains(e.target)){        
       setIsOpen(false);
     }      
   }

   document.addEventListener('mousedown', handleOutsideClick)
   
   return () => {
     document.removeEventListener('mousedown', handleOutsideClick);
   };
 }, []);

//theme-modal
const [isOpen, setIsOpen] = useState(false);

function openThemeModal(){
setIsOpen(true)
console.log('clicked theme modal')
}

useEffect(() => {
const currentThemeColor = localStorage.getItem("theme-color")
if(currentThemeColor === "dark"){
 setIsDark(true)
}else{
 setIsDark(false)
}
},[])

const toggleTheme = () => {
if(isDark){
 localStorage.setItem("theme-color", "light")
 setIsDark(false)
}else{
 localStorage.setItem("theme-color", "dark")
 setIsDark(true)
}
}

  return (
    <>
      <Routes>
        <Route index element={<Homepage setVisible={setVisible} openThemeModal={openThemeModal}/>}/>
        <Route path='/projects' element={<Portfoliopage openThemeModal={openThemeModal}/>}/>
      </Routes> 
    </>
  )
}

export default App
