import { Box, Heading } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import Glass from "../ui/Glass";

function TechStack() {
  const techStackVariants: Variants = {
    offscreen: {
      x: -400,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      rotate: 720,
      transition: {
        ease: "easeOut",
        duration: 1.2,
      },
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={techStackVariants}
    >
      <Glass mt={20} sx={{ background: "rgb(255, 99, 71, 0.8)" }}>
        <Box>
          <Heading as="h3" size="md" mb={3}>
            Techstack
          </Heading>
          Java, Golang, Perl, PHP, Python, JavaScript, TypeScript, Gosu, React,
          Svelte, SQL, MySQL, MariaDB, PostgresQL, Linux, Docker
          <br />
          <br />
          There are some more, but...
        </Box>
      </Glass>
    </motion.div>
  );
}

export default TechStack;
