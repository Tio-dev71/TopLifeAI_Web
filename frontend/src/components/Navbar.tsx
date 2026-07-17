/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe, Stethoscope, Dna, Brain, Activity, Sparkles, HeartPulse, Pill, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useTranslation, type Locale } from "@/i18n/provider";

const serviceIconKeys = ["consult", "gene", "ai", "screening", "wellness", "mental", "medicine", "telehealth"] as const;
const serviceIcons = [Stethoscope, Dna, Brain, Activity, Sparkles, HeartPulse, Pill, Video];

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: "VI", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "EN", name: "English", flag: "🇺🇸" },
  { code: "KO", name: "한국어", flag: "🇰🇷" },
  { code: "JA", name: "日本語", flag: "🇯🇵" },
  { code: "ZH", name: "中文", flag: "🇨🇳" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useTranslation();

  const serviceRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) setServiceDropdown(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  const navLinks = [
    { key: "home", href: "/" },
    { key: "services", href: "/services", hasDropdown: true },
    { key: "doctors", href: "/doctors" },
    { key: "aiTech", href: "/ai-technology" },
    { key: "about", href: "/about" },
    { key: "news", href: "/news" },
    { key: "contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const dropdownMotion = {
    initial: { opacity: 0, y: 8, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.96 },
    transition: { duration: 0.18, ease: [0, 0, 0.2, 1] as const },
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
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.key} ref={serviceRef} className="relative">
                <button
                  onClick={() => { setServiceDropdown(!serviceDropdown); setLangDropdown(false); }}
                  className={`relative py-2 text-[15px] font-bold transition-colors flex items-center gap-1 ${
                    isActive(link.href) ? "text-teal-600" : "text-slate-800 hover:text-teal-600"
                  }`}
                  aria-expanded={serviceDropdown}
                  aria-haspopup="true"
                >
                  {t(`nav.${link.key}`)}
                  <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${serviceDropdown ? "rotate-180" : ""}`} />
                  {/* CSS-based active indicator — no layoutId, no jump */}
                  <span
                    className={`absolute -bottom-[1px] left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                      isActive(link.href) ? "bg-teal-600 scale-x-100" : "bg-transparent scale-x-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {serviceDropdown && (
                    <motion.div
                      {...dropdownMotion}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-50"
                    >
                      <div className="px-6 pt-5 pb-3 border-b border-slate-100">
                        <h3 className="text-[14px] font-bold text-slate-400 uppercase tracking-wider">{t("serviceDropdown.title")}</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-1 p-2">
                        {serviceIconKeys.map((key, idx) => {
                          const Icon = serviceIcons[idx];
                          const slugs = ['kham-va-tu-van-chuyen-gia', 'xet-nghiem-gene', 'ai-phan-tich-suc-khoe', 'tam-soat-kiem-tra', 'wellness-phuc-hoi', 'cham-soc-suc-khoe-tinh-than', 'quan-ly-thuoc-thong-minh', 'tu-van-tu-xa'];
                          return (
                            <Link
                              key={key}
                              href={`/services/${slugs[idx]}`}
                              onClick={() => setServiceDropdown(false)}
                              className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-teal-50/70 transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-100 group-hover:scale-110 transition-all">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-[14px] font-bold text-[#1B3A6B] group-hover:text-teal-600 transition-colors leading-snug">{t(`serviceDropdown.items.${key}.name`)}</h4>
                                <p className="text-[12px] text-slate-500 leading-snug mt-0.5">{t(`serviceDropdown.items.${key}.desc`)}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[13px] text-slate-500 font-medium">{t("serviceDropdown.exploreAll")}</span>
                        <Link href="/services" onClick={() => setServiceDropdown(false)} className="text-[13px] font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1">
                          {t("serviceDropdown.viewAll")} →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.key}
                href={link.href}
                className={`relative py-2 text-[15px] font-bold transition-colors flex items-center gap-1 ${
                  isActive(link.href) ? "text-teal-600" : "text-slate-800 hover:text-teal-600"
                }`}
              >
                {t(`nav.${link.key}`)}
                {/* CSS-based active indicator */}
                <span
                  className={`absolute -bottom-[1px] left-0 right-0 h-[2px] rounded-full transition-all duration-300 ${
                    isActive(link.href) ? "bg-teal-600 scale-x-100" : "bg-transparent scale-x-0"
                  }`}
                />
              </Link>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="hidden xl:flex items-center gap-6">
          {/* Language Selector */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => { setLangDropdown(!langDropdown); setServiceDropdown(false); }}
              className="flex items-center gap-1.5 py-2 text-[15px] font-bold text-slate-800 hover:text-teal-600 transition-colors"
              aria-label={t("nav.selectLang")}
              aria-expanded={langDropdown}
              aria-haspopup="true"
            >
              <Globe className="w-4 h-4" />
              <span>{locale}</span>
              <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${langDropdown ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {langDropdown && (
                <motion.div
                  {...dropdownMotion}
                  className="absolute top-full right-0 mt-3 w-[220px] bg-white rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-50"
                >
                  <div className="px-4 pt-4 pb-2">
                    <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t("nav.selectLang")}</h3>
                  </div>
                  <div className="p-1.5">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLocale(lang.code); setLangDropdown(false); }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                          locale === lang.code ? "bg-teal-50 text-teal-600" : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span className="text-lg leading-none">{lang.flag}</span>
                        <span className="text-[14px] font-bold flex-1">{lang.name}</span>
                        {locale === lang.code && (
                          <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
                {t("nav.logout")}
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              {t("nav.login")}
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
          aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <nav className="max-w-[1536px] w-full mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.key}>
                    <button
                      onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive(link.href) ? "text-teal-600 bg-teal-50 font-bold" : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                      }`}
                    >
                      <span>{t(`nav.${link.key}`)}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServiceOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServiceOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {serviceIconKeys.map((key, idx) => {
                              const Icon = serviceIcons[idx];
                              const slugs = ['kham-va-tu-van-chuyen-gia', 'xet-nghiem-gene', 'ai-phan-tich-suc-khoe', 'tam-soat-kiem-tra', 'wellness-phuc-hoi', 'cham-soc-suc-khoe-tinh-than', 'quan-ly-thuoc-thong-minh', 'tu-van-tu-xa'];
                              return (
                                <Link
                                  key={key}
                                  href={`/services/${slugs[idx]}`}
                                  onClick={() => { setMobileOpen(false); setMobileServiceOpen(false); }}
                                  className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                                >
                                  <Icon className="w-4 h-4 text-teal-500 shrink-0" />
                                  <span className="font-medium">{t(`serviceDropdown.items.${key}.name`)}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href) ? "text-teal-600 bg-teal-50 font-bold" : "text-slate-600 hover:text-teal-600 hover:bg-teal-50"
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                )
              )}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                {/* Mobile Language Selector */}
                <div className="px-4 py-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">{t("nav.language")}</p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLocale(lang.code)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-full border transition-colors ${
                          locale === lang.code
                            ? "border-teal-200 bg-teal-50 text-teal-600"
                            : "border-slate-200 text-slate-600 hover:border-teal-200 hover:bg-teal-50"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.code}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {session ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center px-4 py-3 text-sm font-semibold text-red-600 border border-red-200 hover:bg-red-50 rounded-lg transition-all"
                  >
                    {t("nav.logout")}
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block text-center px-4 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all"
                  >
                    {t("nav.login")}
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
