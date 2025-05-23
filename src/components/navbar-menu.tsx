import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {children}
    </nav>
  );
};

export const MenuItem = ({
  active,
  item,
  children,
}: {
  active: string | null;
  item: string;
  children: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.p
        className={cn(
          "cursor-pointer text-black hover:opacity-[0.9] dark:text-white",
          active === item && "opacity-[0.9]"
        )}
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, rotateX: -15, y: -20 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -15, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 pt-4"
          >
            <motion.div
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              layoutId="active"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            >
              <motion.div
                layout
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const HoveredLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      {...rest}
      href={href}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};