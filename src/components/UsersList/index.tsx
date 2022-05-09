import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StyledLink from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import type { User } from 'types/models';

import useObserver from 'hooks/useObserver';

import { fetchNextPageUsers, selectUsers } from 'redux/slices/users';

import './index.css';

type Props = { users: User[] };

const UsersList = ({ users }: Props) => {
  const loadMoreRef = useRef(null);
  const dispatch = useDispatch();
  const { isNextPageLoading, nextPageError } = useSelector(selectUsers);

  useObserver(loadMoreRef, isIntersect => {
    if (isIntersect) dispatch(fetchNextPageUsers());
  });

  return (
    <>
      <List>
        {users.map(({ avatar_url: avatar, id, login, html_url: url }) => (
          <Fragment key={id}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <Link to={login}>
                  <IconButton edge="end" aria-label="view full info">
                    <ArrowForwardIcon />
                  </IconButton>
                </Link>
              }
            >
              <ListItemAvatar>
                <Avatar alt={login} src={avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={login}
                secondary={
                  <StyledLink
                    href={url}
                    variant="body2"
                    color="text.primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url}
                  </StyledLink>
                }
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>

      {isNextPageLoading && (
        <div className="load-more-loading">
          <CircularProgress />
        </div>
      )}
      {nextPageError && <Alert severity="error">{nextPageError}</Alert>}

      <div ref={loadMoreRef} />
    </>
  );
};

export default UsersList;
