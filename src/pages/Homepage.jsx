import React from 'react'
import Loading from '../components/loading/Loading';

const Homepage = () => {
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
                <div>HomePage</div>
            </div>
        )
    }
    </>
   
  )
}

export default Homepage