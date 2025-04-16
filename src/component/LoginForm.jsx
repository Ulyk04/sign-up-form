import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInPage } from '@toolpad/core/SignInPage';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import { getUserByEmail } from '../data/users';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function LoginForm() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={(provider, formData) => {
          const email = formData.get('email');
          const password = formData.get('password');
          const user = getUserByEmail(email);

          if (user && user.password === password) {
            navigate('/hello');
          } else {
            alert('Invalid credentials');
          }
        }}
        slotProps={{
          emailField: { variant: 'standard', autoFocus: true },
          passwordField: { variant: 'standard' },
          submitButton: { variant: 'outlined' },
        }}
        providers={providers}
      />
    </AppProvider>
  );
}
