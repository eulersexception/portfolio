import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import NeonText from "../ui/NeonText";

function About() {
  return (
    <Flex
      alignSelf="stretch"
      flexDirection={["column", null, "row"]}
      gap={[8, null, null, 16]}
      p={[4, null, 8]}
    >
      <Flex flex="1 1 0" justify={["center", null, "end"]}>
        <NeonText>About</NeonText>
      </Flex>
      <Flex flex={["1 1 0", null, "2 1 0"]} justify={["center", null, "start"]}>
        <Box
          flex="1"
          border="3px solid #FFCEEB"
          boxShadow="0px 0px 20px 5px rgba(255, 206, 235, 0.75)"
          borderRadius="20px"
          maxW={[null, null, "lg"]}
          p={[4, null, 6, null, 8]}
        >
          <Text lineHeight={6}>
            My name is Bahadir and I'm a code enthusiast with a strong
            background in insurance, a faible for automation, a proven track
            record in agile development and a passion for challenges. Besides
            the technological skills, I was able to gain experience across
            different industries of any size, i.e. insurance, automotive,
            e-commerce, consulting, output management systems.
            <br />
            <br />
            And yes, I can also do the music stuff!
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default About;
