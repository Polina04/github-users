import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import type { UserDetailed } from 'types/models';

import defaultAvatar from 'assets/images/default-avatar.png';

type Props = { userData: UserDetailed };

const UserCard = ({
  userData: {
    name = '',
    avatar_url: avatar,
    bio = '-',
    blog = '-',
    company = '-',
    email = '-',
    followers,
    following,
    location = '-',
  },
}: Props) => {
  return (
    <Paper
      style={{ display: 'flex', padding: 30, maxWidth: 900, margin: '0 auto' }}
    >
      <CardMedia
        component="img"
        style={{ maxWidth: 500 }}
        image={avatar || defaultAvatar}
        alt={name || ''}
      />
      <div style={{ marginLeft: 30 }}>
        <Typography variant="h2" style={{ marginBottom: 30 }}>
          {name}
        </Typography>
        <Typography>Bio: {bio}</Typography>
        <Typography>
          Blog: {blog ? <Link href={blog}>{blog}</Link> : '-'}
        </Typography>
        <Typography>Company: {company}</Typography>
        <Typography>Email: {email}</Typography>
        <Typography>Followers: {followers}</Typography>
        <Typography>Following: {following}</Typography>
        <Typography>Location: {location}</Typography>
      </div>
    </Paper>
  );
};

export default UserCard;
