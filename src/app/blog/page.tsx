import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Absolutely Hammy",
  },
};

export default function Home() {
  return <div className="flex text-4xl font-bold p-2">Blog Home Page</div>;
}
