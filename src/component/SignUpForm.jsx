import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../data/users'; // Импорт функции для сохранения
import { v4 as uuidv4 } from 'uuid';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

export default function SignUpForm() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={(provider, formData) => {
          const email = formData.get('email');
          const password = formData.get('password');
          const tandc = formData.get('tandc');

          if (email && password && tandc) {
            addUser({ id: uuidv4(), email, password });
            navigate('/hello');
          } else {
            alert('Please fill all fields and accept the terms.');
          }
        }}
        slotProps={{
          emailField: { variant: 'standard', autoFocus: false },
          passwordField: { variant: 'standard' },
          submitButton: { variant: 'outlined' },
          rememberMe: {
            control: (
              <Checkbox
                name="tandc"
                value="true"
                color="primary"
                sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
              />
            ),
            color: 'textSecondary',
            label: 'I agree with the T&C',
          },
        }}
        providers={providers}
      />
    </AppProvider>
  );
}
