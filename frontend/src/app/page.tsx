"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeartPulse, Shield, Activity, Users, Dna, FileText, Globe, Leaf, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/provider";

export default function Home() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-10 lg:pb-10 bg-white overflow-hidden">
        {/* Right background image blending into white */}
        <div
          className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0 hidden lg:block"
          style={{ maskImage: "linear-gradient(to right, transparent, black 25%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 25%)" }}
        >
          <Image
            src="/anh1trangchu.png"
            alt="Family photo"
            width={1024}
            height={683}
            className="object-cover object-[center_20%] w-full h-full"
            priority
          />
        </div>

        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              className="w-full lg:w-[45%] space-y-4"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-[2rem] lg:text-[3rem] font-bold tracking-tight text-slate-800 leading-[1.05]">
                {t("hero.line1")}<br />
                {t("hero.line2")}<br />
                <span className="text-teal-600">{t("hero.line3")}</span>
              </h1>
              <p className="text-md lg:text-l text-slate-600 max-w-[480px] leading-relaxed">
                {t("hero.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="h-[56px] px-8 text-[17px] font-bold rounded-xl bg-teal-600 hover:bg-teal-700 shadow-xl shadow-teal-600/20">
                  {t("hero.cta1")}
                </Button>
                <Button size="lg" variant="outline" className="h-[56px] px-8 text-[17px] font-bold rounded-xl text-teal-600 border-teal-200 hover:bg-teal-50 bg-white">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t("hero.cta2")}
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Icons Bar */}
      <section className="relative z-30 -mt-[30px] mb-8">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-slate-100 py-10 px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              {[
                { icon: <Dna className="w-[26px] h-[26px] text-teal-600" />, key: "gene" },
                { icon: <HeartPulse className="w-[26px] h-[26px] text-teal-600" />, key: "aiHealth" },
                { icon: <FileText className="w-[26px] h-[26px] text-teal-600" />, key: "records" },
                { icon: <Users className="w-[26px] h-[26px] text-teal-600" />, key: "doctors" },
                { icon: <Globe className="w-[26px] h-[26px] text-teal-600" />, key: "international" },
                { icon: <Leaf className="w-[26px] h-[26px] text-teal-600" />, key: "wellness" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2 lg:px-6">
                  <div className="w-[60px] h-[60px] bg-teal-50/80 rounded-full flex items-center justify-center mb-5 transition-transform hover:scale-110 hover:bg-teal-100">
                    {item.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-800 mb-2">{t(`servicesBar.${item.key}.title`)}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed max-w-[180px]">{t(`servicesBar.${item.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pt-16 pb-16 bg-white relative">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left: 4 solution cards in a row */}
            <div className="flex-1">
              <motion.div {...fadeIn}>
                <h2 className="text-[1rem] lg:text-[1.5rem] font-bold mb-10 text-slate-800">
                  {t("solutions.heading")} <span className="text-teal-600">{t("solutions.headingHighlight")}</span> {t("solutions.headingSuffix")}
                </h2>
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { img: "/anh1trangdichvu.png", key: "gene" },
                  { img: "/anh1trangcongngheAI.png", key: "ai" },
                  { img: "/anh1trangbacsi&chuyengia.png", key: "medical" },
                  { img: "/anh1tranglienhe.png", key: "wellness" },
                ].map((item, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                    <div className="group cursor-pointer flex flex-col h-full">
                      <div className="relative h-[160px] lg:h-[180px] w-full overflow-hidden rounded-[20px] mb-4 shrink-0">
                        <Image src={item.img} alt={item.key} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h3 className="font-bold text-[15px] lg:text-[16px] mb-2 group-hover:text-teal-600 transition-colors text-slate-800 leading-tight">{t(`solutions.cards.${item.key}.title`)}</h3>
                        <p className="text-[12px] lg:text-[13px] text-slate-500 leading-relaxed mt-auto pr-2">{t(`solutions.cards.${item.key}.desc`)}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button variant="outline" className="h-[48px] px-8 rounded-[10px] border-teal-600 text-teal-600 font-bold hover:bg-teal-50 hover:text-teal-700 hover:border-teal-700">
                  {t("solutions.viewAllServices")}
                </Button>
              </div>
            </div>

            {/* Right: International Patients Card */}
            <motion.div
              className="lg:w-[45%] shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F4F9FC] rounded-[24px] overflow-hidden h-full flex flex-col relative border border-slate-100">
                {/* Background image for right card */}
                <div className="absolute right-0 top-0 w-[55%] h-full z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4F9FC] via-[#F4F9FC]/60 to-transparent z-10"></div>
                  <Image src="/anh2trangchu.png" alt="International Patient Support" fill className="object-cover object-right z-0" />
                </div>

                <div className="p-8 lg:p-10 flex-1 z-20 relative w-full lg:w-[60%] flex flex-col justify-center">
                  <h2 className="text-[1.5rem] lg:text-[1.75rem] font-bold text-[#1B3A6B] mb-2 leading-tight">{t("solutions.international.title")}</h2>
                  <p className="text-[14px] text-slate-700 mb-8 max-w-[280px] leading-relaxed">{t("solutions.international.desc")}</p>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-[36px] h-[36px] rounded-full border border-[#1B3A6B]/20 flex items-center justify-center text-[#1B3A6B] shrink-0">
                        <Shield className="w-[18px] h-[18px]" />
                      </div>
                      <div className="pt-0.5">
                        <span className="text-[14px] font-bold text-[#1B3A6B] block leading-tight mb-1">{t("solutions.international.feature1")}</span>
                        <span className="text-[13px] text-slate-500 block leading-tight">{t("solutions.international.feature1Desc")}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-[36px] h-[36px] rounded-full border border-[#1B3A6B]/20 flex items-center justify-center text-[#1B3A6B] shrink-0">
                        <Activity className="w-[18px] h-[18px]" />
                      </div>
                      <div className="pt-0.5">
                        <span className="text-[14px] font-bold text-[#1B3A6B] block leading-tight mb-1">{t("solutions.international.feature2")}</span>
                        <span className="text-[13px] text-slate-500 block leading-tight">{t("solutions.international.feature2Desc")}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-[36px] h-[36px] rounded-full border border-[#1B3A6B]/20 flex items-center justify-center text-[#1B3A6B] shrink-0">
                        <Users className="w-[18px] h-[18px]" />
                      </div>
                      <div className="pt-0.5">
                        <span className="text-[14px] font-bold text-[#1B3A6B] block leading-tight mb-1">{t("solutions.international.feature3")}</span>
                        <span className="text-[13px] text-slate-500 block leading-tight">{t("solutions.international.feature3Desc")}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-[36px] h-[36px] rounded-full border border-[#1B3A6B]/20 flex items-center justify-center text-[#1B3A6B] shrink-0">
                        <Heart className="w-[18px] h-[18px]" />
                      </div>
                      <div className="pt-0.5">
                        <span className="text-[14px] font-bold text-[#1B3A6B] block leading-tight mb-1">{t("solutions.international.feature4")}</span>
                        <span className="text-[13px] text-slate-500 block leading-tight">{t("solutions.international.feature4Desc")}</span>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-10 bg-[#164482] hover:bg-[#103463] text-white font-bold rounded-xl px-8 h-[48px] text-[14px] shadow-lg shadow-[#164482]/20 relative z-10">
                    {t("solutions.international.learnMore")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="pt-10 pb-24 bg-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-8 border-t border-slate-100">
            {/* Left: Trust text + stats */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14">
              <div className="max-w-[200px]">
                <p className="text-[15px] font-bold text-slate-800 leading-snug whitespace-pre-line">
                  {t("trust.heading")}
                </p>
              </div>
              <div className="flex flex-wrap gap-8 lg:gap-14 text-left">
                <div>
                  <div className="text-[2.25rem] font-bold text-teal-600 leading-none mb-2">1M+</div>
                  <div className="text-[13px] text-slate-500 font-semibold">{t("trust.users")}</div>
                </div>
                <div>
                  <div className="text-[2.25rem] font-bold text-teal-600 leading-none mb-2">500+</div>
                  <div className="text-[13px] text-slate-500 font-semibold">{t("trust.experts")}</div>
                </div>
                <div>
                  <div className="text-[2.25rem] font-bold text-teal-600 leading-none mb-2">100+</div>
                  <div className="text-[13px] text-slate-500 font-semibold whitespace-pre-line">{t("trust.hospitals")}</div>
                </div>
                <div>
                  <div className="text-[2.25rem] font-bold text-teal-600 leading-none mb-2">10+</div>
                  <div className="text-[13px] text-slate-500 font-semibold">{t("trust.countries")}</div>
                </div>
              </div>
            </div>

            {/* Right: Partner logos */}
            <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-end shrink-0">
              <div className="flex items-center">
                <span className="font-bold text-[22px] text-[#005BAA]">VINMEC</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[24px] text-rose-600 font-bold">&#10084;</span>
                <span className="text-[17px] font-bold text-slate-700 leading-none">Hồng Ngọc<br /><span className="text-[10px] font-normal text-slate-400">Hospital</span></span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-[24px] text-[#00A651]">ta</span>
                <span className="text-[11px] text-slate-500 leading-none font-medium">Tâm Anh<br />Hospital</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-[20px] text-rose-600">NIHBT</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-[20px] text-teal-700">NHT</span>
              </div>
              <Link href="/services" className="text-[14px] text-teal-600 font-bold border-2 border-teal-200 rounded-[10px] px-6 py-3 hover:bg-teal-50 transition-colors whitespace-nowrap ml-4">
                {t("trust.viewPartners")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
