import React from 'react';
import { WrapperProps } from './wrapper.interface'
import { WrapperComponent as Container } from './wrapper.style_component'

const Wrapper = (props: WrapperProps) => {
  return <Container>
    {props.children}
  </Container>
}

export default Wrapper;