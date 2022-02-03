import { forwardRef, Heading, HeadingProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface NeonTextProps extends HeadingProps {
  children?: React.ReactNode;
}

const NeonText = forwardRef<NeonTextProps, "p">(
  ({ children, ...props }, ref) => (
    <Heading
      as={motion.p}
      fontFamily="Pacifico"
      color="#67FFEC"
      letterSpacing="0.3em"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: "all" }}
      variants={{
        hidden: { textShadow: "0px 0px 30px #0BFF4F" },
        visible: {
          textShadow: [
            "0px 0px 10px #0BFF4F",
            "none",
            "0px 0px 40px #0BFF4F",
            "none",
            "0px 0px 20px #0BFF4F",
            "none",
            "0px 0px 40px #0BFF4F",
            "none",
            "0px 0px 30px #0BFF4F",
          ],
          transition: {
            delay: 1,
            duration: 0.6,
            ease: "linear",
            times: [0.15, 0.2, 0.35, 0.4, 0.55, 0.6, 0.75, 0.8, 0.95, 1],
          },
        },
      }}
      {...props}
      ref={ref}
    >
      {children}
    </Heading>
  ),
);

export default NeonText;
