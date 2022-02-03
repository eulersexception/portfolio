import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Project } from "../../../types/Project";

interface IProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectCardProps) => (
  <Box p={6}>
    <VStack spacing={4} align="start">
      <HStack spacing={2}>
        <Heading
          fontSize={["sm", null, "lg", "xl"]}
          letterSpacing="0.3em"
          pr={3}
        >
          {project.name}
        </Heading>
        {project.links.map((link) => (
          <Link
            key={link.href}
            border="2px solid rgba(191, 255, 244)"
            borderRadius="md"
            py={1}
            px={2}
            textTransform="uppercase"
            fontSize="xs"
            _hover={{
              boxShadow:
                "0px 0px 10px rgba(191, 255, 244, 0.85), 0px 0px 15px rgba(207, 255, 247, 0.85)",
            }}
            fontWeight="bold"
            href={link.href}
            textShadow="0px 0px 10px rgba(191, 255, 244, 0.85), 0px 0px 20px rgba(207, 255, 247, 0.85)"
            boxShadow="0px 0px 5px rgba(82, 255, 226, 0.85), 0px 0px 5px rgba(150, 255, 237, 0.85)"
          >
            {link.text}
          </Link>
        ))}
      </HStack>
      <Text fontSize={["smaller", null, "small", "sm"]}>
        {project.description}
      </Text>
    </VStack>
  </Box>
);

export default ProjectCard;
