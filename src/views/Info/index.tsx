import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

import { TECHNOLOGIES } from 'constants/constants';

import './index.css';

const Info = () => {
  return (
    <>
      <Typography variant="h6">This project was created with:</Typography>

      <List>
        {TECHNOLOGIES.map(({ link, name }) => (
          <ListItem disablePadding key={name}>
            <ListItemButton
              component="a"
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
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
