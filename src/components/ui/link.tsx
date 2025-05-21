import React from "react";
import { cn } from "@/lib/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  return (
    <a
      href={href}
      className={cn(
        "text-foreground hover:text-primary transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
