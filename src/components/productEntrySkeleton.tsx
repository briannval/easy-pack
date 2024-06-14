import React from "react";
import { Box, Center, Skeleton, useColorModeValue } from "@chakra-ui/react";

export default function ProductEntrySkeleton() {
  return (
    <Center py={6}>
      <Box
        w={"375px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        shadow={"base"}
        borderColor={"gold.300"}
      >
        <Box
          w={"375px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Skeleton h={"300px"} w={"375px"} />
        </Box>
        <Center h="100%" mt={{ base: 4, md: 6 }}>
          <Box w="100%">
            <Skeleton height="24px" mb={2} />
            <Skeleton height="16px" />
          </Box>
        </Center>
      </Box>
    </Center>
  );
}