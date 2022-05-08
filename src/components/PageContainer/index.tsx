import { Outlet, Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Paths } from 'constants/routes';

import octocat from 'assets/images/octocat.png';

import './index.css';

const AppLayout = () => {
  const location = useLocation();

  const isMainPage = location.pathname === Paths.index;

  return (
    <>
      <header className="header container">
        <Link to={Paths.index} className="logo">
          <img src={octocat} alt="octocat" width={80} />
          <Typography
            variant="h5"
            style={{ color: '#000' }}
            className="logo-text"
          >
            Github Users
          </Typography>
        </Link>
        <Link to={Paths.info}>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Link>
      </header>
      <main className="container main">
        {!isMainPage && (
          <Link to={Paths.index} className="back-button">
            <IconButton aria-label="back to list">
              <ArrowBackIcon />
            </IconButton>
          </Link>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
