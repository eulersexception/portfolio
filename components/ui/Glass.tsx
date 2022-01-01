import { Box, BoxProps, forwardRef } from "@chakra-ui/react";
import React from "react";

interface IGlassProps extends BoxProps {
  children?: React.ReactNode;
}

const Glass = forwardRef<IGlassProps, "div">(
  ({ children, sx, ...props }, ref) => (
    <Box
      sx={{
        background: "rgba(240, 240, 240, 0.2)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(240, 240, 240, 0.3)",
        ...sx,
      }}
      padding={5}
      rounded="lg"
      boxShadow="lg"
      {...props}
      ref={ref}
    >
      {children}
    </Box>
  ),
);

export default Glass;
