import React, { useState, useEffect } from 'react'
import Loading from '../components/loading/Loading';
import NavBar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import About from '../components/about/About';

const Homepage = ({setVisible, openThemeModal}) => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; // 2 seconds delay

    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  return (
    <>
    {
        isLoading ? (
            <Loading/>
        ) : (
            <div className='homepage'>
                <div className="overlay"></div>
                <NavBar openThemeModal={openThemeModal}/>
                <Header/>
                <About/>
                <div>HomePage</div>
            </div>
        )
    }
    </>
   
  )
}

export default Homepage