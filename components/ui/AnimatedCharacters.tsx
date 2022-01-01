import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

// Word wrapper
const Wrapper = (props) => {
  return <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>;
};

interface IAnimatedCharactersProps {
  color: string;
  text: string;
}

const AnimatedCharacters = ({ color, text }: IAnimatedCharactersProps) => {
  const item = React.useMemo(
    () => ({
      hidden: {
        color,
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
      },
      visible: {
        color,
        y: 0,
        transition: { ease: [0.01, 0.3, 0.515, 0.955], duration: 0.85 },
      },
    }),
    [color],
  );

  // Create storage array
  const words = React.useMemo(
    () =>
      text
        .split(" ")
        .map((word) => word.split(""))
        .map((word) => [...word, "\u00A0"]),
    [text],
  );

  return (
    <Box>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {word.flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{
                      display: "inline-block",
                    }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Box>
  );
};

export default AnimatedCharacters;
