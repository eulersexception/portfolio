import { Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { Project } from "../../../types/Project";
import ContactButton from "../../ui/ContactButton";
import GlowLink from "../../ui/GlowLink";
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
    <VStack spacing={[8, 12, 16, 20]}>
      <VStack spacing={4}>
        <Heading
          fontSize={["lg", null, "2xl", "4xl"]}
          letterSpacing="0.3em"
          textAlign="center"
        >
          Projects
        </Heading>
        <GlowLink
          href="https://github.com/eulersexception"
          referrerPolicy="no-referrer"
          target="_blank"
        >
          <HStack>
            <Text>GitHub</Text>
            <TiArrowRightOutline />
          </HStack>
        </GlowLink>
      </VStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", null, "repeat(2, 1fr)"]}
        gap={[2, null, 10, 12, 14]}
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
