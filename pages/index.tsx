import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { motion, useViewportScroll } from "framer-motion";
import About from "../components/home/About";
import BurgerMenu from "../components/home/BurgerMenu";

export default function Home() {
  return (
    <Box paddingTop={20} maxW="8xl" mx="auto">
      <BurgerMenu />
      <About />
    </Box>
  );
}
