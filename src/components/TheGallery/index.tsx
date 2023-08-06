import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import cn from './gallery.module.scss';
import gallery_img1 from '../../assets/img/work/1.jpg';
import gallery_img2 from '../../assets/img/work/2.jpg';
import gallery_img3 from '../../assets/img/work/3.jpg';
import gallery_img4 from '../../assets/img/work/4.jpg';
import gallery_img5 from '../../assets/img/work/5.jpg';
import gallery_img6 from '../../assets/img/work/6.jpg';

type ElementType = HTMLImageElement | HTMLDivElement | null;

export function TheGallery() {
  const itemsL = useRef<ElementType[]>([]);
  const itemsR = useRef<ElementType[]>([]);

  useEffect(() => {
    itemsL.current &&
      itemsL.current.forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -300 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: '0',
              end: 'top',
              scrub: true,
            },
          },
        );
      });
    itemsR.current &&
      itemsR.current.forEach((el: any) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 300 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: '200',
              end: 'top',
              scrub: true,
            },
          },
        );
      });
  }, []);

  return (
    <div className={cn.gallery}>
      <div className={cn.gallery__left} data-scroll data-scroll-speed="1">
        <img
          ref={(el) => itemsL.current.push(el)}
          className={cn.gallery__item}
          src={gallery_img1}
          alt="картинка галереи"
        />
        <img
          ref={(el) => itemsL.current.push(el)}
          className={cn.gallery__item}
          src={gallery_img2}
          alt="картинка галереи"
        />
        <div
          ref={(el) => itemsL.current.push(el)}
          className={cn.gallery__text + ' ' + cn.gallery__item}>
          <h2>Creating floating scroll with amazing parallax effect</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum eaque
            necessitatibus veniam cum molesti
          </p>
        </div>
        <img
          ref={(el) => itemsL.current.push(el)}
          className={cn.gallery__item}
          src={gallery_img5}
          alt="картинка галереи"
        />
      </div>
      <div className={cn.gallery__right} data-scroll data-scroll-speed="1">
        <div
          ref={(el) => itemsR.current.push(el)}
          className={cn.gallery__text + ' ' + cn.gallery__item}>
          <h2>Creating floating scroll with amazing parallax effect</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum eaque
            necessitatibus veniam cum molestiae pariatur porro qu
          </p>
        </div>
        <img
          ref={(el) => itemsR.current.push(el)}
          className={cn.gallery__item}
          src={gallery_img3}
          alt="картинка галереи"
        />
        <img
          ref={(el) => itemsR.current.push(el)}
          className={cn.gallery__item}
          src={gallery_img4}
          alt="картинка галереи"
        />
        <img
          ref={(el) => itemsR.current.push(el)}
          className={cn.gallery__item}
          src={gallery_img6}
          alt="картинка галереи"
        />
      </div>
    </div>
  );
}
