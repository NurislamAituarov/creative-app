import { NavLink, useLocation } from 'react-router-dom';
import cn from './nav.module.scss';

export function TheNav() {
  const history = useLocation();

  return (
    <nav className={cn.nav}>
      <ul>
        {history.pathname === '/' ? (
          <NavLink to={'/fair-forest'}>Fair Forest</NavLink>
        ) : (
          <NavLink to={'/'}>Creative Scroll</NavLink>
        )}
      </ul>
    </nav>
  );
}
