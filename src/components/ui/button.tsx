import { type VariantProps, tv } from "tailwind-variants";

export const ButtonStyles = tv({
  base: [
    "inline-flex select-none items-center justify-center whitespace-nowrap rounded-md font-medium text-sm outline-none ring-offset-2 ring-offset-background transition",
    "focus-visible:ring-1",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "active:scale-95",
  ],

  variants: {
    variant: {
      default: [
        "bg-primary text-primary-foreground shadow",
        "hover:bg-primary/90",
        "focus-visible:ring-primary",
      ],
      destructive: [
        "bg-destructive text-destructive-foreground shadow-sm",
        "hover:bg-destructive/90",
        "focus-visible:ring-destructive",
      ],
      outline: [
        "border border-input bg-background shadow-sm",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-accent",
      ],
      secondary: [
        "bg-secondary text-secondary-foreground shadow-sm",
        "hover:bg-secondary/80",
        "focus-visible:ring-secondary",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-accent",
      ],
      link: [
        "text-primary underline-offset-4",
        "hover:underline",
        "focus-visible:ring-ring",
      ],
    },
    size: {
      default: ["h-9 px-4 py-2"],
      sm: ["h-8 rounded-md px-3 text-xs"],
      lg: ["h-10 rounded-md px-8"],
      icon: ["size-9"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof ButtonStyles>;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={ButtonStyles({ className, variant, size })} />
  );
}
