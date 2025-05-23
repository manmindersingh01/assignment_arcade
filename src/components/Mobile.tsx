import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PaintBucket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Mobile = ({ isOpen, onClose }: MobileSidebarProps) => {
  // Close sidebar when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  const menuItems = [
    { title: "Product", submenu: ["Web Development", "Interface Design", "Search Engine Optimization", "Branding"] },
    { title: "Solutions", submenu: ["Algochurn", "Tailwind Master Kit", "Moonbeam", "Rogue"] },
    { title: "Resources", submenu: ["Blog", "Guides", "Documentation", "Tutorials"] },
    { title: "Company", submenu: ["About", "Careers", "Contact", "Press"] },
    { title: "Pricing", submenu: [] },
    { title: "Log in", submenu: [] },
    { title: "Sign up for free", submenu: [], highlight: true }
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-background border-r border-border z-50 md:hidden overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center space-x-2">
                <PaintBucket size={24} />
                <h1 className="font-extrabold text-xl">ARCADE</h1>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="h-9 w-9">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {/* Menu Items */}
            <div className="p-4">
              <nav className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-border/50 last:border-0">
                    <motion.div
                      custom={index}
                      initial="closed"
                      animate="open"
                      variants={menuItemVariants}
                    >
                      {item.submenu.length > 0 ? (
                        <div className="py-3">
                          <button
                            onClick={() => toggleExpand(index)}
                            className={cn(
                              "flex items-center justify-between w-full text-left font-medium",
                              expandedItem === index ? "text-primary" : ""
                            )}
                          >
                            {item.title}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                expandedItem === index ? "rotate-180" : ""
                              )}
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </button>
                          <AnimatePresence>
                            {expandedItem === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 pt-2 pb-1 space-y-2">
                                  {item.submenu.map((subItem, subIndex) => (
                                    <motion.a
                                      key={subIndex}
                                      href={`/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: subIndex * 0.05 }}
                                    >
                                      {subItem}
                                    </motion.a>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a
                          href={item.title === "Sign up for free" ? "/signup" : `/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className={cn(
                            "block py-3 font-medium",
                            item.highlight ? "text-primary" : ""
                          )}
                        >
                          {item.title}
                        </a>
                      )}
                    </motion.div>
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};


export default Mobile;