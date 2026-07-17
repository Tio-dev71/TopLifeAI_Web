"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Target, Eye, Diamond, Users, Building, Globe, ThumbsUp, Brain, Database, ShieldCheck, Activity, HeartPulse, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/provider";

export default function AboutPage() {
   const { t } = useTranslation();
   
   const leadership = [
      { name: t("about.leadership.leaders.0.name"), title: t("about.leadership.leaders.0.title"), desc: t("about.leadership.leaders.0.desc"), img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: t("about.leadership.leaders.1.name"), title: t("about.leadership.leaders.1.title"), desc: t("about.leadership.leaders.1.desc"), img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: t("about.leadership.leaders.2.name"), title: t("about.leadership.leaders.2.title"), desc: t("about.leadership.leaders.2.desc"), img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: t("about.leadership.leaders.3.name"), title: t("about.leadership.leaders.3.title"), desc: t("about.leadership.leaders.3.desc"), img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: t("about.leadership.leaders.4.name"), title: t("about.leadership.leaders.4.title"), desc: t("about.leadership.leaders.4.desc"), img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
   ];

   return (
      <div className="flex flex-col min-h-screen bg-[#F8FBFC]">
         {/* Hero Section */}
         <section className="relative pb-20 pt-8 lg:pb-28 overflow-hidden bg-gradient-to-r from-[#F0F7F9] to-transparent">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 relative z-10">
               {/* Breadcrumb */}
               <div className="flex items-center text-[13px] text-slate-500 mb-8 font-medium">
                  <Link href="/" className="hover:text-teal-600 transition-colors">{t("nav.home")}</Link>
                  <span className="mx-2">&rsaquo;</span>
                  <span className="text-slate-800">{t("about.breadcrumb")}</span>
               </div>

               <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2 max-w-2xl relative z-20">
                     <h1 className="text-[3rem] lg:text-[4rem] font-bold tracking-tight text-slate-800 leading-[1.1] mb-6">
                        {t("about.title")} <span className="text-teal-600">{t("about.titleHighlight")}</span>
                     </h1>
                     <h2 className="text-[1.5rem] lg:text-[1.75rem] font-bold text-[#1B3A6B] mb-6 leading-tight whitespace-pre-line">
                        {t("about.subtitle")}
                     </h2>
                     <p className="text-slate-600 text-[15px] mb-10 leading-relaxed max-w-xl">
                        {t("about.desc")}
                     </p>
                     <Button variant="outline" className="h-[52px] px-6 rounded-[12px] border-teal-600 text-teal-700 hover:bg-teal-50 font-bold shadow-sm">
                        <PlayCircle className="w-5 h-5 mr-2 text-teal-600" /> {t("about.watchVideo")}
                     </Button>
                  </div>
               </div>
            </div>

            {/* Background Image positioned to the right */}
            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 opacity-30 lg:opacity-100 pointer-events-none">
               <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7F9] via-[#F0F7F9]/80 lg:via-transparent to-transparent z-10 w-[60%] lg:w-[30%]"></div>
               <Image src="/anhtrang1Vechungtoi.png" alt="Family and Doctors" fill className="object-cover lg:object-contain object-right" priority />
            </div>
         </section>

         {/* Core Values */}
         <section className="py-12 relative z-20 -mt-16">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-[24px]">
                     <CardContent className="p-8 lg:p-10">
                        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 border border-teal-100">
                           <Target className="w-7 h-7" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#1B3A6B] mb-4">{t("about.mission.title")}</h3>
                        <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{t("about.mission.desc")}</p>
                     </CardContent>
                  </Card>
                  <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-[24px]">
                     <CardContent className="p-8 lg:p-10">
                        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 border border-teal-100">
                           <Eye className="w-7 h-7" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#1B3A6B] mb-4">{t("about.vision.title")}</h3>
                        <p className="text-[14px] text-slate-600 leading-relaxed font-medium">{t("about.vision.desc")}</p>
                     </CardContent>
                  </Card>
                  <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white rounded-[24px]">
                     <CardContent className="p-8 lg:p-10">
                        <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 text-teal-600 border border-teal-100">
                           <Diamond className="w-7 h-7" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[#1B3A6B] mb-4">{t("about.coreValues.title")}</h3>
                        <ul className="space-y-3 text-[14px] text-slate-600 font-medium">
                           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div> {t("about.coreValues.v1")}</li>
                           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div> {t("about.coreValues.v2")}</li>
                           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div> {t("about.coreValues.v3")}</li>
                           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div> {t("about.coreValues.v4")}</li>
                        </ul>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </section>

         {/* Stats Block */}
         <section className="py-12">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="bg-[#0A2534] rounded-[24px] p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
                  <h2 className="text-[18px] font-bold mb-10 text-white relative z-10">{t("about.stats.title")}</h2>

                  {/* Faint background pattern */}
                  <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none">
                     <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0,100 C20,80 40,20 100,0 L100,100 Z" fill="white" />
                     </svg>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-white/10 relative z-10">
                     <div className="space-y-3 px-4">
                        <Users className="w-10 h-10 text-teal-400 mx-auto mb-6" strokeWidth={1.5} />
                        <div className="text-[2rem] lg:text-[2.5rem] font-bold text-white">1M+</div>
                        <div className="text-[13px] text-slate-300 font-medium">{t("about.stats.users")}</div>
                     </div>
                     <div className="space-y-3 px-4 border-white/10">
                        <UserPlus className="w-10 h-10 text-teal-400 mx-auto mb-6" strokeWidth={1.5} />
                        <div className="text-[2rem] lg:text-[2.5rem] font-bold text-white">500+</div>
                        <div className="text-[13px] text-slate-300 font-medium">{t("about.stats.doctors")}</div>
                     </div>
                     <div className="space-y-3 px-4 border-white/10">
                        <Building className="w-10 h-10 text-teal-400 mx-auto mb-6" strokeWidth={1.5} />
                        <div className="text-[2rem] lg:text-[2.5rem] font-bold text-white">100+</div>
                        <div className="text-[13px] text-slate-300 font-medium">{t("about.stats.partners")}</div>
                     </div>
                     <div className="space-y-3 px-4 border-white/10">
                        <Globe className="w-10 h-10 text-teal-400 mx-auto mb-6" strokeWidth={1.5} />
                        <div className="text-[2rem] lg:text-[2.5rem] font-bold text-white">10+</div>
                        <div className="text-[13px] text-slate-300 font-medium">{t("about.stats.countries")}</div>
                     </div>
                     <div className="space-y-3 px-4 border-l-0 md:border-l border-white/10">
                        <ThumbsUp className="w-10 h-10 text-teal-400 mx-auto mb-6" strokeWidth={1.5} />
                        <div className="text-[2rem] lg:text-[2.5rem] font-bold text-white">98%</div>
                        <div className="text-[13px] text-slate-300 font-medium">{t("about.stats.satisfaction")}</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Why Choose Us */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <h2 className="text-[2rem] font-bold text-[#1B3A6B] text-center mb-16">{t("about.whyChooseUs.title")}</h2>

               <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Left Image */}
                  <div className="lg:w-[40%] relative">
                     <div className="relative h-full min-h-[500px] w-full rounded-[24px] overflow-hidden shadow-sm border border-slate-100">
                        <Image src="/anh2vechungtoi.png" alt="Doctor smiling" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                     </div>
                     {/* Floating badge */}
                     <div className="absolute top-10 left-8 bg-white/95 backdrop-blur-md rounded-[16px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/50">
                        <p className="text-[11px] text-slate-500 font-bold uppercase mb-1">AI Health Score</p>
                        <div className="text-[2rem] font-bold text-teal-600 flex items-baseline">87<span className="text-[14px] text-slate-400 font-medium ml-1">/100</span></div>
                     </div>
                     <div className="absolute bottom-10 right-8 bg-white/95 backdrop-blur-md rounded-[16px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/50 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600"><ShieldCheck className="w-6 h-6" /></div>
                        <div>
                           <p className="text-[11px] text-slate-500 font-bold uppercase mb-1">Health Report</p>
                           <p className="text-[18px] font-bold text-teal-600">{t("about.whyChooseUs.healthReport")}</p>
                        </div>
                     </div>
                  </div>

                  {/* Right Content */}
                  <div className="lg:w-[60%] grid sm:grid-cols-2 gap-6">
                     {[
                        { icon: <Brain />, idx: 0 },
                        { icon: <Users />, idx: 1 },
                        { icon: <Database />, idx: 2 },
                        { icon: <ShieldCheck />, idx: 3 },
                        { icon: <Activity />, idx: 4 },
                        { icon: <HeartPulse />, idx: 5 },
                     ].map((item) => (
                        <Card key={item.idx} className="border border-slate-100 shadow-sm rounded-[20px] bg-[#FDFDFD] hover:shadow-md transition-shadow">
                           <CardContent className="p-6">
                              <div className="flex flex-col gap-4">
                                 <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                    {item.icon}
                                 </div>
                                 <div>
                                    <h4 className="font-bold text-[15px] text-[#1B3A6B] mb-2">{t(`about.whyChooseUs.features.${item.idx}.title`)}</h4>
                                    <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{t(`about.whyChooseUs.features.${item.idx}.desc`)}</p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Leadership */}
         <section className="py-20 bg-[#F8FBFC]">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <h2 className="text-[2rem] font-bold text-[#1B3A6B] text-center mb-16">{t("about.leadership.title")}</h2>

               <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {leadership.map((leader, idx) => (
                     <Card key={idx} className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col rounded-[24px] overflow-hidden bg-white">
                        <div className="relative h-[280px] w-full bg-slate-100">
                           <Image src={leader.img} alt={leader.name} fill className="object-cover object-top" />
                        </div>
                        <CardContent className="p-6 flex-1 flex flex-col items-center">
                           <h4 className="font-bold text-[16px] text-[#1B3A6B] mb-1">{leader.name}</h4>
                           <p className="text-[13px] font-bold text-teal-600 mb-4">{leader.title}</p>
                           <p className="text-[12px] text-slate-500 font-medium leading-relaxed mb-5 flex-1">{leader.desc}</p>
                           <a href="#" className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:bg-blue-50 transition-colors">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                           </a>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         {/* Partners */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <h2 className="text-[2rem] font-bold text-[#1B3A6B] text-center mb-12">{t("about.partners.title")}</h2>
               <div className="flex flex-wrap justify-center items-center gap-6">
                  {/* Simulated Logos in Boxes */}
                  <div className="w-[180px] h-[80px] rounded-[16px] border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                     <span className="font-bold text-xl text-slate-400">VINMEC</span>
                  </div>
                  <div className="w-[180px] h-[80px] rounded-[16px] border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow p-4 text-center">
                     <span className="font-bold text-sm text-slate-400 leading-tight">Bệnh viện<br />Nhi Trung ương</span>
                  </div>
                  <div className="w-[180px] h-[80px] rounded-[16px] border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                     <span className="font-bold text-xl text-slate-400">Tâm Anh</span>
                  </div>
                  <div className="w-[180px] h-[80px] rounded-[16px] border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                     <span className="font-bold text-xl text-slate-400">Hồng Ngọc</span>
                  </div>
                  <div className="w-[180px] h-[80px] rounded-[16px] border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
                     <span className="font-bold text-xl text-slate-400">NIHBT</span>
                  </div>
                  <div className="w-[180px] h-[80px] rounded-[16px] border border-slate-200 flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-teal-500 hover:text-teal-600 text-slate-600">
                     <span className="font-bold text-[14px]">{t("about.partners.viewAll")}</span>
                  </div>
               </div>
            </div>
         </section>

         {/* Timeline */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <h2 className="text-[2rem] font-bold text-[#1B3A6B] text-center mb-24 relative inline-block left-1/2 -translate-x-1/2">
                  {t("about.timeline.title")}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-teal-600 rounded-full"></div>
               </h2>

               <div className="relative max-w-5xl mx-auto px-4">
                  <div className="absolute top-[9px] left-[8%] right-[8%] h-[2px] bg-slate-100"></div>
                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                     {[0, 1, 2, 3, 4, 5].map((idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center">
                           <div className="w-5 h-5 rounded-full bg-teal-600 z-10 mb-6 shadow-[0_0_0_4px_rgba(13,148,136,0.1)]"></div>
                           <h4 className="font-bold text-[#1B3A6B] text-[18px] mb-2">{t(`about.timeline.steps.${idx}.year`)}</h4>
                           <p className="text-[12px] text-slate-500 font-medium px-2 leading-relaxed">{t(`about.timeline.steps.${idx}.title`)}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Footer */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="bg-[#0A2534] rounded-[24px] overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl relative">
                  {/* Content */}
                  <div className="p-10 lg:p-16 flex-1 text-white relative z-20 flex flex-col justify-center">
                     <h2 className="text-[2rem] lg:text-[2.5rem] font-bold mb-10 leading-tight whitespace-pre-line">
                        {t("about.cta.title")}
                     </h2>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-white text-[#0A2534] hover:bg-slate-100 rounded-[12px] h-[52px] px-8 font-bold text-[15px]">
                           {t("about.cta.explore")}
                        </Button>
                        <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 bg-transparent rounded-[12px] h-[52px] px-8 font-bold text-[15px]">
                           {t("about.cta.contact")}
                        </Button>
                     </div>
                  </div>

                  {/* Right Image */}
                  <div className="md:w-[45%] relative min-h-[300px]">
                     <div className="absolute inset-0 bg-gradient-to-r from-[#0A2534] via-[#0A2534]/50 to-transparent z-10 w-[40%]"></div>
                     <Image src="/anh2trangcongngheAI.png" alt="AI Body scan" fill className="object-cover object-right" />
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
}
