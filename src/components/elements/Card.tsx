import Link from "next/link";

interface CardProps {
  children?: React.ReactElement;
  link?: string;
}

export default function Card({ children, link }: CardProps) {
  return (
    <Link
      href={link!}
      className="text-white rounded-md shadow-md bg-[#253873]  hover:cursor-pointer border-2 border-transparent hover:border-blue-400 transition-all duration-100"
    >
      {children}
    </Link>
  );
}
