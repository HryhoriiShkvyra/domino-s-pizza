import React from 'react';
import './Slider.scss';

export default function Slider() {


  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === 0) {
        return(
          setCurrentSlide((prev) => prev = 1)
        )
      } else if (currentSlide === 1) {
        return(
          setCurrentSlide((prev) => prev = 2)
        )
      } else if (currentSlide === 2) {
        return(
          setCurrentSlide((prev) => prev = 0)
        )
      }
    }, 5000);
    return () => clearInterval(interval)
  }, [currentSlide])

  
  return (
    <div className='slider'>
        <div className='slider-wrapper'>
          <div className='slider-container' style={{transform: `translateX( calc(-${currentSlide * 69}vw + ${currentSlide * 10}px))`}}>
              <img className='slider-img' src='https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg' alt=''/>
              <img className='slider-img' src='https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg' alt=''/>
              <img className='slider-img' src='https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg' alt=''/>
          </div>
        </div>
       
        <div className='icons'>
            <div onClick={() => setCurrentSlide(0)} 
            className={currentSlide === 0 ? 'icon-active' : 'icon'}
            >
            </div>
            <div onClick={() => setCurrentSlide(1)} 
            className={currentSlide === 1 ? 'icon-active' : 'icon'}
            >
            </div>
            <div onClick={() => setCurrentSlide(2)} 
            className={currentSlide === 2 ? 'icon-active' : 'icon'}
            >
            </div>
        </div>
    </div>
        
  )
}
