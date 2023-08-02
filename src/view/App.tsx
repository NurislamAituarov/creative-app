import { MouseEvent, useEffect } from 'react';

import useSound from 'use-sound';
import sound from '../assets/sound.mp3';

function App() {
  const [play] = useSound(sound, { volume: 0.25 });

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      document.body.style.cssText += `--scrollTop:${window.scrollY}px`;
    });

    return () => {
      window.removeEventListener('scroll', (e) => {
        document.body.style.cssText += `--scrollTop:${window.scrollY}px`;
      });
    };
  }, []);

  function onPlaySound(e: MouseEvent<HTMLDivElement>) {
    play();
    e.currentTarget.style.pointerEvents = 'none';
    setInterval(() => {
      play();
    }, 120000);
  }

  return (
    <div className="wrapper" onClick={onPlaySound}>
      <div className="content">
        <header className="header">
          <div className="layers">
            <div className="layers__header">
              <div className="layers__title">Welcome to parallax</div>
              <div className="layers__subtitle">Fair Forest</div>
            </div>
            <div className="layer layers__base"></div>
            <div className="layer layers__middle"></div>
            <div className="layer layers__front"></div>
          </div>
        </header>
        <main>
          <article className="main__article">
            <div className="main__article-content">
              <h2 className="main__article-title">To be container</h2>
              <p className="main__article-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illum fuga
                explicabo beatae voluptates aspernatur alias error laboriosam quia blanditiis sunt
                nostrum deserunt, quasi temporibus quibusdam reiciendis incidunt impedit. Ipsam,
                quas perspiciatis.
              </p>
            </div>

            <div className="copy">WebDesign Master</div>
          </article>
        </main>
      </div>
    </div>
  );
}

export default App;
