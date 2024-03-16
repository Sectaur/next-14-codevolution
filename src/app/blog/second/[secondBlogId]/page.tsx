import { Metadata } from "next";

type Props = {
  params: { secondBlogId: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.secondBlogId}`);
    }, 2000);
  });

  return {
    title: `Second Blog: ${title}`,
    description: "Description in Second Blog Page",
  };
};

// export const metadata = {
//   title: "Second Blog Page Metadata",
//   description: "Description in Second Blog Page",
// };

export default function SecondBlog({ params }: Props) {
  return (
    <div className="flex text-4xl font-bold p-2">
      Second Blog Page {`${params.secondBlogId}`}
    </div>
  );
}
