import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import AnimatedCharacters from "../ui/AnimatedCharacters";
import ContactButton from "../ui/ContactButton";
import NeonText from "../ui/NeonText";

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
        <NeonText
          orientation="vertical"
          as="h1"
          size="2xl"
          overflow="hidden"
          padding={6}
          margin={-6}
          marginRight={[-10, -12, -14, -16]}
        >
          <AnimatedCharacters text="SoWeSo" />
        </NeonText>
      </motion.div>
      <ContactButton text="Get To Know Me" />
    </VStack>
  );
}
