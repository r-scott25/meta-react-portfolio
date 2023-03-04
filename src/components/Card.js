import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="white" borderRadius="xl">
      <Image src={imageSrc} alt={title} borderRadius="xl" mb={5} />
      <Heading as="h3" size="md" color="black" mb={5} ml={3}>
        {title}
      </Heading>
      <Text color="black" mb={5} ml={3}>
        {description}
      </Text>
      <HStack mb={5}>
        <Text as="b" color="black" ml={3}>
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
      </HStack>
    </Box>
  );
};

export default Card;
