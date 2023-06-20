import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from '@Pages/login';
import Home from '@Pages/home';
import Contact from '@Pages/contact';
import Wrapper from '@Common/wrapper';
import AuthContext, { CurrentUserProps } from '@Context/auth.context';
import { ThemeProvider } from '@mui/material';
import { theme } from './mui';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

function App() {
  const [currentUser, setCurrentUser] = useState<CurrentUserProps | null>(
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
