import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Glass from "../ui/Glass";

function Vision() {
  return (
    <Flex align="center" justify="center" h="100vh">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 2,
          },
        }}
      >
        <Glass mt={8}>
          <Heading as="h3" size="md" mb={3}>
            Vision
          </Heading>
          It's simple. Quality software. Happy clients. Below are some buzz
          words related to my services:
          <UnorderedList mt={3}>
            <ListItem>project management</ListItem>
            <ListItem>requirements engineering</ListItem>
            <ListItem>process analysis and automation</ListItem>
            <ListItem>
              conception and implementation of sustainable solutions
            </ListItem>
            <ListItem>refactoring and optimization</ListItem>
            <ListItem>continuous integration and deployment</ListItem>
            <ListItem>software testing and test automation</ListItem>
            <ListItem>sound design</ListItem>
            <ListItem>soundtrack production</ListItem>
          </UnorderedList>
        </Glass>
      </motion.div>
    </Flex>
  );
}

export default Vision;
