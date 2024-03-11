export default function Product({ params }: { params: { productId: string } }) {
  return (
    <div className="flex flex-col ">
      <div className="flex h-[100dvh] bg-purple-400 text-2xl justify-center items-center">
        Details About Product {params.productId}
      </div>
    </div>
  );
}
