import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCharacters from "../ui/AnimatedCharacters";

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
            initial="hidden"
            // animate="visible"
            animate={"visible"}
            variants={container}
          >
            <Heading
              padding={12}
              orientation="vertical"
              as="h1"
              size="2xl"
              fontFamily="Pacifico"
              letterSpacing="0.3em"
            >
              {[{ text: "SoWeSo", color: "#00FFD1" }].map((item, index) => {
                return <AnimatedCharacters {...item} key={index} />;
              })}
            </Heading>
          </motion.div>
        </Box>
      </VStack>
    </Flex>
  );
}
