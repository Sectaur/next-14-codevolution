"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Comments Made", href: "/comments-made" },
  { name: "Comments Read", href: "/comments-read" },
  { name: "Comments Thought", href: "/comments-thought" },
];

const CommentsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            className={`m-4 inline-block px-4 py-2 text-white ${
              isActive ? "bg-red-400" : "bg-blue-500"
            } rounded`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default CommentsLayout;
