import { Route, Routes, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

import { FairFores } from '../pages/FairForest';
import { CreateScroll } from '../pages/CreativeScroll';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function App() {
  const history = useLocation();
  const containerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (history.pathname === '/') {
      containerRef.current &&
        new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
        });

      gsap.fromTo(
        '.hero__section',
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero__section',
            start: 'top',
            end: 700,
            scrub: true,
          },
        },
      );

      const items_left = gsap.utils.toArray('.gallery__left .gallery__item');
      const items_right = gsap.utils.toArray('.gallery__right .gallery__item');

      items_left &&
        items_left.forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: -300 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: el,
                start: '-100',
                end: '700',
                scrub: true,
              },
            },
          );
        });

      items_right &&
        items_right.forEach((el: any) => {
          gsap.fromTo(
            el,
            { opacity: 0, x: 300 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: el,
                start: '200',
                end: '800',
                scrub: true,
              },
            },
          );
        });
    }
  }, []);

  return (
    <div className="wrapper" data-scroll-container ref={containerRef}>
      <Routes>
        <Route path="/fair-forest" element={<FairFores />} />
        <Route path="/" element={<CreateScroll />} />
      </Routes>
    </div>
  );
}

export default App;
