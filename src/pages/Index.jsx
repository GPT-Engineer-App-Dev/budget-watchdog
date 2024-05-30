import { Container, Heading, Text, VStack, Box, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">Welcome to Financial Times</Heading>
        <Text>
          Stay updated with the latest news and insights from around the world. Our dedicated team of journalists brings you the most accurate and timely information.
        </Text>
        <Box>
          <Image src="/images/financial-times.jpg" alt="Financial Times" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;