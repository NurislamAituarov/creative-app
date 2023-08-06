import { Route, Routes, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

import { FairFores } from '../pages/FairForest';
import { CreateScroll } from '../pages/CreativeScroll';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TheNav } from '../components/TheNav';

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
    }
  }, [history.pathname]);

  return (
    <div className="wrapper" data-scroll-container ref={containerRef}>
      <TheNav />
      <Routes>
        <Route path="/fair-forest" element={<FairFores />} />
        <Route path="/" element={<CreateScroll />} />
      </Routes>
    </div>
  );
}

export default App;
