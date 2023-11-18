import { TbError404 } from "react-icons/tb";
import { GiCat } from "react-icons/gi";

interface NotFoundProps {
  rem_h: number;
  rem_w: number;
  notFoundText: string;
  textSize_px: number;
}

export default function NotFound({
  rem_h,
  rem_w,
  notFoundText,
  textSize_px,
}: NotFoundProps) {
  const cat_size = Math.ceil(rem_h / 3);

  return (
    <div className="flex flex-col items-center justify-start bg-transparent w-full gap-y-20 mb-10 text-slate-400 opacity-90">
      <div className="relative">
        <TbError404 className={`w-[${rem_w}em] h-[${rem_h}em]`} />
        <GiCat
          className={`w-full h-[${cat_size}em] absolute inset-x-0 -bottom-10 text-neutral`}
        />
      </div>
      <h1 className={`text-[${textSize_px}px] font-semibold`}>
        {notFoundText}
      </h1>
    </div>
  );
}
