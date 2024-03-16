import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
    description: `Description for Product ${params.productId}`,
  };
};

export default function Product({ params }: Props) {
  return (
    <div className="flex text-4xl font-bold p-2">
      Details About Product {params.productId} from Page.Tsx
    </div>
  );
}
