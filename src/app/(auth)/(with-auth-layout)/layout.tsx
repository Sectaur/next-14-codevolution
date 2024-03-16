export default function InnerAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-gray-100">
      <h1 className="flex flex-grow w-full text-5xl text-white bg-blue-600">
        Inner Auth Layout
      </h1>
      {children}
    </div>
  );
}
