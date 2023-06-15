import React, { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from '@Pages/login';
import Home from '@Pages/home';
import Wrapper from '@Common/wrapper';
import AuthContext, { CurrentUserProps } from '@Context/auth.context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
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
  )
}

export default App
