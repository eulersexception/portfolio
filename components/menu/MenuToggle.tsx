import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth={3.5}
    stroke="white"
    strokeLinecap="round"
    color="white"
    rounded="md"
    bg="#70FFE5"
    border="rgba(160, 255, 238, 0.75)"
    borderwidth="5px"
    boxshadow="0px 0px 40px rgba(132, 255, 112, 0.75)"
    padding={2}
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <Button
    onClick={toggle}
    outline="none"
    border="none"
    cursor="pointer"
    position="absolute"
    top="37px"
    left="36px"
    width="50px"
    height="50px"
    borderRadius="50%"
    bg="transparent"
    _hover={{ outline: "none" }}
    _focus={{ outline: "none" }}
    padding={0}
  >
    <svg width="100%" height="60%" viewBox="0 0 23 23">
      <Path
        color="#70FFE5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </Button>
);
