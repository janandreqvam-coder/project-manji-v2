import Link from "next/link";
import { theme } from "./theme";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? theme.button.primary
      : theme.button.secondary;

  const classes = `inline-flex items-center justify-center ${styles} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}