import { useLocation } from 'react-router';

import bg from '../assets/img/bg.jpg';
import { TheHero } from '../components/TheHero';
import { TheGallery } from '../components/TheGallery';

export function CreateScroll() {
  const history = useLocation();

  if (history.pathname === '/') {
    const body = document.body;
    body.style.backgroundImage = `url(${bg})`;
    body.style.overflowX = 'hidden';
  }

  return (
    <div data-scroll-section>
      <header className="hero__section">
        <TheHero />
      </header>

      <main className="portfolio">
        <div className="container">
          <TheGallery />
        </div>
      </main>
    </div>
  );
}
