/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Scroll-aware glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-slate-200/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]"
          : "bg-white/95 backdrop-blur-md border-slate-100 shadow-sm"
      }`}
    >
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
              className={`relative py-2 text-[15px] font-bold transition-colors flex items-center gap-1 ${
                isActive(link.href)
                  ? "text-teal-600"
                  : "text-slate-800 hover:text-teal-600"
              }`}
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 opacity-50" />
              )}
              {/* Active indicator line */}
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-teal-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Language Selector */}
          <button
            className="flex items-center gap-1.5 py-2 text-[15px] font-bold text-slate-800 hover:text-teal-600 transition-colors"
            aria-label="Chọn ngôn ngữ: Tiếng Việt"
          >
            <Globe className="w-4 h-4" />
            <span>VI</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-50" />
          </button>

          {/* Auth Button */}
          {session ? (
            <div className="flex items-center gap-4">
              <span className="text-[15px] font-medium text-slate-700">
                {session.user.user_metadata?.full_name || session.user.email}
              </span>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center px-4 py-2 text-[14px] font-bold text-red-600 border border-red-200 hover:bg-red-50 rounded-lg transition-all"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              Đăng ký / Đăng nhập
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu điều hướng"}
          aria-expanded={mobileOpen}
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
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-teal-600 bg-teal-50 font-bold"
                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600"
                aria-label="Chọn ngôn ngữ"
              >
                <Globe className="w-4 h-4" />
                VI - Tiếng Việt
              </button>
              {session ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-red-600 border border-red-200 hover:bg-red-50 rounded-lg transition-all"
                >
                  Đăng xuất
                </button>
              ) : (
                <Link
                  href="/login"
                  className="block text-center px-4 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all"
                >
                  Đăng ký / Đăng nhập
                </Link>
              )}
            </div>
          </nav>
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
