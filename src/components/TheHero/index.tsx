import cn from './hero.module.scss';
import hero from '../../assets/img/hero.png';

export function TheHero() {
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
