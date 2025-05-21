import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import { PaintBucket } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [active] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 mx-5 z-50 rounded-lg bg-background flex items-center justify-between p-4  transition-all duration-300",
        scrolled ? "border border-border" : "border-transparent"
      )}
    >
      <div className="flex items-center space-x-2 pl-10">
        <PaintBucket size={24} />
        <h1 className="font-extrabold text-2xl">ARCADE</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Menu>
          <MenuItem active={active} item="Product">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem active={active} item="Solutions">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem active={active} item="Resources">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/blog">Blog</HoveredLink>
              <HoveredLink href="/guides">Guides</HoveredLink>
              <HoveredLink href="/documentation">Documentation</HoveredLink>
              <HoveredLink href="/tutorials">Tutorials</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem active={active} item="Company">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about">About</HoveredLink>
              <HoveredLink href="/careers">Careers</HoveredLink>
              <HoveredLink href="/contact">Contact</HoveredLink>
              <HoveredLink href="/press">Press</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            className="p-4 text-lg font-normal text-gray-700"
            variant="ghost"
          >
            Pricing
          </Button>
          <Button
            className="p-4 text-lg font-normal text-gray-700"
            variant="ghost"
          >
            Log in
          </Button>
          <Button className="px-4 py-2 font-medium">Sign up for free</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
