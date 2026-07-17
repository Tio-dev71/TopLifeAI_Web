"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

import vi from "./locales/vi.json";
import en from "./locales/en.json";
import ko from "./locales/ko.json";
import ja from "./locales/ja.json";
import zh from "./locales/zh.json";

export type Locale = "VI" | "EN" | "KO" | "JA" | "ZH";

const messages: Record<Locale, Record<string, unknown>> = { VI: vi, EN: en, KO: ko, JA: ja, ZH: zh };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

/**
 * Resolve a dot-separated key path like "nav.home" from a nested object.
 */
function resolve(obj: unknown, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

const STORAGE_KEY = "toplifeai_locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("VI");
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && messages[saved]) {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    // Update html lang attribute
    document.documentElement.lang = newLocale.toLowerCase();
  }, []);

  const t = useCallback(
    (key: string): string => resolve(messages[locale], key),
    [locale]
  );

  // Prevent hydration mismatch — render children only after mount
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback for components rendered before provider mounts
    return {
      locale: "VI" as Locale,
      setLocale: () => {},
      t: (key: string) => resolve(messages.VI, key),
    };
  }
  return ctx;
}
