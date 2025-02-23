import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text-only";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      border border-primary-indigo-100
      bg-primary-indigo-100 text-neutrals-white
      rounded
      flex justify-center items-center
      w-fit
      px-8 py-4
      text-sm font-semibold
      leading-[130%]
      transition-all duration-200 ease-in-out
      hover:bg-primary-indigo-shade hover:border-primary-indigo-shade
    `,
    secondary: `
      border border-primary-accent-yellow-100
      bg-primary-accent-yellow-100 text-secondary-key
      rounded
      flex justify-center items-center
      w-fit
      px-6 py-3
      text-sm font-semibold
      leading-[130%]
      transition-all duration-200 ease-in-out
      hover:bg-primary-accent-yellow-shade hover:border-primary-accent-yellow-shade
    `,
    "text-only": `
      bg-transparent
      text-primary-indigo-100
      flex justify-center
      w-fit
      pr-8 relative
      text-sm font-semibold
      leading-[130%]
      transition-all duration-300 ease-in-out
      after:content-['→']
      after:absolute
      after:right-2
      after:transition-transform
      after:duration-300
      hover:after:translate-x-1
      hover:text-primary-indigo-shade
    `,
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
