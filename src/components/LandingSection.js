import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" name="Pete" src=" https://i.pravatar.cc/150?img=7" alt="profile picture" m={4}/>
      <Box>
      <Heading as="h4" size="md"  mb={8}>
        {greeting}
      </Heading>
      </Box>
      <box>
      <Heading as="h2" size="2xl" mb={2}>
        {bio1}
      </Heading>
      </box>
      <Heading as="h2" size="2xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
