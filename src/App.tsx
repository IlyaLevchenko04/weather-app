import { Route, Routes } from 'react-router';
import { Home } from '@pages/home';
import { CityPage } from '@pages/slug';
import { Header } from '@shared/components/header';

const baseUrl = () =>
  import.meta.env.VITE_NODE_ENV === 'dev' ? '/' : '/weather-app/';

function App() {
  return (
    <Routes>
      <Route path={baseUrl()} element={<Header />}>
        <Route index element={<Home />} />
        <Route path=":slug" element={<CityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
