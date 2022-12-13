
import React from "react";
import { _BACKGROUND } from "../../shared/vars";

interface ButtonProps {
  variant: keyof typeof _BACKGROUND;
  version?: "default" | "small";
  icon?: React.ReactElement;
  iconClasses?: string;
  text?: string;
  count?: number;
}

function Button({ variant, version = "default", icon, iconClasses, text, count }: ButtonProps) {
  return (
    <button className={`
      ${_BACKGROUND[variant]}
      ${variant === "neutral" ? "text-base-text font-normal text-xs px-2 py-[6.5px]" : "text-white font-bold text-sm"}
      ${(!!icon && !text && variant !== "neutral") ? "h-[38px] w-[38px] flex justify-center" : "px-[45px] py-3"}
      rounded-md flex items-center relative
      `}>
      {icon && React.cloneElement(icon, { className: iconClasses || (!!text && "ml-[-15px] mr-[15px]") })}
      {text}
      {count && <div className="absolute h-[20px] w-[20px] bg-yellow-dark top-[-10px] right-[-10px] rounded-full flex items-center justify-center text-xs text-white">{count}</div>}
    </button>
  );
}

export default Button;