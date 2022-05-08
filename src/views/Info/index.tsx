import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import './index.css';

const Info = () => {
  return (
    <>
      <Typography variant="h6">This project was created with:</Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="https://reactjs.org/">
            <ListItemText primary="React.js" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="https://www.typescriptlang.org/">
            <ListItemText primary="Typescript" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="https://mui.com/">
            <ListItemText primary="Material UI" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="https://redux-toolkit.js.org/">
            <ListItemText primary="Redux Toolkit" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="https://redux-saga.js.org/">
            <ListItemText primary="Redux Saga" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="https://reactrouter.com/">
            <ListItemText primary="React Router DOM" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://axios-http.com/docs/intro"
          >
            <ListItemText primary="Axios" />
          </ListItemButton>
        </ListItem>
      </List>
      <div className="repo-link">
        <Link
          href="https://github.com/Polina04/github-users"
          target="_blank"
          rel="noopener noreferrer"
          variant="body1"
        >
          GitHib Repository
        </Link>
      </div>
    </>
  );
};

export default Info;
