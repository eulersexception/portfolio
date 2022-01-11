import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, forwardRef, IconButton, IconButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface IScrollButtonProps extends IconButtonProps {
  children?: React.ReactNode;
}

const ScrollButton = forwardRef<IScrollButtonProps, "div">((props, ref) => (
  <IconButton
    aria-label="Scroll Down"
    icon={<ChevronDownIcon />}
    colorScheme={"mossgreen"}
    {...props}
    ref={ref}
  />
));

export default ScrollButton;
