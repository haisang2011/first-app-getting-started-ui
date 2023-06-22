import React, { useContext, useState } from 'react';
import { EmailOutlined, Key } from '@mui/icons-material';
import Axios from '@Axios';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Header, LoginButton, Space } from './rightSide.style_component'
import Input from './Input';
import AuthContext from '@Context/auth.context';

interface LoginState {
  email: string;
  password: string;
}

const RightSide = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState<LoginState>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    if (currentUser) {
      navigate('/', { replace: true });
    }
  }, [])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post('/auth/login', formData);
      localStorage.setItem('access-token', response.data.accessToken);
      localStorage.setItem('current-user', JSON.stringify(response.data.user))
      console.log("sasa: ", response.data.user);
      setCurrentUser(response.data.user);
      navigate('/');
    } catch (error) {
      setError("hahahaha!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <FormContainer onSubmit={handleOnSubmit}>
        <Header>Welcome to my E-Commerce</Header>
        <Space />
        <Input
          id='email-identified'
          label='Email'
          type='text'
          name='email'
          onChange={handleOnChange}
          prefixIcon={<EmailOutlined />}
        />
        <Space />
        <Input
          id="password-identified"
          label='Password'
          onChange={handleOnChange}
          name='password'
          type='password'
          prefixIcon={<Key />}
        />
        <LoginButton sx={{ my: 2, p: 1.5 }} disabled={loading}>Log in</LoginButton>
      </FormContainer>
    </Container>
  )
}

export default RightSide;