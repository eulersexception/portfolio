import { Container, Flex } from "@chakra-ui/react";
import About from "../components/home/About";
import Headline from "../components/home/Headline";
import Projects from "../components/home/projects/Projects";

export default function Home() {
  return (
    <>
      <Container
        maxW="container.xl"
        centerContent
        justifyContent="center"
        minH="100vh"
      >
        <Headline />
      </Container>
      <Container
        maxW="container.xl"
        centerContent
        justifyContent="center"
        minH="100vh"
      >
        <About />
      </Container>
      <Flex
        pt={20}
        background="linear-gradient(180deg, rgba(255, 168, 220, 0.33) 0%, rgba(255, 168, 220, 0) 54.64%)"
        justifyContent="center"
        minH="100vh"
      >
        <Container maxW="container.xl" centerContent>
          <Projects />
        </Container>
      </Flex>
    </>
  );
}
