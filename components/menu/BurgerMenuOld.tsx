import { TiThMenuOutline } from "react-icons/ti";

import React from "react";
import { Box, Icon } from "@chakra-ui/react";

function BurgerMenu() {
  return (
    <Box
      bg="#70FFE5"
      color="white"
      rounded="lg"
      border="rgba(160, 255, 238, 0.75)"
      borderWidth="5px"
      boxShadow="0px 0px 40px rgba(132, 255, 112, 0.75)"
      padding={2}
    >
      <TiThMenuOutline size="2.5rem" />
    </Box>
  );
}

export default BurgerMenu;
