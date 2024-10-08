"use server";

import { client } from "@/lib/contentful";
import {
  FetchProductsResult,
  GetContentfulQuery,
  ProductFieldsSkeleton,
  ProductsActionResult,
} from "@/types/contentful";
import { EntryCollection } from "contentful";

const PRODUCTS_PER_PAGE = 6;

export default async function fetchProducts(
  query: string = "",
  currentPage: number = 1,
  locale: string = "en"
): Promise<FetchProductsResult> {
  let getContentfulQuery: GetContentfulQuery = {
    content_type: "products",
    skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
    limit: PRODUCTS_PER_PAGE,
  };

  if (query) {
    getContentfulQuery = {
      ...getContentfulQuery,
      [locale === "id" ? "fields.indonesianName[match]" : "fields.name[match]"]:
        query,
    };
  }

  const products: EntryCollection<ProductFieldsSkeleton, undefined, string> =
    await client.getEntries<ProductFieldsSkeleton>({
      ...getContentfulQuery,
      order: ["sys.createdAt"],
    });

  const res: ProductsActionResult = {
    products: products.items.map((product) => ({
      id: product.sys.id,
      name: product.fields.name,
      dimensions: product.fields.dimensions,
      image_url: product.fields.image
        ? `http:${(product.fields.image as any).fields.file.url}`
        : "/icon.png",
      indonesianName: product.fields.indonesianName,
      indonesianDimensions: product.fields.indonesianDimensions,
      packsPerCarton: product.fields.packsPerCarton,
      indonesianPacksPerCarton: product.fields.indonesianPacksPerCarton,
      totalQuantity: product.fields.totalQuantity,
      indonesianTotalQuantity: product.fields.indonesianTotalQuantity,
      quantityPerPack: product.fields.quantityPerPack,
    })),
    totalPages: Math.ceil(Number(products.total) / PRODUCTS_PER_PAGE),
  };

  return res;
}
