import { Circle } from '@mui/icons-material';
import React from 'react';
import './Slider.scss';

export default function Slider() {


    // const [currentSlide, setCurrentSlide] = React.useState(1)

    // const prevSlide = () => {
    //     setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
    // }

    // const nextSlide = () => {
    //     setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)    
    // }
 
    // function timerForSlider() {
    //     if (nextIcon === 1) {
            
    //     }
    // }

  return (
    <div className='slider'>
        <div className='slider-container' style={{transform: `translateX`}}>
            <img src='https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=1340&h=465&dpr=1' alt=''/>
            <img src='https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg' alt=''/>
            <img src='https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg' alt=''/>
        </div>
        <div className='icons'>
            <Circle className='icon'/>
            <Circle className='icon'/>
            {/* <Circle className='icon'/>
            <Circle className='icon'/>
            <Circle className='icon'/> */}
            <Circle className='icon'/>
        </div>
    </div>
        
  )
}
