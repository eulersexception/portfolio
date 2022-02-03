import { Heading, HeadingProps, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCharacters from "../ui/AnimatedCharacters";
import ContactButton from "../ui/ContactButton";

const partialMotionProps = ["transition"];

const MotionHeading = motion<HeadingProps>(Heading);

export default function Headline() {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <VStack spacing={6}>
      <motion.div initial="hidden" animate="visible" variants={container}>
        <MotionHeading
          as="h1"
          fontFamily="Pacifico"
          color="#67FFEC"
          letterSpacing="0.3em"
          size="2xl"
          overflow="hidden"
          padding={6}
          margin={-6}
          marginRight={[-10, -12, -14, -16]}
          animate={{
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
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 5,
            duration: 0.3,
            ease: "linear",
            times: [0.15, 0.2, 0.35, 0.4, 0.55, 0.6, 0.75, 0.8, 0.95, 1],
          }}
        >
          <AnimatedCharacters text="SoWeSo" />
        </MotionHeading>
      </motion.div>
      <ContactButton text="Get To Know Me" />
    </VStack>
  );
}
