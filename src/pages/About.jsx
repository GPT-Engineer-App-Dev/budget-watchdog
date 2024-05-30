import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">About Us</Heading>
        <Text>
          Financial Times is a leading global news organization, recognized internationally for its authority, integrity, and accuracy. We provide in-depth analysis and comprehensive coverage of the latest business, economic, and political news.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;