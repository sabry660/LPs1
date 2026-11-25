import { Link } from "react-router-dom";

const variants = {
  primary: "bg-ink-800 text-white hover:bg-ink-900",
  gold: "bg-gold-400 text-ink-900 hover:bg-gold-500",
  outline: "border border-ink-800 text-ink-800 hover:bg-ink-800 hover:text-white",
  ghost: "text-ink-800 hover:bg-ink-100",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
