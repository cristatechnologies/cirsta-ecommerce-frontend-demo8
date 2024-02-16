import Image from 'next/image';
import React, { useState, useRef } from "react";

const HersoSection = () => {
    const [pos, setPos] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselItemsRef = useRef([]);

  const slide = ({ show, disable, translateX }) => {
    function active(_pos) {
      carouselItemsRef.current[_pos].classList.toggle("active");
    }

    function inactive(_pos) {
      carouselItemsRef.current[_pos].classList.toggle("active");
    }

    inactive(disable);
    active(show);

    document.querySelectorAll(".carousel__item").forEach((item, index) => {
      if (index === show) {
        item.style.transition=`transform 500ms ease-in-out;`
        item.style.transform = `translateX(-${translateX}%)`;
      } else {
        item.style.transform = `translateX(-${translateX}%)`;
      }
    });

    return show;
  };

  const handleLeftClick = () => {
    let calculate = pos > 0 ? (pos - 1) % carouselCount : carouselCount;
    let newPos = pos;

    if (pos > 0) {
      setTranslateX(pos === 1 ? 0 : translateX - 100);
    } else if (pos <= 0) {
      setTranslateX(100 * (carouselCount - 1));
      calculate = carouselCount - 1;
    }

    newPos = slide({
      show: calculate,
      disable: pos,
      translateX: translateX,
    });

    setPos(newPos);
  };

  const handleRightClick = () => {
    let calculate = (pos + 1) % carouselCount;
    let newPos = pos;

    if (pos >= carouselCount - 1) {
      calculate = 0;
      setTranslateX(0);
    } else {
      setTranslateX(translateX + 100);
    }

    newPos = slide({
      show: calculate,
      disable: pos,
      translateX: translateX,
    });

    setPos(newPos);
  };

  const carouselCount = 3;

  return (
    <div className="relative overflow-hidden w-full group">
    <div className="carousel ">
      <div
        className="carousel__item  "
        ref={(el) => (carouselItemsRef.current[0] = el)}
      >
        <Image
          src="/assets/images/volunteer-helping-with-donation-box.jpg"
          alt=""
          layout="fill"
          className="!min-h-[680px]"
        />
        <div className="absolute clip-polygon bg-white text-orange top-2/3 sm:top-1 lg:top-1 bottom-n1 right-0 left-auto w-full sm:min-w-[680px] sm:min-h-[680px] lg:min-w-[680px] lg:min-h-[680px] flex flex-col items-end justify-end pb-10 pr-10 ">
          <h1 className="text-5xl sm:text-[20px] lg:text-[32px] font-bold text-orange-600 mt-2 sm:mt-0 lg:mt-0">
          Promote Art
          </h1>
          <p className="text-xs sm:text-[10px] lg:text-sm  font-medium text-gray-400 mt-2">
          Artists Need Help To Get Recognised
          </p>
        </div>
      </div>
      <div
        className="carousel__item "
        ref={(el) => (carouselItemsRef.current[1] = el)}

      >
        <Image
          src="/assets/images/volunteer-selecting-organizing-clothes-donations-charity.jpg"
          alt=""
          layout="fill"
          className="lg:!min-h-[680px]  !w-full !m-0 object-cover"
        />
        <div className="absolute clip-polygon bg-white text-orange top-2/3 sm:top-1 lg:top-1 bottom-n1 right-0 left-auto w-full sm:min-w-[680px] sm:min-h-[680px] lg:min-w-[680px] lg:min-h-[680px] flex flex-col items-end justify-end pb-10 pr-10 ">
          <h1 className="text-5xl sm:text-[20px] lg:text-[32px] font-bold text-orange-600 mt-2 sm:mt-0 lg:mt-0">
          
          Part Of Change
          </h1>
          <p className="text-xs sm:text-[8px] lg:text-sm  font-medium text-gray-400 mt-2">
          
          Each Small Actions Leads To Big Change
          </p>
        </div>
      </div>
      <div
        className="carousel__item "
        ref={(el) => (carouselItemsRef.current[2] = el)}
      >
        <Image
          src="/assets/images/medium-shot-people-collecting-donations.jpg"
          alt=""
          layout="fill"
          className="!min-h-[680px] !m-0"
        />
        <div className="absolute clip-polygon bg-white text-orange top-2/3 sm:top-1 lg:top-1 bottom-n1 right-0 left-auto w-full sm:min-w-[680px] sm:min-h-[680px] lg:min-w-[680px] lg:min-h-[680px] flex flex-col items-end justify-end pb-10 pr-10 ">
          <h1 className="text-5xl sm:text-[20px] lg:text-[32px] font-bold text-orange-600 mt-2 sm:mt-0 lg:mt-0 ">
          Humanity
          </h1>
          <p className="text-xs sm:text-[10px] lg:text-sm  font-medium text-gray-400 mt-2">
          Choose Kalalay, Help Artists
          </p>
        </div>
      </div>
    </div>
    <div className="carousel__buttons group-hover:flex group-hover:transition-opacity group-hover:duration-150 group-hover:ease-in ">
      <button
        type="button"
        className="carousel-button focus:bg-orange-600 bg-orange-600 hover:bg-orange-600"
        onClick={handleLeftClick}
      >
        &#10094;
      </button>
      <button
        type="button"
        className="carousel-button focus:bg-orange-600 bg-orange-600 hover:bg-orange-600"
        onClick={handleRightClick}
      >
        &#10095;
      </button>
    </div>
  </div>
  )
}

export default HersoSection