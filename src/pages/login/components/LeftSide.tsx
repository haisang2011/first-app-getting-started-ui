import React from 'react';
import LoginSVG from './LoginSVG';
import { styled } from 'styled-components';

const LeftSideElement = styled.div`
  flex-basis: 55%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50%;
    min-width: 500px;
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