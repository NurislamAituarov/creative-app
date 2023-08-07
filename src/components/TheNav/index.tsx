import { NavLink, useLocation } from 'react-router-dom';
import cn from './nav.module.scss';

export function TheNav() {
  const history = useLocation();

  return (
    <nav className={cn.nav}>
      <ul>
        {history.pathname !== '/creative-scroll' && (
          <NavLink to={'/creative-scroll'}>Creative Scroll</NavLink>
        )}
        {history.pathname !== '/fair-forest' && <NavLink to={'/fair-forest'}>Fair Forest</NavLink>}
        {history.pathname !== '/' && <NavLink to={'/'}>Carousel</NavLink>}
      </ul>
    </nav>
  );
}
