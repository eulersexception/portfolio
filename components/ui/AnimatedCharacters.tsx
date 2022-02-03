import { motion } from "framer-motion";
import React, { CSSProperties } from "react";

// Word wrapper
const Wrapper = (props) => {
  return <span style={{ whiteSpace: "nowrap" }}>{props.children}</span>;
};

interface IAnimatedCharactersProps {
  style?: CSSProperties;
  text: string;
}

const AnimatedCharacters = ({ style, text }: IAnimatedCharactersProps) => {
  const item = React.useMemo(
    () => ({
      hidden: {
        y: "200%",
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 },
      },
      visible: {
        y: 0,
        transition: { ease: [0.01, 0.3, 0.515, 0.955], duration: 0.85 },
      },
    }),
    [],
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
    <>
      {words.map((word, index) => (
        // Wrap each word in the Wrapper component
        <Wrapper key={index}>
          {word.flat().map((element, index) => (
            <motion.div
              style={{
                // overflow: "hidden",
                display: "inline-block",
              }}
              key={index}
              variants={item}
            >
              <span style={style}>{element}</span>
            </motion.div>
          ))}
        </Wrapper>
      ))}
    </>
  );
};

export default AnimatedCharacters;
