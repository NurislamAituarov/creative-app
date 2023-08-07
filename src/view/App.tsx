import { Route, Routes, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

import { FairFores } from '../pages/FairForest';
import { CreativeScroll } from '../pages/CreativeScroll';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TheNav } from '../components/TheNav';
import { CarouselImage } from '../pages/CarouselImage';

function App() {
  const history = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (history.pathname === '/creative-scroll') {
      containerRef.current &&
        new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
        });
    }
    if (history.pathname === '/') {
      if (containerRef.current) containerRef.current.style.overflow = 'hidden';
    }
    if (history.pathname === '/fair-forest') {
      if (containerRef.current) {
        if (containerRef.current) containerRef.current.style.overflow = '';
        containerRef.current.style.overflowX = 'hidden';
      }
    }
  }, [history.pathname]);

  return (
    <div className="wrapper" data-scroll-container ref={containerRef}>
      <TheNav />
      <Routes>
        <Route path="/fair-forest" element={<FairFores />} />
        <Route path="/creative-scroll" element={<CreativeScroll />} />
        <Route path="/" element={<CarouselImage />} />
      </Routes>
    </div>
  );
}

export default App;
