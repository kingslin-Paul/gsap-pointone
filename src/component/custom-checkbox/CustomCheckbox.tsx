import React from "react";

type Props = {
  checked: boolean;
type?: "footer";
  onChange: () => void;
};

const CustomCheckbox: React.FC<Props> = ({ checked, type,onChange }) => {
  const isFooter = type === "footer";
  return (
    <div
      onClick={onChange}
      className={`size-12 bg-transparent border cursor-pointer flex items-center justify-center ${isFooter ? "border-black" : "border-white"}`}>
      <span
        className={`text-[34px] transform transition-transform duration-200 ${isFooter ? "text-black" : "text-white"} ${checked ? "scale-100" : "scale-0" }`}
      >
        ✕
      </span>
    </div>
  );
};

export default CustomCheckbox;
