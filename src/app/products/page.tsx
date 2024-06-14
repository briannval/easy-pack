"use client";
import fetchProducts from "@/actions/fetchProducts";
import NoProducts from "@/components/noProducts";
import Pagination from "@/components/pagination";
import ProductEntries from "@/components/productEntries";
import ProductEntriesSkeleton from "@/components/productEntriesSkeleton";
import Search from "@/components/search";
import { Product } from "@/types/contentful";
import { Center, Heading, VStack } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";

interface ProductsState {
  products: Product[];
  totalPages: number;
  loading: boolean;
}

type ProductsAction =
  | { type: "FETCH_START" }
  | {
      type: "FETCH_SUCCESS";
      payload: { products: Product[]; totalPages: number };
    }
  | { type: "FETCH_FAILURE" };

const initialState: ProductsState = {
  products: [],
  totalPages: 0,
  loading: true,
};

const productsReducer = (
  state: ProductsState,
  action: ProductsAction
): ProductsState => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function Products({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page: string;
  };
}) {
  const query: string = searchParams?.query || "";
  const currentPage: number = Number(searchParams?.page) || 1;
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const { products, totalPages, loading } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const { products, totalPages } = await fetchProducts(
          query,
          currentPage
        );
        dispatch({ type: "FETCH_SUCCESS", payload: { products, totalPages } });
      } catch (error) {
        console.error(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    fetchData();
  }, [query, currentPage]);

  return (
    <VStack
      align={"center"}
      spacing={4}
      mt={"60px"}
      py={12}
      minW={"50%"}
      minH={"calc(100vh - 60px)"}
    >
      <Heading size={"xl"}>Find exactly what you're looking for.</Heading>
      <Center w={{ base: "60%", md: "40%" }}>
        <Search />
      </Center>
      {loading ? (
        <ProductEntriesSkeleton />
      ) : totalPages !== 0 ? (
        <ProductEntries products={products} />
      ) : (
        <NoProducts />
      )}

      <Pagination totalPages={totalPages} />
    </VStack>
  );
}
