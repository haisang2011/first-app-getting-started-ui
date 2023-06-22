import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const Login = React.lazy(() => import('@Pages/login'));
const Home = React.lazy(() => import('@Pages/home'));
const Contact = React.lazy(() => import('@Pages/contact'));
const Register = React.lazy(() => import('@Pages/register'));
const Cart = React.lazy(() => import('@Pages/cart'));

import { ThemeProvider } from '@mui/material';

import { withSuspense } from '@Hocs';
import { useGetCartData } from '@Hooks';

import AuthContext, { CurrentUserProps } from '@Context/auth.context';
import CartContext, { CartProps } from '@Context/cart.context';

import Wrapper from '@Common/wrapper';

import { theme } from './mui';

const HomeComponent = withSuspense(Home);
const ContactComponent = withSuspense(Contact);
const LoginComponent = withSuspense(Login);
const RegisterComponent = withSuspense(Register);
const CartComponent = withSuspense(Cart);

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
  },
  {
    path: "/shopping-cart",
    element: <CartComponent />,
  },
]);

function App() {
  const { data: cartData, refetch: getCartData } = useGetCartData({ isLazy: true });
  const [cart, setCart] = React.useState<CartProps | null>();
  const [currentUser, setCurrentUser] = React.useState<CurrentUserProps | null>(
    () => {
      const user = JSON.parse(localStorage.getItem('current-user'));
      if (user) {
        return user;
      }
      return null;
    }
  );

  React.useEffect(() => {
    if (currentUser) {
      getCartData();
    }
  }, [currentUser]);

  React.useEffect(() => {
    if (cartData) {
      setCart(cartData);
    }
  }, [cartData]);

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <CartContext.Provider
          value={{
            cartData: cart,
            setCartData: setCart,
            getCartDataFromApi: getCartData,
          }}
        >
          <Wrapper>
            <RouterProvider router={router} />
          </Wrapper>
        </CartContext.Provider>
      </AuthContext.Provider>
    </ThemeProvider>
  )
}

export default App
