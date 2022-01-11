import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Glass from "../ui/Glass";

function About() {
  return (
    <Flex align="center" justify="center" h="100vh">
      <motion.div
        initial={{ x: -400 }}
        whileInView={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <Glass mt={20} sx={{ background: "rgba(255, 239, 213, 0.7)" }}>
          <Heading as="h3" size="md" mb={3}>
            About
          </Heading>
          My name is Bahadir and I'm a code enthusiast with a strong background
          in insurance, a faible for automation, a proven track record in agile
          development and a passion for challenges. Besides the technological
          skills, I was able to gain experience across different industries of
          any size, i.e. insurance, automotive, e-commerce, consulting, output
          management systems.
          <br />
          And yes, I can also do the music stuff!
        </Glass>
      </motion.div>
    </Flex>
  );
}

export default About;
