import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Easy Pack Indonesia",
  description: "Official Website of Easy Pack",
  authors: [
    { name: "Brian Adhitya" },
    { name: "PT Easy Pack Indonesia" },
    { name: "Nadeen Horia" },
  ],
  creator: "Brian Adhitya",
  publisher: "Brian Adhitya",
  generator: "Next.js",
  keywords: [
    "Easy Pack",
    "Easy Pack Indonesia",
    "Food Packaging",
    "Stackable",
    "Premium",
    "Durable",
    "Jakarta",
    "Thinwall",
    "Spork",
    "Container",
    "Pisau",
    "MP",
    "KM",
    "MS",
  ],
};

export default function RootLayout({ children }: Props) {
  return children;
}
