import { Container } from './login.style_component';
import { LeftSide, RightSide } from './components';

const Login = (props: any) => {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  )
}

export default Login;