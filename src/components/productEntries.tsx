import { Product } from "@/types/contentful";
import { SimpleGrid } from "@chakra-ui/react";
import ProductEntry from "./productEntry";
import ProductEntrySkeleton from "./productEntrySkeleton";

export default function ProductEntries({ products }: { products: Product[] }) {
  console.log(products);
  return (
    <SimpleGrid
      minH={"60vh"}
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingX={20}
      spacingY={6}
      mt={10}
    >
      <ProductEntry />
      <ProductEntry />
      <ProductEntry />
      <ProductEntrySkeleton />
      <ProductEntrySkeleton />
      <ProductEntrySkeleton />
    </SimpleGrid>
  );
}
