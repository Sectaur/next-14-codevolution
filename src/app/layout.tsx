import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hammy's Blog",
    template: "%s | Blog",
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
        </header>
        <div className="flex flex-grow">{children}</div>
        <footer>
          <p className="flex p-2 h-32 bg-blue-400 text-4xl">Footer Section</p>
        </footer>
      </body>
    </html>
  );
}
