import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 100) {
    return notFound();
  }
  return (
    
      <div className="flex text-4xl font-bold p-2">
        Review Number {params.reviewId} for Product {params.productId}
      </div>
   
  );
}
