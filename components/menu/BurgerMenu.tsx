import { motion, useCycle } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
import { useDimensions } from "../../lib/use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: {
    clipPath: "inset(0 0 0 0)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: ({ height, width } = { height: 1000, width: 350 }) => {
    console.log(height, width);

    return {
      clipPath: `inset(10px ${width - 40 - 10}px ${
        height - 40 - 10
      }px 10px round 10px)`,
      //clipPath: "polygon(20px 20px, 40px 20px, 40px 40px, 20px 40px)",
      //clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };
  },
};

export const BurgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  //const dimensions = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      //custom={dimensions}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
