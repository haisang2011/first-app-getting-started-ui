import LoginSVG from './LoginSVG';
import { styled } from 'styled-components';

const LeftSideElement = styled.div`
  flex-basis: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0,35,36);
  background: linear-gradient(90deg, rgba(0,35,36,1) 0%, rgba(9,94,121,1) 35%, rgba(0,212,255,1) 100%);

  svg {
    width: 100%;
    min-width: 30rem;
    max-width: 45rem;
  }
`

const LeftSide = () => {
  return (
    <LeftSideElement>
      <LoginSVG />
    </LeftSideElement>
  )
}

export default LeftSide;