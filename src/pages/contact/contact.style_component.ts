import { styled } from "styled-components";
import contactBackground from "@/assets/contact_background.png";
import contactBackground2 from "@/assets/sub_contact_background.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(${_ => contactBackground});
  background-repeat: no-repeat;
  background-size: cover;
`

export const FormContainer = styled.div`
  display: flex;
  max-width: 70%;
  max-height: 75%;
  width: 100%;
  height: 100%;
  background-color: #E5E5E5;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.35);
`

export const FormControl = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
`

export const Header = styled.h3`
  font-size: 2.75rem;
  font-weight: 400;
  color: #303234;
`

export const FieldControl = styled.div`
  height: 3.5rem;
  max-width: 40rem;
  width: 100%;
  margin-bottom: 1rem;
  background: #FFFFFF;
  overflow: hidden;
  border-radius: 0.5rem;
`

export const ContactField = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: #FFFFFF;
  text-indent: 0.75rem;
`

export const ContactAreaField = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  padding: 0.75rem;
`;

export const ContactSubmitButton = styled.button`
  background-color: #FFFFFF;
  color: #000000;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
`

export const Background = styled.div`
  min-width: 20rem;
  max-width: 45%;
  width: 100%;
  height: 100%;
  background: url(${_ => contactBackground2});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
`