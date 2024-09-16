import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  intent?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium";
  btnType?: "icon" | "button";
};

const button = cva(
  "font-semibold text-[0.875rem] m-[0.25rem] border rounded-full",
  {
    variants: {
      intent: {
        primary:
          "bg-[#bef94c] text-[#1a1a1a] hover:bg-[#b7e953] hover:ring-[#b7e953]  border-[#fafafa] ring-2 ring-[#bef94c] ",
        secondary:
          "bg-[#fffffa] text-[#797979] border-[#bebebe] ring-2 ring-[#fafafa]",
        tertiary: "bg-[#2973c7] text-[#fffffa]",
      },
      size: {
        small: "px-[0.5rem] py-[0.5rem]",
        medium: "py-[0.75rem] px-[1.75rem] min-w-[10rem]",
      },
      btnType: {
        button: "",
        icon: "px-0 rounded-full py-0",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "medium",
      },
      { btnType: "icon", size: "small", className: "h-10 w-10" },
      { btnType: "icon", size: "medium", className: "h-11 w-11" },
    ],
    defaultVariants: {
      intent: "secondary",
      size: "medium",
      btnType: "button",
    },
  },
);

const Button = ({
  intent,
  size,
  btnType,
  className,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <button
        className={twMerge(button({ intent, size, btnType, className }))}
        {...props}
      />
    </div>
  );
};

export default Button;
