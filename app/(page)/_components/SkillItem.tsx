import { ReactNode } from "react";

interface SkillItemProps {
  children: ReactNode;
}

const SkillItem = ({ children }: SkillItemProps) => {
  return (
    <div className="h-[100px] w-[100px] rounded-md bg-secondary/[7%] border-2 border-white/10 flex items-center justify-center">
      {children}
    </div>
  );
};

export default SkillItem;
