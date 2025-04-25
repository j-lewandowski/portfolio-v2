import { ReactNode } from "react";

interface SkillItemProps {
  iterator: number;
  children: ReactNode;
}

const SkillItem = ({ children, iterator }: SkillItemProps) => {
  return (
    <div className="w-28 md:w-36 aspect-square rounded-md bg-white/10 p-[2px] flex items-center justify-center relative  overflow-hidden group">
      <div className="bg-primary w-full h-full rounded-md">
        <div className="w-full h-full p-4 bg-secondary/[7%] rounded-md">
          <div className="relative w-full h-full">{children}</div>
        </div>
      </div>
      <div
        className={`w-8 h-[150%] absolute bg-transparent -z-[15] animate-spinSlow group-hover:bg-white duration-200`}
      ></div>
    </div>
  );
};

export default SkillItem;
