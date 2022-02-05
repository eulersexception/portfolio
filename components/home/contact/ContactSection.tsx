import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Confirmation from "./Confirmation";
import ContactForm from "./ContactForm";
import ErrorMessage from "./ErrorMessage";

function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Container maxW="container.xl" centerContent>
      {messageSent ? (
        <Confirmation />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <ContactForm setMessageSent={setMessageSent} setError={setError} />
      )}
    </Container>
  );
}

export default ContactSection;
