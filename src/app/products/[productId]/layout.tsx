export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex h-1/2 bg-blue-400">{children}</div>
      <h2 className="flex flex-grow h-64 bg-purple-200 text-5xl font-bold">
        Featured Products From Nested Layout
      </h2>
      {/* Carousel here */}
    </div>
  );
}
