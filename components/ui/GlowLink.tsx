import { forwardRef, Link, LinkProps } from "@chakra-ui/react";
import React from "react";

interface IGlowLinkProps extends LinkProps {}

const GlowLink = forwardRef<IGlowLinkProps, "a">(
  ({ children, ...props }, ref) => (
    <Link
      color="#97FFF2"
      _hover={{
        textDecoration: "none",
        textShadow:
          "0px 0px 15px rgba(82, 255, 226, 0.85), 0px 0px 25px rgba(150, 255, 237, 0.85)",
        svg: {
          filter: "drop-shadow(0px 0px 10px rgba(82, 255, 226, 0.9))",
        },
      }}
      {...props}
      ref={ref}
    >
      {children}
    </Link>
  ),
);

export default GlowLink;
