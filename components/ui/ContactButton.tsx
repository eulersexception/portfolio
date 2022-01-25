import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface IContactButtonProps {
  text: string;
}

const ContactButton = ({ text }: IContactButtonProps) => {
  return (
    <NextLink href="/contact-me">
      <Link
        bg="pink.300"
        border="2px solid rgba(255, 206, 235, 0.75)"
        borderRadius="md"
        py={2}
        px={4}
        textTransform="uppercase"
        fontSize={["sm", null, "md", "lg"]}
        _hover={{ bg: "pink.400", boxShadow: "0 0 10px white" }}
        fontWeight="bold"
      >
        {text}
      </Link>
    </NextLink>
  );
};

export default ContactButton;
