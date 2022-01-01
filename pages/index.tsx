import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";
import About from "../components/home/About";
import ContactForm from "../components/home/ContactForm";
import Headline from "../components/home/Headline";
import SoundSamples from "../components/home/SoundSamples";
import TechStack from "../components/home/TechStack";
import Vision from "../components/home/Vision";

export default function Home() {
  return (
    <Box padding={20} maxW="6xl" mx="auto">
      <Headline />
      <Vision />
      <About />
      <SoundSamples />
      <TechStack />
      <ContactForm />
    </Box>
  );
}
