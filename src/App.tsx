import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const Login = React.lazy(() => import('@Pages/login'));
const Home = React.lazy(() => import('@Pages/home'));
const Contact = React.lazy(() => import('@Pages/contact'));
const Register = React.lazy(() => import('@Pages/register'));

import { withSuspense } from '@Hocs';
import Wrapper from '@Common/wrapper';
import AuthContext, { CurrentUserProps } from '@Context/auth.context';
import { ThemeProvider } from '@mui/material';
import { theme } from './mui';

const HomeComponent = withSuspense(Home);
const ContactComponent = withSuspense(Contact);
const LoginComponent = withSuspense(Login);
const RegisterComponent = withSuspense(Register);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/register",
    element: <RegisterComponent />
  },
  {
    path: "/contact",
    element: <ContactComponent />,
  }
]);

function App() {
  const [currentUser, setCurrentUser] = React.useState<CurrentUserProps | null>(
    () => {
      const user = JSON.parse(localStorage.getItem('current-user'));
      if (user) {
        return user;
      }
      return null;
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <Wrapper>
          <RouterProvider router={router} />
        </Wrapper>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}

export default App
