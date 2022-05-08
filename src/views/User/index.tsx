import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { fetchUser, selectUser } from 'redux/slices/user';

import UserCard from 'components/UserCard';

const User = () => {
  const { userLogin } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(selectUser);

  useEffect(() => {
    const isFetchEnabled = !data || data?.login !== userLogin;
    if (isFetchEnabled && userLogin) dispatch(fetchUser(userLogin));
  }, [data]);

  return (
    <>
      {data && !isLoading && <UserCard userData={data} />}
      {isLoading && <CircularProgress className="content-loading" />}
      {error && <Alert severity="error">{error}</Alert>}
    </>
  );
};

export default User;
