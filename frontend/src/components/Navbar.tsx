"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    {
      name: "Dịch vụ",
      href: "/services",
      hasDropdown: true,
    },
    { name: "Bác sĩ & chuyên gia", href: "/doctors" },
    { name: "Công nghệ AI", href: "/ai-technology" },
    { name: "Về chúng tôi", href: "/about" },
    { name: "Tin tức", href: "/news" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/logotoplifeAI.png" alt="ToplifeAI Logo" width={300} height={80} className="w-auto h-12 scale-[1.2] lg:scale-[2.6] origin-left object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2 text-[15px] font-bold text-slate-800 hover:text-teal-600 transition-colors flex items-center gap-1"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 opacity-50" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Language Selector */}
          <button className="flex items-center gap-1.5 py-2 text-[15px] font-bold text-slate-800 hover:text-teal-600 transition-colors">
            <Globe className="w-4 h-4" />
            <span>VI</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </button>

          {/* Auth Button */}
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all"
          >
            Đăng ký / Đăng nhập
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-slate-100 bg-white shadow-lg overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600">
                <Globe className="w-4 h-4" />
                VI - Tiếng Việt
              </button>
              <Link
                href="/login"
                className="block text-center px-4 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-all"
              >
                Đăng ký / Đăng nhập
              </Link>
            </div>
          </nav>
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
