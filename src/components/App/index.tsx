import { Routes, Route } from 'react-router-dom';

import Home from 'views/Home';
import User from 'views/User';
import Info from 'views/Info';

import PageContainer from 'components/PageContainer';

import { Paths } from 'constants/routes';

import './index.css';

const App = () => {
  if (!process.env.REACT_APP_GITHUB_TOKEN) {
    console.log(
      'You have to provide your Git Hub API key for running this app.'
    );

    return null;
  }

  return (
    <Routes>
      <Route path={Paths.index} element={<PageContainer />}>
        <Route index element={<Home />} />
        <Route path={Paths.user} element={<User />} />
        <Route path={Paths.info} element={<Info />} />
      </Route>
    </Routes>
  );
};

export default App;
