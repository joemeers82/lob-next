import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "text-only" | "outline";

// Base props shared by both button and anchor
interface BaseButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

// Props specific to button
interface ButtonElementProps extends BaseButtonProps {
  href?: never; // Explicitly disallow href
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>["disabled"];
}

// Props specific to anchor
interface AnchorElementProps extends BaseButtonProps {
  href: string;
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>["rel"];
}

// Union type for Button component props
type ButtonProps = ButtonElementProps | AnchorElementProps;

export default function Button({
  variant = "primary",
  className = "",
  children,
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
      bg-yellow-100 text-secondary-key
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
    outline: `
      border border-black
      bg-transparent text-black
      rounded
      flex justify-center items-center
      w-fit
      px-6 py-3
      text-sm font-semibold
      leading-[130%]
      transition-all duration-200 ease-in-out
      hover:bg-gray-50
    `,
  };

  const baseClass = `${variants[variant]} ${className}`;

  // Check if href exists to determine if it's an anchor
  if ("href" in props && props.href) {
    const { href, onClick, target, rel } = props as AnchorElementProps;
    const isExternal = href.startsWith("http") || href.startsWith("//");

    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClass}
          onClick={onClick}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClass} onClick={onClick} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  // Render as a button if no href
  const { onClick, type, disabled } = props as ButtonElementProps;

  return (
    <button
      className={baseClass}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}