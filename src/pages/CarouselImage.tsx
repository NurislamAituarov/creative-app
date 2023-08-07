import { useEffect } from 'react';
import Swiper from 'swiper';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';

export function CarouselImage() {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      freeMode: true,
      centeredSlides: true,
      mousewheel: true,
      parallax: true,
      breakpoints: {
        0: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 3.5,
          spaceBetween: 60,
        },
      },
    });
  }, []);

  return (
    <div className="swiper slider slider__main">
      <div className="swiper-wrapper slider__wrapper">
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="20%"
            style={{ backgroundImage: `url(${img1})` }}></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="40%"
            style={{ backgroundImage: `url(${img2})` }}></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="20%"
            style={{ backgroundImage: `url(${img3})` }}></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="40%"
            style={{ backgroundImage: `url(${img4})` }}></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="20%"
            style={{ backgroundImage: `url(${img5})` }}></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="40%"
            style={{ backgroundImage: `url(${img6})` }}></div>
        </div>
        <div className="swiper-slide slider__item">
          <div
            className="slider__img"
            data-swiper-parallax="20%"
            style={{ backgroundImage: `url(${img7})` }}></div>
        </div>
      </div>
    </div>
  );
}
