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
  return (
    <div className="flex flex-col items-center justify-start bg-transparent w-full gap-y-4 mb-10 text-slate-400 opacity-90">
      <h1 className="font-bold text-7xl lg:text-[100px] xl:text-[200px]">
        404
      </h1>
      <GiCat className={`w-[10em] h-[7em]  text-neutral`} />
      <h1 className={`text-[30px] font-semibold`}>{notFoundText}</h1>
    </div>
  );
}
