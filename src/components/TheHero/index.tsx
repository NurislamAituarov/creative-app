import cn from './hero.module.scss';
import hero from '../../assets/img/hero.png';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export function TheHero() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      <img className={cn.hero} src={hero} alt="hero" />

      <div className="container">
        <div className={cn.hero__header} data-scroll data-scroll-speed="12">
          <h1 className={cn.hero__title}>creative scroll</h1>
        </div>
      </div>
    </>
  );
}
