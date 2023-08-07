import { MouseEvent, useEffect } from 'react';
import useSound from 'use-sound';
import sound from '../assets/sound.mp3';
import { TheLayers } from '../components/TheLayers';
import { TheMainArticle } from '../components/TheMainForest';

export function FairFores() {
  const [play] = useSound(sound, { volume: 0.25 });

  useEffect(() => {
    const handleScroll = () => {
      writeVariableScroll();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  function writeVariableScroll() {
    document.body.style.cssText += `--scrollTop:${window.scrollY}px`;
  }

  function onPlaySound(e: MouseEvent<HTMLDivElement>) {
    play();
    e.currentTarget.style.pointerEvents = 'none';
    setInterval(() => {
      play();
    }, 120000);
  }
  return (
    <div className="content" onClick={onPlaySound}>
      <header className="header">
        <TheLayers />
      </header>
      <main>
        <TheMainArticle />
      </main>
    </div>
  );
}
