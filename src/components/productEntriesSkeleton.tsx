import { Product } from "@/types/contentful";
import { SimpleGrid } from "@chakra-ui/react";
import ProductEntry from "./productEntry";
import ProductEntrySkeleton from "./productEntrySkeleton";

export default function ProductEntriesSkeleton() {
  return (
    <SimpleGrid
      minH={"60vh"}
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingX={20}
      spacingY={6}
      mt={10}
    >
      {[...Array(6)].map((_, i) => (
        <ProductEntrySkeleton key={i} />
      ))}
    </SimpleGrid>
  );
}
