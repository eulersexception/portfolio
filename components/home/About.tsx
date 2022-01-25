import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import NeonText from "../ui/NeonText";

function About() {
  return (
    <Flex alignSelf="stretch">
      <Flex flex="2 1 auto" px={8} justify="end">
        <NeonText>About</NeonText>
      </Flex>
      <Flex flex="6 1 auto">
        <Box
          flex="1"
          border="3px solid #FFCEEB"
          boxSizing="border-box"
          boxShadow="0px 0px 20px 5px rgba(255, 206, 235, 0.75)"
          borderRadius="20px"
          height={32}
          maxW={96}
        ></Box>
      </Flex>
    </Flex>
  );
}

export default About;
