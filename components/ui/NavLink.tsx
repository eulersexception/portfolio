import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface INavLinkProps {
  children?: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: INavLinkProps) {
  return (
    <NextLink href={href}>
      <Link
        fontSize="2xl"
        fontWeight="semibold"
        letterSpacing="-1%"
        _hover={{ color: "#E658B3" }}
      >
        {children}
      </Link>
    </NextLink>
  );
}

export default NavLink;
