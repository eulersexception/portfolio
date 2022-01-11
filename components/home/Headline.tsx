import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCharacters from "../ui/AnimatedCharacters";
import ScrollButton from "../ui/ScrollButton";

export default function Headline() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <VStack>
        <Box padding={200}>
          <motion.div
            className="Headline"
            initial="hidden"
            // animate="visible"
            animate={"visible"}
            variants={container}
          >
            <Heading as="h1" size="2xl" color="papayawhip">
              {[{ text: "SoWeSo", color: "#e2ddc7" }].map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
              })}
            </Heading>
            <Heading as="h2" size="lg" mt={5}>
              {[
                {
                  text: "Software Engineering, Web Development, Sound Design",
                  color: "#6a9486",
                },
              ].map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
              })}
            </Heading>
          </motion.div>
        </Box>
        <ScrollButton />
      </VStack>
    </Flex>
  );
}
