import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import React from "react";

interface ButtonProps {
  css_class: string | undefined;
  size: number;
}

export default function BackButton({ css_class, size }: ButtonProps) {
  const { back } = useRouter();
  return (
    <div
      onClick={() => back()}
      className={
        "rounded-full lg:p-4 text-emerald-400 cursor-pointer hover:text-white font-[900] hover:bg-neutral transition-all duration-100 lg:h-[3.5em] " +
        css_class
      }
    >
      <BiArrowBack size={25} />
    </div>
  );
}
