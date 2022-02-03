import {
  Button,
  Container,
  Heading,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import NeonText from "../components/ui/NeonText";

function Imprint() {
  const router = useRouter();

  return (
    <Container maxW="container.md" minH="100vh" centerContent padding={40}>
      <VStack spacing={6} alignItems="start">
        <Heading as="h1" size="lg">
          Impressum
        </Heading>
        <Heading as="h2" size="md">
          SoWeSo GmbH
        </Heading>
        <Text>
          Musterstr. 1 <br />
          CH - 5555 Musterstadt <br />
          <br />
          Telefon +41 76 555 55 55 E-Mail: <br />
          <Link
            href="mailto:dev.test.mag@gmail.com"
            _hover={{ color: "rgba(82, 255, 226)" }}
          >
            dev.test.mag@gmail.com
          </Link>
        </Text>
        <Spacer />
        <Spacer />
        <Spacer />
        <Button
          alignSelf="center"
          onClick={() => router.back()}
          border="none"
          background="#200039"
          _hover={{
            background: "#200039",
            boxShadow: "0px 0px 50px rgba(254, 212, 237, 0.75)",
          }}
        >
          <NeonText fontSize="lg">Back</NeonText>
        </Button>
      </VStack>
    </Container>
  );
}

export default Imprint;
