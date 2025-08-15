import React from "react";
import "./Slider.css";
import IMG_1 from "../Assets/pizza/Pizza with dried tomatoes and chicken.avif";
import IMG_2 from "../Assets/pizza/pizza-bbq.avif";
import IMG_3 from "../Assets/pizza/pizza-beef-and-crispy.avif";

export default function Slider() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const intervalRef = React.useRef(null);

  const slides = [IMG_1, IMG_2, IMG_3];
  const slideDuration = 5000000;

  const resetIntervals = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % slides.length;

          return nextIndex;
        });
      }, slideDuration);
    }
  };

  React.useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slides.length);
      }, slideDuration);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setSlideIndex(index);
    resetIntervals();
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-wrapper">
          <div
            className="slider-img-wrapper"
            style={{
              transform: `translateX(-${slideIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <img
                className="slider-img"
                src={slide}
                key={slide + "_" + index}
              />
            ))}
          </div>
        </div>
        <div className="slider-nav">
          {slides.map((item, index) => (
            <div
              onClick={(e) => goToSlide(index)}
              className={
                slideIndex === index ? "slider-dot active" : "slider-dot"
              }
              key={item}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
