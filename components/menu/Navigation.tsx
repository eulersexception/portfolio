import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import NavLink from "../ui/NavLink";

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

export const Navigation = () => (
  <VStack
    as={motion.ul}
    spacing={4}
    alignItems={["center", null, "start"]}
    variants={variants}
  >
    <NavLink href="/">Home</NavLink>
    <NavLink href="/">About</NavLink>
    <NavLink href="/">Service</NavLink>
    <NavLink href="/">Stack</NavLink>
    <NavLink href="/">Blog</NavLink>
  </VStack>
);
