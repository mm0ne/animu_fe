import React, { ReactElement, useState } from "react";
import { RiDiscLine } from "react-icons/ri";
import { PiPawPrint } from "react-icons/pi";
import Navbar from "@/components/layout/Navbar";
import { IconType } from "react-icons";
import { ComponentWithChildren } from "@/types/common";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

interface ConfigMenuProps {
  icon: ReactElement<IconType>;
  title: string;
  href: string;
  isNew: boolean;
}

function ConfigMenu({ icon, title, href, isNew }: ConfigMenuProps) {
  const [isBooped, setIsBooped] = useState<boolean>(false);
  const rotation = 30;
  const springs = useSpring({
    transform: isBooped
      ? `rotate(${rotation}deg) scale(1.2)`
      : `rotate(0deg) scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });
  return (
    <Link
      onClick={() => {
        (document.getElementById("drawer") as HTMLInputElement)!.checked =
          false;
      }}
      onMouseEnter={() => setIsBooped(true)}
      onMouseLeave={() => setIsBooped(false)}
      href={href}
      className="flex flex-row gap-2 items-center py-4 px-4 text-xl hover:bg-neutral rounded-r-full hover:cursor-pointer hover:text-white transition-all duration-100"
    >
      <animated.span style={springs}>{icon}</animated.span>

      {title}
      {isNew && <p className=" text-[12px] text-red-500 font-bold">NEW!</p>}
    </Link>
  );
}

export default function DashboardLayout({
  children,
  className,
}: ComponentWithChildren) {
  return (
    <main className="min-h-screen">
      <Navbar toggle_label="drawer" />
      <div className="drawer lg:drawer-open">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full px-2 pt-2 md:px-4 lg:px-8 md:pt-6">
          {children}
        </div>
        <div className="drawer-side min-h-[93.5vh] h-full">
          <label
            htmlFor="drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <section className="w-80 lg:w-64 xl:w-80 min-h-full bg-base-200">
            <ConfigMenu
              icon={<PiPawPrint size={30} />}
              title="Anime"
              href="/anime"
              isNew={false}
            />
            <ConfigMenu
              icon={<RiDiscLine size={30} />}
              title="Records"
              href="/records"
              isNew={true}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
