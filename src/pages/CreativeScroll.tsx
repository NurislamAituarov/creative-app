import { useLocation } from 'react-router';

import bg from '../assets/img/bg.jpg';
import hero from '../assets/img/hero.png';
import gallery_img1 from '../assets/img/work/1.jpg';
import gallery_img2 from '../assets/img/work/2.jpg';
import gallery_img3 from '../assets/img/work/3.jpg';
import gallery_img4 from '../assets/img/work/4.jpg';
import gallery_img5 from '../assets/img/work/5.jpg';
import gallery_img6 from '../assets/img/work/6.jpg';

export function CreateScroll() {
  const history = useLocation();

  if (history.pathname === '/') {
    const body = document.body;
    body.style.backgroundImage = `url(${bg})`;
    body.style.overflowX = 'hidden';
  }

  return (
    <>
      <header className="hero__section" data-scroll-section>
        <img className="hero" src={hero} alt="hero" data-scroll-speed="3" />

        <div className="container">
          <div className="hero__header">
            <h1 className="hero__title" data-scroll-speed="1">
              creative scroll
            </h1>
          </div>
        </div>
      </header>

      <main className="portfolio">
        <div className="container">
          <div className="gallery" data-scroll-section>
            <div className="gallery__left">
              <img
                className="gallery__item"
                data-scroll-speed="-5"
                src={gallery_img1}
                alt="картинка галереи"
              />
              <img className="gallery__item" src={gallery_img2} alt="картинка галереи" />
              <div className="gallery__text gallery__item">
                <h2>Creating floating scroll with amazing parallax effect</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum eaque
                  necessitatibus veniam cum molesti
                </p>
              </div>
              <img className="gallery__item" src={gallery_img5} alt="картинка галереи" />
            </div>
            <div className="gallery__right">
              <div className="gallery__text gallery__item">
                <h2>Creating floating scroll with amazing parallax effect</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum eaque
                  necessitatibus veniam cum molestiae pariatur porro qu
                </p>
              </div>
              <img
                className="gallery__item"
                data-scroll-speed="2"
                src={gallery_img3}
                alt="картинка галереи"
              />
              <img className="gallery__item" src={gallery_img4} alt="картинка галереи" />
              <img className="gallery__item" src={gallery_img6} alt="картинка галереи" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}