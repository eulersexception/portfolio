import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import GlowLink from "../../ui/GlowLink";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <VStack p={8} spacing={16}>
      <Heading
        fontSize={["2xl", null, "4xl"]}
        letterSpacing="0.3em"
        textAlign="start"
        p={8}
      >
        Blog
      </Heading>
      <Flex flexDirection={["column", null, "row"]} gap={20}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Flex>

      <Link href="/blog" passHref>
        <GlowLink alignSelf="end">
          <HStack>
            <Text>View More</Text>
            <TiArrowRightOutline />
          </HStack>
        </GlowLink>
      </Link>
    </VStack>
  );
}

export default Blog;
