import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';

import { fetchUsers, selectUsers } from 'redux/slices/users';

import UsersList from 'components/UsersList';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(selectUsers);

  useEffect(() => {
    if (!data?.length) dispatch(fetchUsers());
  }, [data]);

  return (
    <>
      {isLoading && <CircularProgress className="content-loading" />}
      {!!data.length && (
        <Paper style={{ maxWidth: 800, margin: '0 auto' }}>
          <UsersList users={data} />
        </Paper>
      )}
      {error && <Alert severity="error">{error}</Alert>}
    </>
  );
};

export default Home;
