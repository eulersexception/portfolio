import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

export default function BlogCard() {
  return (
    <NextLink href="#">
      <Box
        as={Link}
        p={12}
        background="linear-gradient(315.91deg, rgba(254, 212, 237, 0.39) -18.63%, rgba(255, 255, 255, 0) 50.05%)"
        backgroundBlendMode="lighten"
        boxShadow="5px 5px 25px rgba(254, 212, 237, 0.75)"
        borderRadius="lg"
        _hover={{
          boxShadow: "0px 0px 40px rgba(254, 212, 237, 1)",
          textDecoration: "none",
        }}
      >
        <Heading
          fontSize={["sm", null, "md", "xl"]}
          letterSpacing="0.3em"
          textAlign="start"
          pb={3}
        >
          Blog Title
        </Heading>
        <Text pb={4} fontSize="xs" letterSpacing="0.3em">
          {new Date().toDateString()}
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          delectus quia aliquid nisi aspernatur dignissimos, voluptatibus quis
          molestiae reprehenderit. Amet consectetur eaque non neque, cum dolores
          iure consequuntur repellendus voluptas.
        </Text>
      </Box>
    </NextLink>
  );
}
