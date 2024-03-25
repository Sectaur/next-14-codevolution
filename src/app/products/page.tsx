import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <div className="flex flex-col">
      <h1 className="flex m-4 text-4xl">Products List</h1>
      <div className="cursor-pointer h-16 m-2 flex bg-purple-400 hover:bg-purple-700 rounded-md text-2xl justify-center items-center">
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </div>
      <div className="cursor-pointer h-16 m-2 flex bg-green-400 hover:bg-green-700 rounded-md text-2xl justify-center items-center">
        <Link href="/products/2" replace>
          Product 2
        </Link>
      </div>
      <div className="cursor-pointer h-16 m-2 flex  bg-orange-400 hover:bg-orange-700 rounded-md text-2xl justify-center items-center">
        <Link href="/products/3" replace>
          {" "}
          Product 3
        </Link>
      </div>
    </div>
  );
}
