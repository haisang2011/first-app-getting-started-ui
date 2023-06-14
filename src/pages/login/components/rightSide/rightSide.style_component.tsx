import { Button, ButtonProps } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`

export const FormContainer = styled.form`
  width: 100%;
  min-width: 40rem;
  height: 300px;
  padding: 3rem 5rem 5rem 5rem;
  background-color: #FFFFFF;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
`

export const Header = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  color: #6358DC;
`

export const LoginButton = styled(({ ...rest }: ButtonProps) => (
  <Button
    {...rest}
    variant="contained"
    fullWidth
    type="submit"
  />
))`
  background-color: #6358DC !important;
`

export const Space = styled.div`
  margin: 20px 0;
`