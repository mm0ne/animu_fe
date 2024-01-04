import { Quicksand } from "next/font/google";
import { useEffect } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  useEffect(() => {
    var currentTheme = localStorage.getItem("theme") ?? "pastel";
    document.body.setAttribute("data-theme", currentTheme);
  }, []);
  return <main className={`${quicksand.className} w-full`}>{children}</main>;
}
