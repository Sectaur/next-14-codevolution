// export const metadata = {
//   title: "Hellos",
// };

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Link
          className="bg-yellow-500 h-16 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          href="/"
        >
          Home
        </Link>
        {children}
      </body>
    </html>
  );
}
