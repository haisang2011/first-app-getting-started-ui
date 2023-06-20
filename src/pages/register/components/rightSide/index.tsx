import React, { useContext, useState } from 'react';
import { EmailOutlined, Key, AccountBox, Person } from '@mui/icons-material';
import Axios from '@Axios';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Header, LoginButton, Space } from './rightSide.style_component'
import Input from './Input';
import AuthContext from '@Context/auth.context';

interface LoginState {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

const RightSide = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState<LoginState>({ email: '', password: '', first_name: '', last_name: '' });
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
      await Axios.post('/auth/register', formData);
      navigate('/login');
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
        <Space />
        <Input
          id="first_name_identified"
          label='Firstname'
          onChange={handleOnChange}
          name='first_name'
          type='text'
          prefixIcon={<AccountBox />}
        />
        <Space />
        <Input
          id="last_name_identified"
          label='Lastname'
          onChange={handleOnChange}
          name='last_name'
          type='text'
          prefixIcon={<Person />}
        />
        <LoginButton sx={{ my: 2, p: 1.5 }} disabled={loading}>Register</LoginButton>
      </FormContainer>
    </Container>
  )
}

export default RightSide;