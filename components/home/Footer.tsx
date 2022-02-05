import { Box, HStack, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import NeonText from "../ui/NeonText";

interface IFooterProps {
  bgColor: string;
}

function Footer({ bgColor }: IFooterProps) {
  return (
    <Box
      as="footer"
      display="flex"
      flexDirection="column"
      bg="gray.900"
      h="lg"
      w="100%"
      p={[8, null, 16]}
      background={`radial-gradient(70% 30% at 50% 90%, #391f6e, #3d2061, #420670, #4b1b70, ${bgColor})`}
    >
      <VStack
        justify="space-between"
        align="center"
        flex="1"
        spacing={[8, null, 16]}
      >
        <HStack alignSelf="stretch" justify="space-between" flex="1" pt={96}>
          <NeonText fontSize="xl">Powered by Jenyus</NeonText>
          <NextLink href="/imprint" passHref>
            <Link
              href="imprint"
              _hover={{
                textDecoration: "none",
              }}
            >
              <NeonText fontSize="lg">Imprint</NeonText>
            </Link>
          </NextLink>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Footer;
