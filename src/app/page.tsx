import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full text-4xl bg-pink-400 font-bold p-2">
      Hello ... this is Next 14 Home Page!!
      <Link
        className="m-2 bg-purple-500 h-16 w-64 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        href="/blog"
      >
        Go to Blog
      </Link>
      <Link
        className="m-2 bg-purple-500 h-16 w-1/2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        href="/products"
      >
        Go to Products
      </Link>
    </div>
  );
}
