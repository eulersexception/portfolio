import {
  Box,
  Button,
  Fade,
  Flex,
  Heading,
  List,
  ListItem,
  SlideFade,
  transition,
} from "@chakra-ui/react";
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from "framer-motion";
import React, { useState } from "react";
import Glass from "../ui/Glass";

interface ITechStackProps {
  children?: React.ReactNode;
  title: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

function TechStackItem({
  children,
  title,
  isOpen,
  toggleOpen,
}: ITechStackProps) {
  return (
    <Flex align="center" justify="center">
      <motion.li
        layout
        onClick={toggleOpen}
        initial={{ borderRadius: 10 }}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <motion.div layout style={{ marginBottom: "0.5rem", display: "flex" }}>
          <Button flexGrow={1} textAlign="center" colorScheme="metal">
            {title}
          </Button>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div layout style={{ padding: "0.5rem" }}>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
    </Flex>
  );
}

function TechStack() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const techStackVariants: Variants = {
    offscreen: {
      scale: 0.5,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
      opacity: 1,
    },
  };

  return (
    <AnimateSharedLayout>
      <Glass
        mt={20}
        sx={{ background: "rgb(255, 99, 71, 0.8)", overflow: "hidden" }}
        as={motion.div}
        initial="offscreen"
        whileInView="onscreen"
        variants={techStackVariants}
        layout
        padding="8"
      >
        <motion.div layout style={{ marginBottom: "1rem" }}>
          <Heading as="h3" size="md">
            Skills
          </Heading>
        </motion.div>
        <motion.ul
          layout
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
          }}
        >
          <TechStackItem
            title="Programming"
            isOpen={openItem === "Programming"}
            toggleOpen={() =>
              setOpenItem((openItem) =>
                openItem === "Programming" ? null : "Programming",
              )
            }
          >
            <List>
              <ListItem>Java</ListItem>
              <ListItem>Golang</ListItem>
              <ListItem>Perl</ListItem>
              <ListItem>PHP</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Gosu</ListItem>
            </List>
          </TechStackItem>
          <TechStackItem
            title="Database"
            isOpen={openItem === "Database"}
            toggleOpen={() =>
              setOpenItem((openItem) =>
                openItem === "Database" ? null : "Database",
              )
            }
          >
            <List>
              <ListItem>SQL</ListItem>
              <ListItem>MySQL</ListItem>
              <ListItem>MariaDB</ListItem>
              <ListItem>PostgresQL</ListItem>
              <ListItem>NoSQL</ListItem>
            </List>
          </TechStackItem>
          <TechStackItem
            title="Web Development"
            isOpen={openItem === "Web Development"}
            toggleOpen={() =>
              setOpenItem((openItem) =>
                openItem === "Web Development" ? null : "Web Development",
              )
            }
          >
            <List>
              <ListItem>React</ListItem>
              <ListItem>Svelte</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>HTML</ListItem>
              <ListItem>CSS</ListItem>
              <ListItem>MaterialUI</ListItem>
              <ListItem>ChakraUI</ListItem>
              <ListItem>TailwindCSS</ListItem>
              <ListItem>Vite</ListItem>
              <ListItem>Node.js</ListItem>
              <ListItem>Yarn</ListItem>
            </List>
          </TechStackItem>
          <TechStackItem
            title="Miscellaneous"
            isOpen={openItem === "Miscellaneous"}
            toggleOpen={() =>
              setOpenItem((openItem) =>
                openItem === "Miscellaneous" ? null : "Miscellaneous",
              )
            }
          >
            <List>
              <ListItem>Linux</ListItem>
              <ListItem>Windows</ListItem>
              <ListItem>MacOS</ListItem>
              <ListItem>Docker</ListItem>
              <ListItem>Git</ListItem>
              <ListItem>GitHub</ListItem>
              <ListItem>GitLab</ListItem>
              <ListItem>JIRA</ListItem>
              <ListItem>BitBucket</ListItem>
              <ListItem>Confluence</ListItem>
              <ListItem>Jenkins</ListItem>
              <ListItem>Nexus</ListItem>
              <ListItem>SCRUM</ListItem>
              <ListItem>Kanban</ListItem>
            </List>
          </TechStackItem>
        </motion.ul>
      </Glass>
    </AnimateSharedLayout>
  );
}

export default TechStack;
