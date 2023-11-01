import React, { ReactElement, useState} from "react";
import {RiDiscLine} from "react-icons/ri"
import {PiPawPrint} from "react-icons/pi"
import {FaCat} from "react-icons/fa"
import { IconType } from "react-icons";
import { ComponentWithChildren } from "@/types/common";
import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

interface ConfigMenuProps {
  icon: ReactElement<IconType>;
  title: string;
  href: string;
}

function ConfigMenu({ icon, title, href }: ConfigMenuProps) {
  const [isBooped, setIsBooped] = useState<boolean>(false)
  const rotation = 30 
  const springs = useSpring({
    transform: isBooped
      ? `rotate(${rotation}deg) scale(1.2)`
      : `rotate(0deg) scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  })
  return (
    <Link
      onMouseEnter={() => setIsBooped(true)}
      onMouseLeave={() => setIsBooped(false)}
      href={href}
      className="flex flex-row gap-2 items-center py-3 px-4 hover:bg-neutral rounded-r-full hover:cursor-pointer hover:text-white transition-all duration-100"
    >
      <animated.span style={springs}>
        {icon}
      </animated.span>
        
      {title}
    </Link>
  );
}

export default function DashboardLayout({
  children,
  className,
}: ComponentWithChildren) {

  return (
    <div>
      <div className="p-4 flex flex-row justify-between">
        <Link href="/" className="flex items-center gap-x-1">
          <FaCat className="w-7 h-7  mb-2"/>
          <h1 className="text-2xl font-bold">{"Aster's Corner"}</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-8 h-auto min-h-[70vh]">
        <section className="flex flex-col gap-2 basis-[24rem]">
          <ConfigMenu
            icon={<PiPawPrint size={24} />}
            title="Anime"
            href="/anime"
          />
          <ConfigMenu
            icon={<RiDiscLine size={24} />}
            title="Records"
            href="/records"
          />
        </section>
        <section className={"w-full " + className}>{children}</section>
      </div>
    </div>
  );
}