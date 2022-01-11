import { Box, Flex, VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React from "react";
import Glass from "../ui/Glass";

function SoundSamples() {
  const samplesVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 50,
      opacity: 1,
    },
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ margin: "100px 0px -20px 0px" }}
      >
        <motion.div
          variants={samplesVariants}
          transition={{
            type: "spring",
            damping: 7,
            opacity: {
              duration: 0,
            },
          }}
        >
          <Glass mt={-5} sx={{ background: "rgba(106, 148, 134, 0.2)" }}>
            <VStack align="stretch" spacing={3} rounded="lg" padding={3}>
              <iframe
                height="80"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                style={{ overflow: "hidden", borderRadius: "4px" }}
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943468237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>

              <iframe
                height="80"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                style={{ overflow: "hidden", borderRadius: "4px" }}
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153724185&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>

              <iframe
                height="80"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                style={{ overflow: "hidden", borderRadius: "4px" }}
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1155467443&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              ></iframe>
            </VStack>
          </Glass>
        </motion.div>
      </motion.div>
    </Flex>
  );
}

export default SoundSamples;
