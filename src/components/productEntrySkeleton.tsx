import React from "react";
import { Box, Center, Skeleton, useColorModeValue } from "@chakra-ui/react";

export default function ProductEntrySkeleton() {
  return (
    <Center py={6}>
      <Box
        w={{ base: "50%", md: "100%" }}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        shadow={"base"}
        borderColor={"gold.300"}
      >
        <Skeleton height="210px" width="300px" />
        <Center h="100%" mt={{ base: 4, md: 6 }}>
          <Box w="100%">
            <Skeleton height="24px" mb={4} />
            <Skeleton height="16px" width="80%" mb={2} />
            <Skeleton height="16px" width="60%" mb={2} />
          </Box>
        </Center>
      </Box>
    </Center>
  );
}
