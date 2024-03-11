export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div className="flex flex-col ">
      <div className="flex h-[100dvh] bg-purple-400 text-2xl justify-center items-center">
        Review Number {params.reviewId} for Product {params.productId}
      </div>
    </div>
  );
}
