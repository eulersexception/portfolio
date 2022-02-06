import { Box, useBreakpointValue } from "@chakra-ui/react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useEffect } from "react";
import useDimensions from "react-use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: ({ height = 50, isMobile = false }) => ({
    clipPath: `circle(${height * 2 + 50}px at ${
      isMobile ? "40px 40px" : "60px 60px"
    })`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: ({ isMobile = false }) => ({
    clipPath: `circle(${isMobile ? "23px" : "30px"} at ${
      isMobile ? "40px 40px" : "60px 60px"
    })`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

export const BurgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [containerRef, { height }] = useDimensions();
  const isMobile = useBreakpointValue([true, null, false]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "inherit";
    }
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0,0,0,0.5)"
            zIndex={40}
          ></Box>
        )}
      </AnimatePresence>
      <Box
        as={motion.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={{ height, isMobile }}
        variants={sidebar}
        ref={containerRef}
        zIndex={50}
        position="fixed"
        top={0}
        left={0}
        bottom={0}
        width={["100%", null, "270px"]}
        height="100vh"
        paddingTop={32}
        paddingLeft={[0, null, 12]}
        bg="linear-gradient(0deg, rgba(255,74,181,1) 0%, #A2C0E0 30%, #8CDCEA 75%, rgba(112,255,246,1) 95%)"
      >
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </Box>
    </>
  );
};
