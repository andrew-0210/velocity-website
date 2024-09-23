import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  intent?: "primary" | "secondary";
  size?: "small" | "medium";
  btnType?: "icon" | "button";
};

const button = cva(
  "font-semibold text-[0.875rem] m-[0.25rem] border rounded-full",
  {
    variants: {
      intent: {
        primary:
          "bg-[#653fe1] text-[#fafafa] hover:bg-[#452b9a] hover:ring-[#452b9a] border-[#fafafa] ring-2 ring-[#653fe1] ",
        secondary:
          " text-[#fafafa] bg-[#2a2a2a] border-[#fafafa] ring-2 ring-[#2a2a2a]",
      },
      size: {
        small: "px-[0.5rem] py-[0.5rem]",
        medium: "py-[0.5rem] px-[1.25rem] min-w-[8rem]",
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
