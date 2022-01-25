import { Grid, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { Project } from "../../../types/Project";
import ContactButton from "../../ui/ContactButton";
import ProjectCard from "./ProjectCard";

const project: Project = {
  name: "My Website",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus sapien massa, ut ornare massa fermentum id. Quisque convallis rhoncus lorem at imperdiet. Phasellus feugiat.",
  links: [
    {
      text: "Repo",
      href: "https://github.com/eulersexception/Portfolio",
    },
  ],
};

function Projects() {
  return (
    <VStack spacing={[8, null, 12, 16]}>
      <VStack spacing={4}>
        <Heading
          fontSize={["lg", null, "2xl", "4xl"]}
          letterSpacing="0.3em"
          textAlign="center"
        >
          Projects
        </Heading>
        <Link
          color="#97FFF2"
          _hover={{
            textDecoration: "none",
            textShadow:
              "0px 0px 15px rgba(82, 255, 226, 0.85), 0px 0px 25px rgba(150, 255, 237, 0.85)",
            svg: {
              filter: "drop-shadow(0px 0px 10px rgba(82, 255, 226, 0.9))",
            },
          }}
          href="https://github.com/eulersexception"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <HStack spacing={2}>
            <Text>GitHub</Text>
            <TiArrowRightOutline />
          </HStack>
        </Link>
      </VStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
        gap={[6, 8, 10, 12, 14]}
      >
        <ProjectCard project={project}></ProjectCard>
        <ProjectCard project={project}></ProjectCard>
        <ProjectCard project={project}></ProjectCard>
        <ProjectCard project={project}></ProjectCard>
      </Grid>
      <ContactButton text="Realize Project" />
    </VStack>
  );
}

export default Projects;
