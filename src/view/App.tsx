import { Route, Routes, useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';

import { FairFores } from '../pages/FairForest';
import { CreateScroll } from '../pages/CreativeScroll';
import { useEffect, useRef } from 'react';

function App() {
  const history = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (history.pathname === '/') {
      wrapperRef.current &&
        new LocomotiveScroll({
          el: wrapperRef.current,
          smooth: true,
          getSpeed: true,
        });
    }
  }, []);

  return (
    <div className="wrapper" data-scroll-container ref={wrapperRef}>
      <Routes>
        <Route path="/fair-forest" element={<FairFores />} />
        <Route path="/" element={<CreateScroll />} />
      </Routes>
    </div>
  );
}

export default App;
