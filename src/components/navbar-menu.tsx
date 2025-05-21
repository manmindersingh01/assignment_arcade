import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "./ui/link";

interface MenuItemProps {
  // setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  // setActive,
  active,
  item,
  children,
}) => {
  return (
    <div className="relative">
      <motion.button
        className="px-4 text-lg  py-2 rounded-md font-normal text-gray-700  hover:text-primary flex items-center gap-1"
        // onHoverStart={() => setActive(item)}
        // onHoverEnd={() => setActive(null)}
      >
        <span>{item}</span>
        <motion.span
          animate={{ rotate: active === item ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.span>
      </motion.button>

      {active === item && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute left-0 z-10 mt-2 p-4 rounded-md bg-popover shadow-md border border-border min-w-[250px]"
          // onHoverStart={() => setActive(item)}
          // onHoverEnd={() => setActive(null)}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export function Menu({
  // setActive,
  children,
}: {
  // setActive: (item: string | null) => void;
  children: React.ReactNode;
}) {
  return <nav className="relative flex items-center gap-2">{children}</nav>;
}

export function HoveredLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium hover:text-primary transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function ProductItem({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-4 p-2 rounded-lg hover:bg-muted transition-colors"
    >
      <img
        src={src}
        alt={title}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
