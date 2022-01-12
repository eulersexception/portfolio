import { TiThMenuOutline } from "react-icons/ti";

import React from "react";
import { Box } from "@chakra-ui/react";

function BurgerMenu() {
  return (
    <Box
      sx={{
        color: "#70FFE5",
        textShadow:
          "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #70FFE5, 0 0 42px #70FFE5, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa",
      }}
    >
      <TiThMenuOutline size={60} />
    </Box>
  );
}

export default BurgerMenu;
