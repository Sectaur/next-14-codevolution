import "./globals.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "App Layout Title",
    template: "%s | Template",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-[100dvh]">
        <header className="flex p-2 h-32 bg-green-400 text-4xl">
          <p>Header Section</p>
          <Link
            className="m-2 bg-purple-500 h-16 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md"
            href="/"
          >
            Home
          </Link>
        </header>
        <div className="flex flex-grow">{children}</div>
        <footer>
          <p className="flex p-2 h-32 bg-blue-400 text-4xl">Footer Section</p>
        </footer>
      </body>
    </html>
  );
}
