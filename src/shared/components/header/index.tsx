import { NAV_ITEMS } from '@shared/constants/nav-items';
import { NavLink, Outlet } from 'react-router';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { ROUTER_BOOK } from '@shared/constants/router-book';
import s from './index.module.scss';
import { Container } from '@shared/ui/container';
import clsx from 'clsx';
export const Header = () => (
  <>
    <header>
      <Container className={s.root}>
        <NavLink className={s.link} to={ROUTER_BOOK.index}>
          <AcUnitIcon fontSize="large" className={s.logo} />
        </NavLink>
        <nav>
          {NAV_ITEMS.map(item => (
            <NavLink className={clsx(s.link, s.navLink)} to={item.link}>
              {item.title}
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
