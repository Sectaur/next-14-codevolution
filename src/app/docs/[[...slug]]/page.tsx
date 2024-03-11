export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length >= 1) {
    return (
      <div className="flex flex-col">
        <h1 className="bg-red-400 h-[100dvh]"> Docs Param {params.slug[0]}</h1>
      </div>
    );
  }
  return <h1 className="bg-yellow-400 h-[100dvh]">Docs Catch All</h1>;
}
