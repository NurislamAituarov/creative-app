import { Route, Routes, useLocation } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';

import { FairFores } from '../pages/FairForest';
import { CreateScroll } from '../pages/CreativeScroll';
import { useEffect, useRef } from 'react';

function App() {
  const history = useLocation();
  const containerRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    scroll && scroll.scrollTo('#content');

    if (history.pathname === '/') {
      // wrapperRef.current &&
      //   new LocomotiveScroll({
      //     el: wrapperRef.current,
      //     smooth: true,
      //     getSpeed: true,
      //   });
    }
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}>
      <div className="wrapper" data-scroll-container ref={containerRef}>
        <Routes>
          <Route path="/fair-forest" element={<FairFores />} />
          <Route path="/" element={<CreateScroll />} />
        </Routes>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
