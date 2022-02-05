import { Box, SlideFade, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineAlert } from "react-icons/ai";

interface IErrorMessageProps {
  error: string;
}

function ErrorMessage({ error }: IErrorMessageProps) {
  return (
    <Box>
      <SlideFade in={true}>
        <VStack spacing={[6, null, 8, 10, 12]}>
          <AiOutlineAlert
            style={{
              height: "4em",
              width: "4em",
              filter: "drop-shadow(0px 0px 10px rgba(254, 212, 237, 1)",
            }}
          />
          <Text textAlign="center">{error}</Text>
        </VStack>
      </SlideFade>
    </Box>
  );
}

export default ErrorMessage;
