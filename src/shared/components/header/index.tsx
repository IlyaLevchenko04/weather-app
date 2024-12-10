import { NAV_ITEMS } from '@shared/constants/nav-items';
import { NavLink, Outlet } from 'react-router';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import { ROUTER_BOOK } from '@shared/constants/router-book';
import s from './index.module.scss';
import { Container } from '@shared/ui/container';
import clsx from 'clsx';
export const Header = () => (
  <>
    <header className={s.root}>
      <Container className={s.container}>
        <NavLink className={clsx(s.link, s.logoLink)} to={ROUTER_BOOK.index}>
          <AcUnitIcon fontSize="large" className={s.logo} />
          <span>Weather-app</span>
        </NavLink>
        <nav className={s.nav}>
          {NAV_ITEMS.map(item => (
            <NavLink
              className={clsx(s.link, item.icon ? '' : s.navLink)}
              to={item.link}
              key={item.link}
            >
              {item.title ? item.title : null}
              {item.icon ? <item.icon className={s.navIcon} /> : null}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
