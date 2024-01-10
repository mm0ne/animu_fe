import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiNeutral,
  BsEmojiSmile,
  BsEmojiSunglasses,
  BsEmojiHeartEyes,
} from "react-icons/bs";

const labelClass = "text-2xl text-center";

export function WorstSatisfactionLevel() {
  return (
    <div className="flex flex-col items-center justify-start font-semibold text-red-600">
      <BsEmojiAngry size={130} />
      <label className={labelClass + " "}>Worst, don't Watch it.</label>
    </div>
  );
}

export function BadSatisfactionLevel() {
  return (
    <div className="flex flex-col items-center justify-start font-semibold text-red-400">
      <BsEmojiFrown size={130} />
      <label className={labelClass + " "}>Not Recommended</label>
    </div>
  );
}

export function NeutralSatisfactionLevel() {
  return (
    <div className="flex flex-col items-center justify-start font-semibold">
      <BsEmojiNeutral size={130} />
      <label className={labelClass + " "}>Mediocre</label>
    </div>
  );
}

export function GoodSatisfactionLevel() {
  return (
    <div className="flex flex-col items-center justify-start font-semibold text-lime-400">
      <BsEmojiSmile size={130} />
      <label className={labelClass + " "}>It's Alright, Pretty Fine</label>
    </div>
  );
}

export function GreatSatisfactionLevel() {
  return (
    <div className="flex flex-col items-center justify-start font-semibold text-emerald-300">
      <BsEmojiSunglasses size={130} />
      <label className={labelClass + " "}>Excellent, Greatly Recommended</label>
    </div>
  );
}

export function BestSatisfactionLevel() {
  return (
    <div className="flex flex-col items-center justify-start font-semibold text-emerald-500">
      <BsEmojiHeartEyes size={130}/>
      <label className={labelClass + " bg-gradient-to-r from-red-400 from-10% via-lime-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent"}>100% A Must-Watch! </label>
    </div>
  );
}
