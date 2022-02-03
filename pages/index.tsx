import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import About from "../components/home/About";
import Blog from "../components/home/blog/Blog";
import Confirmation from "../components/home/contact/Confirmation";
import ContactForm from "../components/home/contact/ContactForm";
import Headline from "../components/home/Headline";
import Projects from "../components/home/projects/Projects";
import Timeline from "../components/home/timeline/Timeline";
import NeonText from "../components/ui/NeonText";

export default function Home() {
  const bgColor = useColorModeValue("#FFA6DB", "#200039");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    setMessageSent(true);
  }, [setMessageSent]);

  return (
    <>
      <Flex
        justifyContent="center"
        minH="100vh"
        align="center"
        background={`radial-gradient(70% 30% at 50% 90%, #391f6e, #3d2061, #420670, #4b1b70, ${bgColor})`}
      >
        <Container maxW="container.xl" centerContent>
          <Headline />
        </Container>
      </Flex>
      <Container
        maxW="container.xl"
        centerContent
        justifyContent="center"
        minH="100vh"
      >
        <About />
      </Container>
      <Flex
        py={[8, null, 20]}
        background="linear-gradient(180deg, rgba(255, 168, 220, 0.33) 0%, rgba(255, 168, 220, 0) 54.64%)"
        justifyContent="center"
        minH="100vh"
      >
        <Container maxW="container.xl" centerContent>
          <Projects />
        </Container>
      </Flex>
      <Flex
        pt={[32, null, 20]}
        background="radial-gradient(54.58% 54.58% at 50% 0%, rgba(151, 255, 242, 0.33) 0%, rgba(151, 255, 242, 0) 100%)"
        justifyContent="center"
        minH="100vh"
      >
        <Container maxW="container.xl" centerContent>
          <Timeline />
        </Container>
      </Flex>
      <Flex
        pt={20}
        background="linear-gradient(190.36deg, rgba(255, 168, 220, 0.33) 0%, rgba(255, 168, 220, 0) 43.32%)"
        justifyContent="center"
        minH="100vh"
      >
        <Container maxW="container.xl" centerContent>
          <Blog />
        </Container>
      </Flex>
      <Flex pt={20} align="center" minH="100vh" id="contact">
        <Container maxW="container.xl" centerContent>
          {messageSent ? (
            <ContactForm setMessageSent={setMessageSent} />
          ) : (
            <Confirmation />
          )}
        </Container>
      </Flex>
      <Box
        as="footer"
        display="flex"
        flexDirection="column"
        bg="gray.900"
        h="lg"
        w="100%"
        p={[8, null, 16]}
        background={`radial-gradient(70% 30% at 50% 90%, #391f6e, #3d2061, #420670, #4b1b70, ${bgColor})`}
      >
        <VStack
          justify="space-between"
          align="center"
          flex="1"
          spacing={[8, null, 16]}
        >
          <HStack alignSelf="stretch" justify="space-between" flex="1" pt={96}>
            <NeonText fontSize="xl">Powered by Jenyus</NeonText>
            <NextLink href="/imprint" passHref>
              <Link
                href="imprint"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <NeonText fontSize="lg">Imprint</NeonText>
              </Link>
            </NextLink>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
