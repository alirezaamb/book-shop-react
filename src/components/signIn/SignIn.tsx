import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { SingInType, UserType } from '../../types/types';
import { getAllProfiles } from '../../api/get';
import { useNavigate } from 'react-router-dom';
import { localStorageSetter } from '../../utils/localStorage';

export default function SignIn({ setSearchParams }: SingInType) {
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const allusers = await getAllProfiles();
    if (allusers) {
      const foundedUser = allusers.find(
        (user: UserType) =>
          user.email === data.get('email') &&
          user.password === data.get('password')
      );
      if (foundedUser.role === 'admin') {
        localStorageSetter(
          'Auth',
          JSON.stringify({ isLogin: true, role: 'admin' })
        );
        navigate({ pathname: '/dashboard' });
      } else {
        localStorageSetter(
          'Auth',
          JSON.stringify({ isLogin: true, role: 'user' })
        );

        navigate({ pathname: '/' });
      }
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const handleSignUpLinkClick = () => {
    setSearchParams({ action: 'signup' });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="#" variant="body2">
              <Box onClick={handleSignUpLinkClick}>
                "Don't have an account? Sign Up"
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
