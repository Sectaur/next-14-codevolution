export default function Product({ params }: { params: { productId: string } }) {
  return (
    
      <div className="flex text-4xl font-bold p-2">
        Details About Product {params.productId}
      </div>
   
  );
}
