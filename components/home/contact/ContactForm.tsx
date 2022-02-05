import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import {
  schema as contactFormSchema,
  SchemaType as ContactFormSchemaType,
} from "../../../lib/forms/contact";
import NeonText from "../../ui/NeonText";

interface IContactFormProps {
  setMessageSent: (messageSent: boolean) => void;
  setError: (error: string) => void;
}

function ContactForm({
  setMessageSent,
  setError: setErrorMsg,
}: IContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<ContactFormSchemaType>({
    mode: "all",
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (form: ContactFormSchemaType) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setMessageSent(true);
    } else if (data.errors.sendMail) {
      setErrorMsg(data.errors.sendMail);
    } else {
      Object.entries(data.errors).forEach(([key, error]) => {
        setError(key as keyof ContactFormSchemaType, error);
      });
    }
  };

  return (
    <Flex
      alignSelf="stretch"
      flexDirection={["column", null, "row"]}
      gap={[8, null, null, 16]}
      p={[4, null, 8]}
    >
      <Flex flex="1" justify={["center", null, "end"]}>
        <NeonText>Contact Me</NeonText>
      </Flex>
      <Flex flex="1" justify={["center", null, "stretch"]}>
        <VStack
          as="form"
          flex="1"
          justify="stretch"
          maxW={[null, null, "container.md"]}
          spacing={4}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl isInvalid={!!errors?.name}>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Please provide your name",
                },
              })}
              outline="1px solid #FBB6CE"
              outlineOffset="px"
              _focus={{
                outline: "1px solid white",
                border: "2px solid rgba(191, 255, 244)",
                boxShadow:
                  "0px 0px 10px rgba(191, 255, 244, 0.85), 0px 0px 15px rgba(207, 255, 247, 0.85)",
              }}
            />
            {errors?.name ? (
              <FormErrorMessage>{errors.name.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your Name</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.email}>
            <Input
              id="email"
              placeholder="Email"
              type="text"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid Email",
                },
              })}
              outline="1px solid #FBB6CE"
              outlineOffset="px"
              _focus={{
                outline: "1px solid white",
                border: "2px solid rgba(191, 255, 244)",
                boxShadow:
                  "0px 0px 10px rgba(191, 255, 244, 0.85), 0px 0px 15px rgba(207, 255, 247, 0.85)",
              }}
            />
            {errors?.email ? (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            ) : (
              <FormHelperText>Please enter your Email</FormHelperText>
            )}
          </FormControl>
          <FormControl isInvalid={!!errors?.message}>
            <Textarea
              id="message"
              placeholder="Your Message..."
              type="text"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 40,
                  message: "Can you provide more details?",
                },
              })}
              outline="1px solid #FBB6CE"
              outlineOffset="px"
              _focus={{
                outline: "1px solid white",
                border: "2px solid rgba(191, 255, 244)",
                boxShadow:
                  "0px 0px 10px rgba(191, 255, 244, 0.85), 0px 0px 15px rgba(207, 255, 247, 0.85)",
              }}
              rows={6}
            />
            {errors?.message ? (
              <FormErrorMessage>{errors.message.message}</FormErrorMessage>
            ) : (
              <FormHelperText>
                What would you like to talk about?
              </FormHelperText>
            )}
          </FormControl>
          <Input
            outline="1px solid #FBB6CE"
            outlineOffset="px"
            isDisabled={!isDirty || !isValid}
            _focus={{
              outline: "1px solid white",
              border: "2px solid rgba(191, 255, 244)",
              boxShadow:
                "0px 0px 10px rgba(191, 255, 244, 0.85), 0px 0px 15px rgba(207, 255, 247, 0.85)",
            }}
            sx={{
              ...(isDirty && isValid
                ? {
                    outline: "1px solid white",
                    border: "2px solid rgba(191, 255, 244)",
                    bg: "#6fedd7",
                    boxShadow:
                      "0px 0px 5px rgba(82, 255, 226, 0.85), 0px 0px 5px rgba(150, 255, 237, 0.85)",
                    color: "purple.900",
                    _hover: { bg: "#4bdecc" },
                  }
                : {}),
            }}
            fontWeight="bold"
            type="submit"
            alignSelf={["center", null, "end"]}
            w="auto"
            value="Submit"
          />
        </VStack>
      </Flex>
    </Flex>
  );
}

export default ContactForm;
