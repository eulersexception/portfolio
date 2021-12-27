import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box padding={20}>
      <Heading as="h1" size="2xl" color="papayawhip">
        SoWeSo
      </Heading>
      <Heading as="h2" size="lg" mt={5}>
        Software Engineering, Web Development, Sound Design
      </Heading>
      <Grid
        mt={7}
        h="600px"
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          bg="tomato"
          color="papayawhip"
          padding={5}
          rounded="lg"
          boxShadow={"lg"}
        >
          <Heading as="h3" size="md" mb={3}>
            Vision
          </Heading>
          It's simple. Quality software. Happy clients. Below are some buzz
          words related to my services:
          <UnorderedList mt={3}>
            <ListItem>project management</ListItem>
            <ListItem>requirements engineering</ListItem>
            <ListItem>process analysis and automation</ListItem>
            <ListItem>
              conception and implementation of sustainable solutions
            </ListItem>
            <ListItem>refactoring and optimization</ListItem>
            <ListItem>continuous integration and deployment</ListItem>
            <ListItem>software testing and test automation</ListItem>
            <ListItem>sound design</ListItem>
            <ListItem>soundtrack production</ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem
          colSpan={2}
          bg="papayawhip"
          rounded="lg"
          padding={5}
          color="#6A9486"
        >
          <Heading as="h3" size="md" mb={3}>
            About
          </Heading>
          My name is Bahadir and I'm a code enthusiast with a strong background
          in insurance, a faible for automation, a proven track record in agile
          development and a passion for challenges. Besides the technological
          skills, I was able to gain experience across different industries of
          any size, i.e. insurance, automotive, e-commerce, consulting, output
          management systems. <br />
          And yes, I can also do the music stuff!
        </GridItem>
        <GridItem colSpan={2} bg="#6A9486" rounded="lg">
          <Flex align="center" justify="center" mt={3} bg="#6A9486">
            <iframe
              width="95%"
              height="80"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/943468237&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Flex>
          <Flex align="center" justify="center" mt={3} bg="#6A9486">
            <iframe
              width="95%"
              height="80"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1153724185&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Flex>
          <Flex align="center" justify="center" mt={3} bg="#6A9486">
            <iframe
              width="95%"
              height="80"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1155467443&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </Flex>
        </GridItem>
        <GridItem colSpan={1} bg="tomato" rounded="lg" padding={5}>
          <Heading as="h3" size="md" mb={3}>
            Techstack
          </Heading>
          Java, Golang, Perl, PHP, Python, JavaScript, TypeScript, Gosu, React,
          Svelte, SQL, MySQL, MariaDB, PostgresQL, Linux, Docker
          <br />
          <br />
          There are some more, but...
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" rounded="lg" />
        <GridItem colSpan={1} bg="tomato" rounded="lg" />
      </Grid>
    </Box>
  );
}
