import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import About from "../components/home/About";
import Blog from "../components/home/blog/Blog";
import ContactSection from "../components/home/contact/ContactSection";
import Footer from "../components/home/Footer";
import Headline from "../components/home/Headline";
import Projects from "../components/home/projects/Projects";
import Timeline from "../components/home/timeline/Timeline";

export default function Home() {
  const bgColor = useColorModeValue("#FFA6DB", "#200039");

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
        <ContactSection />
      </Flex>
      <Footer bgColor={bgColor} />
    </>
  );
}
