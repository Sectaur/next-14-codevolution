export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length) {
    return (
      <div className="flex flex-col">
        {params.slug.map((slug, index) => {
          return (
            <h1
              key={index}
              className="bg-blue-400 h-[10dvh] border-2 border-black"
            >
              {slug}
            </h1>
          );
        })}
      </div>
    );
  }
  return <h1 className="flex bg-yellow-400">Docs Catch All</h1>;
}
