import React from "react";

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Github,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#111121] to-[#000000] text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              {/* <ArcadeLogo className="h-8 w-auto" /> */}
            </div>
            <p className="text-gray-400 mb-6">
              Arcade is the modern project management tool designed for
              collaborative teams. Build together, grow together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/integrations"
                  className="hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Legal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:hello@arcade.com"
                  className="hover:text-white transition-colors"
                >
                  hello@arcade.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-2 mt-4 bg-white text-black rounded-lg inline-flex hover:bg-gray-200 transition-colors"
                >
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Arcade. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
