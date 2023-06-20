import { Background, ContactAreaField, ContactField, ContactSubmitButton, Container, FieldControl, FormContainer, FormControl, Header } from "./contact.style_component";

const marginBottomStyle = (size = 24) => ({ marginBottom: size });

export default function Contact() {
  return (
    <Container>
      <FormContainer>
        <FormControl>
          <Header style={marginBottomStyle(32)}>Contact Us</Header>
          <FieldControl style={marginBottomStyle()}>
            <ContactField type="input" name="name" placeholder="Name" />
          </FieldControl>
          <FieldControl style={marginBottomStyle()}>
            <ContactField type="input" name="email" placeholder="Email" />
          </FieldControl>
          <FieldControl style={{ ...marginBottomStyle(), height: 120 }}>
            <ContactAreaField name="message" placeholder="Write something..." />
          </FieldControl>
          <ContactSubmitButton>Submit</ContactSubmitButton>
        </FormControl>
        <Background />
      </FormContainer>
    </Container>
  );
}