import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import Glass from "../ui/Glass";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    name: yup.string().max(255),
    message: yup.string().max(2048).required("Please enter a message"),
  })
  .required();

type SchemaType = yup.InferType<typeof schema>;

export default function ContactForm() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  const contactVariants: Variants = {
    offscreen: {
      y: 600,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        mass: 0.6,
      },
      opacity: 1,
    },
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={contactVariants}
      >
        <Glass mt={8} sx={{ background: "rgba(255, 239, 213, 0.7)" }}>
          <Box
            align="center"
            justify="center"
            mb={2}
            mt={2}
            rounded="lg"
            w="800px"
          >
            <Box w="80%">
              <FormControl isInvalid={isError} mt={3} mb={3}>
                <FormLabel htmlFor="email">email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                  bgColor="white"
                  focusBorderColor="#6A9486"
                  placeholder="@"
                />
                {!isError ? (
                  <FormHelperText color="gray">
                    Enter the email you'd like to receive an answer on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage color="tomato">
                    email is required.
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl mb={3}>
                <FormLabel>name</FormLabel>
                <Input bgColor="white" focusBorderColor="#6A9486"></Input>
              </FormControl>
              <FormControl h="50%">
                <FormLabel>message</FormLabel>
                <Textarea
                  placeholder="Here is a sample placeholder"
                  minHeight={160}
                  bgColor="white"
                  rounded="0.375em"
                  focusBorderColor="#6A9486"
                  mb={3}
                  resize="none"
                />
              </FormControl>
              <FormControl>
                <Button mt={4} colorScheme="mossgreen" type="submit">
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Glass>
      </motion.div>
    </Flex>
  );
}
