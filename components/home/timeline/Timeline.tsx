import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

function Timeline() {
  const [leftOffset, setLeftOffset] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [bottomOffset, setBottomOffset] = useState(0);
  const firstCircle = useRef<HTMLDivElement>(null);
  const lastCircle = useRef<HTMLDivElement>(null);
  const timelineContainer = useRef<HTMLDivElement>(null);
  const bgColor = useColorModeValue("#FFA6DB", "#200039");

  useLayoutEffect(() => {
    if (
      firstCircle.current &&
      lastCircle.current &&
      timelineContainer.current
    ) {
      const setLayoutState = () => {
        setLeftOffset(firstCircle.current.clientWidth / 2);
        setTopOffset(
          firstCircle.current.offsetTop + firstCircle.current.clientHeight,
        );
        setBottomOffset(
          timelineContainer.current.clientHeight - lastCircle.current.offsetTop,
        );
      };
      window.addEventListener("resize", setLayoutState, true);
      setLayoutState();

      return () => {
        window.removeEventListener("resize", setLayoutState);
      };
    }
  }, [
    firstCircle,
    lastCircle,
    timelineContainer,
    setLeftOffset,
    setTopOffset,
    setBottomOffset,
  ]);

  return (
    <Flex
      alignSelf={["center", null, "stretch"]}
      flexDirection={["column", null, "row"]}
      gap={[8, null, null, 16]}
      py={[8, null, 12]}
      px={[8, null, 10]}
    >
      <Box flex="1">
        <Heading
          fontSize={["lg", null, "2xl", "4xl"]}
          letterSpacing="0.3em"
          pt={[null, null, 24]}
          pr={[null, null, 24, 48]}
        >
          Timeline
        </Heading>
      </Box>
      <VStack spacing={[8, null, 12, 24]} align="start" flex="1">
        <Heading
          fontSize={["md", null, "lg", "xl"]}
          letterSpacing={["0.1em", null, "0.3em"]}
        >
          Work Experience
        </Heading>
        <Box
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          position="relative"
        >
          <VStack
            as={motion.div}
            ref={timelineContainer}
            spacing={[8, null, 16]}
          >
            {new Array(5).fill(null).map((elm, i) => (
              <HStack key={i} zIndex={10} spacing={[8, null, null, 16, 24]}>
                <Box>
                  <Box
                    as={motion.div}
                    variants={{
                      hidden: {
                        boxShadow: "0px 0px 20px 5px rgba(255, 206, 235, 0)",
                      },
                      visible: {
                        boxShadow: "0px 0px 20px 5px rgba(255, 206, 235, 0.75)",
                        transition: { delay: i * 0.5, duration: 0.5 },
                      },
                    }}
                    bg={bgColor}
                    ref={i === 0 ? firstCircle : i === 4 ? lastCircle : null}
                    h={[4, 6, 8]}
                    w={[4, 6, 8]}
                    rounded="full"
                    border="3px solid #FFCEEB"
                  />
                </Box>
                <Box
                  as={motion.div}
                  variants={{
                    hidden: {
                      y: 40,
                      opacity: 0,
                      boxShadow: "0px 0px 5px 5px rgba(255, 222, 241, 0)",
                    },
                    visible: {
                      y: 0,
                      opacity: 1,
                      boxShadow: "0px 0px 5px 5px rgba(255, 222, 241, 0.75)",
                      transition: {
                        delay: i * 0.5,
                        y: { duration: 0.5 },
                        opacity: { duration: 2 },
                      },
                    },
                  }}
                  border="1px solid #FFCEEB"
                  rounded="md"
                  p={[4, 6, 8]}
                >
                  <VStack align="stretch" spacing={2}>
                    <Heading fontSize="lg">October 2018</Heading>
                    <Text fontSize={["xs", null, "sm"]} lineHeight={5}>
                      Development of Plugins and Webservices for Guidewire
                      PolicyCenter
                    </Text>
                  </VStack>
                </Box>
              </HStack>
            ))}
          </VStack>
          <Box
            as={motion.div}
            variants={{
              hidden: {
                border: "1px solid rgba(255, 206, 235, 0.5)",
                boxShadow: "0px 0px 20px 5px rgba(255, 206, 235, 0)",
              },
              visible: {
                border: "1px solid rgba(255, 206, 235, 1)",
                boxShadow: "0px 0px 20px 5px rgba(255, 206, 235, 0.75)",
                transition: {
                  duration: 0.5,
                  delay: (5 - 1) * 0.5,
                },
              },
            }}
            position="absolute"
            top={`${topOffset}px`}
            zIndex={0}
            left={`${leftOffset + 2}px`}
            bottom={`${bottomOffset}px`}
            mt={0}
          />
        </Box>
      </VStack>
    </Flex>
  );
}

export default Timeline;
