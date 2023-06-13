import { useState } from 'react'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Login from './pages/login';
import Wrapper from './common/wrapper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <div>HAI SANG</div>,
  }
]);

function App() {
  return <Wrapper>
    <RouterProvider router={router} />
  </Wrapper>
}

export default App
