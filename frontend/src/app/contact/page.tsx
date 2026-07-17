"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, MessageCircle, Mail, MapPin, Calendar, Clock, ChevronDown, CheckCircle2, ChevronRight, User, ClipboardList, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/i18n/provider";

export default function ContactPage() {
   const [activeFaq, setActiveFaq] = useState<number | null>(0);
   const { t } = useTranslation();

   const faqs = [
      { q: "ToplifeAI cung cấp những dịch vụ gì?", a: "ToplifeAI cung cấp nền tảng chăm sóc sức khỏe toàn diện tích hợp AI, bao gồm: phân tích gene, hồ sơ sức khỏe số, tư vấn trực tuyến với bác sĩ, và các chương trình chăm sóc sức khỏe cá nhân hóa." },
      { q: "Làm thế nào để đặt lịch khám với bác sĩ?", a: "Bạn có thể đặt lịch thông qua ứng dụng ToplifeAI, website tại mục 'Bác sĩ & chuyên gia', hoặc gọi trực tiếp đến Hotline +84 888 123 456 để được hỗ trợ." },
      { q: "Tôi có thể tư vấn từ xa không?", a: "Hoàn toàn có thể. Nền tảng của chúng tôi hỗ trợ tư vấn video call trực tuyến chất lượng cao với các bác sĩ và chuyên gia y tế trên toàn cầu." },
      { q: "Thông tin cá nhân của tôi có được bảo mật không?", a: "ToplifeAI áp dụng tiêu chuẩn bảo mật y tế quốc tế (HIPAA, GDPR) và mã hóa end-to-end cho mọi dữ liệu sức khỏe của bạn." },
      { q: "ToplifeAI có hỗ trợ bệnh nhân quốc tế không?", a: "Có. Chúng tôi có chương trình riêng cho bệnh nhân quốc tế bao gồm phiên dịch, hỗ trợ visa y tế, đặt vé máy bay và nơi lưu trú." },
   ];

   return (
      <div className="flex flex-col min-h-screen bg-white">
         {/* Hero & Form Section */}
         <section className="relative pb-16 lg:pb-24 overflow-hidden bg-linear-to-b from-[#F0F7F9] to-[#E3F2F3]">
            {/* Background Image */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none flex items-center">
               <Image src="/anh1tranglienhe.png" alt="Customer Support Background" width={2560} height={1000} className="w-full h-auto opacity-50 lg:opacity-100 scale-[1.12] origin-left" priority unoptimized />
            </div>

            <div className="max-w-384 pt-8 w-full mx-auto px-6 lg:px-12 relative z-10">
               <div className="absolute flex items-center text-[13px] text-slate-500 mb-8 font-medium">
                  <Link href="/" className="hover:text-teal-600 transition-colors">{t("nav.home")}</Link>
                  <span className="mx-2">&rsaquo;</span>
                  <span className="text-slate-800">{t("contact.breadcrumb")}</span>
               </div>

               <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 lg:items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6 }}
                     className="lg:w-[45%] xl:w-[40%] flex flex-col pt-2 pb-8 lg:pb-16 relative z-20"
                  >
                     <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold tracking-tight text-[#1B3A6B] leading-[1.1] mb-3">
                        {t("contact.title")}
                     </h1>
                     <h2 className="text-[1.75rem] lg:text-[2.25rem] font-bold text-teal-600 leading-tight mb-6 max-w-lg">
                        {t("contact.subtitle")}
                     </h2>
                     <p className="text-[15px] lg:text-[16px] text-slate-600 max-w-105 leading-relaxed mb-8 font-medium">
                        {t("contact.desc")}
                     </p>
                     <div className="space-y-4 relative z-20">
                        <div className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                           </div>
                           <span className="text-[14px] lg:text-[15px] text-[#1B3A6B] font-bold">{t("contact.features.f1")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                           </div>
                           <span className="text-[14px] lg:text-[15px] text-[#1B3A6B] font-bold">{t("contact.features.f2")}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                           </div>
                           <span className="text-[14px] lg:text-[15px] text-[#1B3A6B] font-bold">{t("contact.features.f3")}</span>
                        </div>
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="lg:w-[45%] xl:w-[40%] relative z-30"
                  >
                     <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-white p-8 lg:p-10 rounded-[20px]">
                        <h3 className="text-[20px] font-bold text-[#1B3A6B] mb-2">{t("contact.form.title")}</h3>
                        <p className="text-[13px] text-slate-500 mb-8 font-medium">{t("contact.form.desc")}</p>

                        <form className="space-y-4">
                           <div className="relative">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                 <User className="w-4 h-4" />
                              </div>
                              <Input placeholder={t("contact.form.name")} className="pl-11 h-[48px] rounded-[8px] bg-white border-slate-200 text-[14px] focus-visible:ring-teal-500" required />
                           </div>
                           <div className="relative">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                 <Mail className="w-4 h-4" />
                              </div>
                              <Input type="email" placeholder={t("contact.form.email")} className="pl-11 h-[48px] rounded-[8px] bg-white border-slate-200 text-[14px] focus-visible:ring-teal-500" required />
                           </div>
                           <div className="relative">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                 <Phone className="w-4 h-4" />
                              </div>
                              <Input type="tel" placeholder={t("contact.form.phone")} className="pl-11 h-[48px] rounded-[8px] bg-white border-slate-200 text-[14px] focus-visible:ring-teal-500" required />
                           </div>
                           <div className="relative flex items-center">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                                 <ClipboardList className="w-4 h-4" />
                              </div>
                              <select defaultValue="" className="w-full pl-11 pr-10 h-[48px] rounded-[8px] bg-white border border-slate-200 text-[14px] text-slate-500 appearance-none outline-none focus:ring-1 focus:ring-teal-500 transition-shadow">
                                 <option value="" disabled>{t("contact.form.subject.placeholder")}</option>
                                 <option value="tu-van">{t("contact.form.subject.opt1")}</option>
                                 <option value="gene">{t("contact.form.subject.opt2")}</option>
                                 <option value="hop-tac">{t("contact.form.subject.opt3")}</option>
                                 <option value="khac">{t("contact.form.subject.opt4")}</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                           </div>
                           <div className="relative">
                              <div className="absolute left-4 top-4 text-slate-400">
                                 <MessageCircle className="w-4 h-4" />
                              </div>
                              <textarea className="w-full min-h-[100px] pl-11 pr-4 py-3 rounded-[8px] border border-slate-200 bg-white text-[14px] text-slate-600 outline-none focus:ring-1 focus:ring-teal-500 transition-shadow resize-none" placeholder={t("contact.form.message")} required />
                           </div>

                           <div className="flex items-start gap-3 py-2">
                              <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500" required />
                              <label htmlFor="terms" className="text-[12px] text-slate-500 font-medium">
                                 {t("contact.form.terms")} <Link href="#" className="text-teal-600 hover:underline font-bold">{t("contact.form.policy")}</Link>
                              </label>
                           </div>

                           <Button className="w-full h-[48px] text-[15px] font-bold bg-teal-600 hover:bg-teal-700 rounded-[8px] shadow-[0_4px_14px_0_rgba(13,148,136,0.39)] transition-shadow">
                              {t("contact.form.submit")}
                           </Button>
                        </form>
                     </Card>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Quick Contact Channels */}
         <section className="py-20 bg-white">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 text-center"
            >
               <h2 className="text-[2rem] font-bold text-[#1B3A6B] mb-12">{t("contact.quickContact.title")}</h2>

               <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                  {[
                     { icon: <Phone className="w-6 h-6 text-teal-600" />, title: t("contact.quickContact.hotline.title"), value: "+84 888 123 456", sub: t("contact.quickContact.hotline.sub"), subIcon: <Clock className="w-3.5 h-3.5" /> },
                     { icon: <MessageCircle className="w-6 h-6 text-teal-600" />, title: t("contact.quickContact.zalo.title"), value: "ToplifeAI Official", sub: t("contact.quickContact.zalo.sub"), subIcon: <CheckCircle2 className="w-3.5 h-3.5" /> },
                     { icon: <Mail className="w-6 h-6 text-teal-600" />, title: t("contact.quickContact.email.title"), value: "hello@toplifeai.com", sub: t("contact.quickContact.email.sub"), subIcon: <Clock className="w-3.5 h-3.5" /> },
                     { icon: <MessageCircle className="w-6 h-6 text-teal-600" />, title: t("contact.quickContact.whatsapp.title"), value: "+84 888 123 456", sub: t("contact.quickContact.whatsapp.sub"), subIcon: <CheckCircle2 className="w-3.5 h-3.5" /> },
                     { icon: <Calendar className="w-6 h-6 text-teal-600" />, title: t("contact.quickContact.booking.title"), value: t("contact.quickContact.booking.value"), sub: t("contact.quickContact.booking.sub"), isLink: true, linkText: t("contact.quickContact.booking.linkText") },
                  ].map((item, idx) => (
                     <Card key={idx} className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[20px] transition-all bg-white cursor-pointer group flex flex-col h-full">
                        <CardContent className="p-8 flex flex-col items-center text-center flex-1 justify-center">
                           <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                              {item.icon}
                           </div>
                           <h4 className="font-bold text-[16px] text-[#1B3A6B] mb-2">{item.title}</h4>
                           <p className={`font-bold text-[14px] leading-snug ${item.isLink ? 'text-slate-600 mb-1' : 'text-teal-600 mb-3'}`}>{item.value}</p>

                           {item.isLink ? (
                              <>
                                 <span className="text-[12px] text-slate-500 font-medium mb-4">{item.sub}</span>
                                 <span className="text-[13px] text-teal-600 font-bold mt-auto">{item.linkText}</span>
                              </>
                           ) : (
                              <div className="flex items-center gap-1.5 text-slate-400 mt-auto">
                                 {item.subIcon}
                                 <span className="text-[12px] font-medium">{item.sub}</span>
                              </div>
                           )}
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </motion.div>
         </section>

         {/* Offices */}
         <section className="py-20 bg-[#F8FBFC]">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 text-center"
            >
               <h2 className="text-[2rem] font-bold text-[#1B3A6B] mb-12">{t("contact.offices.title")}</h2>

               <div className="grid lg:grid-cols-3 gap-8 text-left mb-12">
                  {[
                     { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: t("contact.offices.headquarters"), city: "Hà Nội", address: "Tầng 12, Tòa nhà Center Building,\n1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội", phone: "+84 888 123 456", email: "hanoi@toplifeai.com", time: "Thứ 2 - Thứ 7: 8:00 - 17:30" },
                     { img: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: t("contact.offices.office"), city: "TP. Hồ Chí Minh", address: "Tầng 9, Tòa nhà Mplaza Saigon,\n39 Lê Duẩn, Quận 1, TP. Hồ Chí Minh", phone: "+84 888 123 456", email: "hcm@toplifeai.com", time: "Thứ 2 - Thứ 7: 8:00 - 17:30" },
                     { img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", tag: t("contact.offices.international"), city: "Singapore", address: "20 Collyer Quay, #09-01\nSingapore 049319", phone: "+65 9082 1883", email: "singapore@toplifeai.com", time: "Thứ 2 - Thứ 6: 9:00 - 18:00" },
                  ].map((office, idx) => (
                     <Card key={idx} className="overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] bg-white group">
                        <div className="relative h-[200px] w-full overflow-hidden">
                           <Image src={office.img} alt={office.city} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-[11px] font-bold rounded-[6px] uppercase tracking-wider">
                              {office.tag}
                           </div>
                        </div>
                        <CardContent className="p-8 space-y-4">
                           <h3 className="font-bold text-[20px] text-[#1B3A6B] mb-2">{office.city}</h3>
                           <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                              <span className="text-[13px] text-slate-600 font-medium whitespace-pre-line leading-relaxed">{office.address}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-teal-600 shrink-0" />
                              <span className="text-[13px] text-slate-600 font-medium">{office.phone}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5 text-teal-600 shrink-0" />
                              <span className="text-[13px] text-slate-600 font-medium">{office.email}</span>
                           </div>
                           <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="text-[12px] text-slate-500 font-medium">{office.time}</span>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>

               <Button variant="outline" className="h-[48px] rounded-[12px] border-teal-600 px-8 text-teal-600 font-bold hover:bg-teal-50 transition-colors">{t("contact.offices.viewAll")}</Button>
            </motion.div>
         </section>

         {/* FAQ & Map */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="flex flex-col lg:flex-row gap-16">
                  {/* FAQ */}
                  <div className="lg:w-1/2">
                     <h2 className="text-[2rem] font-bold text-[#1B3A6B] mb-8">{t("contact.faqMap.faqTitle")}</h2>
                     <div className="space-y-4 border border-slate-100 rounded-[20px] p-2 bg-[#FDFDFD]">
                        {faqs.map((faq, idx) => (
                           <div key={idx} className="border-b border-slate-100 last:border-0">
                              <button
                                 className="w-full text-left px-4 py-4 flex items-center justify-between transition-colors"
                                 onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                              >
                                 <span className="font-bold text-[15px] text-[#1B3A6B] pr-4">{faq.q}</span>
                                 <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                              </button>
                              <AnimatePresence initial={false}>
                                 {activeFaq === idx && (
                                    <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "auto", opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       transition={{ duration: 0.25, ease: "easeInOut" }}
                                       className="overflow-hidden"
                                    >
                                       <div className="px-4 pb-5 text-[14px] text-slate-600 font-medium leading-relaxed">
                                          {faq.a}
                                       </div>
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        ))}
                     </div>
                     <Button variant="link" className="text-teal-600 font-bold p-0 mt-6 text-[14px]">{t("contact.faqMap.viewMore")}</Button>
                  </div>

                  {/* Map Placeholder */}
                  <div className="lg:w-1/2">
                     <h2 className="text-[2rem] font-bold text-[#1B3A6B] mb-8">{t("contact.faqMap.mapTitle")}</h2>
                     <div className="bg-slate-100 rounded-[24px] h-[400px] w-full relative overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center">
                        {/* Replace with actual embedded map or static map image */}
                        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=21.0026,105.8058&zoom=14&size=800x400&maptype=roadmap&markers=color:teal%7C21.0026,105.8058&key=YOUR_API_KEY')] bg-cover bg-center opacity-40 grayscale contrast-125"></div>

                        {/* Mock map popup overlay */}
                        <div className="absolute bg-white p-5 rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 z-10 w-72 translate-x-12 -translate-y-8">
                           <h4 className="font-bold text-[14px] text-[#1B3A6B] mb-1">{t("contact.faqMap.hq")}</h4>
                           <p className="text-[12px] text-slate-500 font-medium mb-3">{t("contact.faqMap.address")}</p>
                           <a href="#" className="text-[13px] font-bold text-teal-600 flex items-center">{t("contact.faqMap.directions")} <ChevronRight className="w-3.5 h-3.5 ml-1" /></a>
                        </div>
                        <MapPin className="absolute w-12 h-12 text-teal-600 z-10 -translate-y-1/2" />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Final CTA */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="bg-[#0F766E] rounded-[24px] p-8 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
                  {/* Left Content */}
                  <div className="relative z-10 space-y-6 max-w-xl text-white">
                     <h2 className="text-[2.5rem] font-bold leading-tight">{t("contact.cta.title")}</h2>
                     <p className="text-teal-50 text-[15px] font-medium leading-relaxed">{t("contact.cta.subtitle")}</p>
                     <ul className="space-y-4 mt-6 text-[15px] text-white font-medium">
                        <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-white text-[#0F766E] flex items-center justify-center shrink-0"><CheckCircle2 className="w-3.5 h-3.5" /></div> {t("contact.cta.f1")}</li>
                        <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-white text-[#0F766E] flex items-center justify-center shrink-0"><CheckCircle2 className="w-3.5 h-3.5" /></div> {t("contact.cta.f2")}</li>
                        <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full bg-white text-[#0F766E] flex items-center justify-center shrink-0"><CheckCircle2 className="w-3.5 h-3.5" /></div> {t("contact.cta.f3")}</li>
                     </ul>
                     <div className="pt-6">
                        <Button className="h-[52px] px-8 bg-white text-[#0F766E] hover:bg-slate-100 font-bold text-[15px] rounded-[12px] shadow-lg">
                           {t("contact.cta.button")}
                        </Button>
                     </div>
                  </div>

                  {/* Right Image */}
                  <div className="relative w-full lg:w-[50%] h-[300px] lg:h-[400px] z-10 lg:absolute lg:right-0 lg:bottom-0">
                     <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E] via-[#0F766E]/20 to-transparent z-10 w-[30%]"></div>
                     <Image src="/anh1trangbacsi&chuyengia.png" alt="Doctors" fill className="object-cover object-bottom lg:object-[60%_bottom]" />
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
}
