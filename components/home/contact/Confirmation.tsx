import { Box, SlideFade } from "@chakra-ui/react";
import React from "react";
import NeonText from "../../ui/NeonText";

function Confirmation() {
  return (
    <Box>
      <SlideFade in={true}>
        <NeonText>Your message has been sent!</NeonText>
      </SlideFade>
    </Box>
  );
}

export default Confirmation;
