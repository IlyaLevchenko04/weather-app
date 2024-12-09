import { Outlet, Route, Routes } from 'react-router';
import { Home } from '@pages/home';
import { CityPage } from '@pages/slug';
import { ROUTER_BOOK } from '@shared/constants/router-book';

function App() {
  return (
    <Routes>
      <Route
        path={ROUTER_BOOK.index}
        element={
          <div>
            <div>Header</div>
            <Outlet />
          </div>
        }
      >
        <Route index element={<Home />} />
        <Route path=":slug" element={<CityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
