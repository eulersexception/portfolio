import { Box, Flex } from "@chakra-ui/react";
import Headline from "../components/home/Headline";
import { BurgerMenu } from "../components/menu/BurgerMenu";

export default function Home() {
  return (
    <Flex maxW="8xl" mx="auto">
      <Box marginTop={20}>
        <BurgerMenu />
      </Box>
      <Box>
        <Headline />
      </Box>
    </Flex>
  );
}
