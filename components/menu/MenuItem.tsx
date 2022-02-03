import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#4400FF", "#7700FF", "#9C1AFF", "#D309E1", "#FF008C" ];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Box 
        width="40px"
        height="40px"
        borderRadius="50%"
        flex="40px 0"
        marginRight="20px"
        style={style} 
      />
      <Box 
        borderRadius="5px"
        width="200px"
        height="20px"
        flex="1"
        style={style} 
      />
    </motion.li>
  );
};
