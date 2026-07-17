"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, ChevronDown, Calendar, MessageSquare, ChevronRight, Baby, Sparkles, Bone, Scissors, HeartPulse, Activity, Ear, Smile, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/provider";

export default function DoctorsPage() {
   const [doctors, setDoctors] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const { t } = useTranslation();

   useEffect(() => {
      const fetchDoctors = async () => {
         try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/public/doctors`);
            if (res.ok) {
               const data = await res.json();
               setDoctors(data);
            }
         } catch (error) {
            console.error("Failed to fetch doctors:", error);
         } finally {
            setLoading(false);
         }
      };
      fetchDoctors();
   }, []);

   const featuredDoctors = doctors.slice(0, 5);
   const allDoctors = doctors;

   return (
      <div className="flex flex-col min-h-screen bg-slate-50">
         {/* Hero Section */}
         <section className="relative bg-[#F8FBFC] overflow-hidden">
            <div className="max-w-[1536px] w-full mx-auto pl-6 lg:pl-12 relative z-10">
               <div className="absolute mt-5 flex items-center text-[13px] text-slate-500 mb-10">
                  <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
                  <span className="mx-2 text-slate-400">&rsaquo;</span>
                  <span className="text-teal-600 font-semibold">Bác sĩ & chuyên gia</span>
               </div>

               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="lg:w-[45%] space-y-6 pt-20 pb-16">
                     <h1 className="text-[1.75rem] lg:text-[2.5rem] font-bold tracking-tight text-[#1B3A6B] leading-[1.2]">
                        Đội ngũ bác sĩ & chuyên gia <br className="hidden lg:block" />
                        <span className="text-teal-600">hàng đầu Việt Nam</span>
                     </h1>
                     <p className="text-[15px] lg:text-[16px] text-slate-600 max-w-[500px] leading-relaxed">
                        ToplifeAI quy tụ đội ngũ bác sĩ, chuyên gia y khoa đầu ngành từ các bệnh viện lớn tại Việt Nam, giàu kinh nghiệm lâm sàng và tận tâm với người bệnh.
                     </p>
                     <div className="flex items-center gap-8 pt-6">
                        <div>
                           <div className="text-[28px] font-bold text-teal-600 leading-tight">500+</div>
                           <div className="text-[12px] text-slate-500 font-medium">Bác sĩ & chuyên gia</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                           <div className="text-[28px] font-bold text-teal-600 leading-tight">20+</div>
                           <div className="text-[12px] text-slate-500 font-medium">Chuyên khoa</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                           <div className="text-[28px] font-bold text-teal-600 leading-tight">50+</div>
                           <div className="text-[12px] text-slate-500 font-medium">Bệnh viện đối tác</div>
                        </div>
                        <div className="w-px h-10 bg-slate-200"></div>
                        <div>
                           <div className="text-[28px] font-bold text-teal-600 leading-tight">10.000+</div>
                           <div className="text-[12px] text-slate-500 font-medium">Khách hàng quốc tế</div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute lg:w-[55%] relative w-full aspect-[16/9] lg:aspect-auto lg:h-[500px]">
                     <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[130%] z-0" style={{ maskImage: "linear-gradient(to right, transparent, black 15%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)" }}>
                        <Image src="/anh1trangbacsi&chuyengia.png" alt="Đội ngũ bác sĩ" fill className="object-cover object-right-top" priority />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Search Bar */}
         <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 -mt-16 relative z-10">
            <div className="bg-white rounded-[24px] p-6 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-5">
               <div className="flex flex-col md:flex-row gap-3 items-center w-full">
                  <div className="relative w-full flex-1">
                     <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                     <Input placeholder="Tìm tên bác sĩ, chuyên khoa, bệnh viện..." className="pl-14 h-[52px] border border-slate-100 rounded-[12px] focus-visible:ring-0 text-[14px] text-slate-700 placeholder:text-slate-400 shadow-sm" />
                  </div>
                  <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto">
                     <Button variant="outline" className="h-[52px] px-5 w-full lg:w-auto justify-between gap-3 text-[14px] font-medium text-slate-600 border-slate-100 rounded-[12px] hover:bg-slate-50 shadow-sm">
                        Chuyên khoa <ChevronDown className="w-4 h-4 text-slate-400" />
                     </Button>
                     <Button variant="outline" className="h-[52px] px-5 w-full lg:w-auto justify-between gap-3 text-[14px] font-medium text-slate-600 border-slate-100 rounded-[12px] hover:bg-slate-50 shadow-sm">
                        Nơi công tác <ChevronDown className="w-4 h-4 text-slate-400" />
                     </Button>
                     <Button className="h-[52px] px-10 bg-teal-600 hover:bg-teal-700 rounded-[12px] w-full lg:w-auto text-[15px] font-bold text-white shadow-md shadow-teal-600/20">Tìm kiếm</Button>
                  </div>
               </div>
            </div>
         </div>

         {/* Featured Doctors */}
         <section className="py-12 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="flex justify-between items-center mb-8">
                  <h2 className="text-[1.75rem] font-bold text-[#1B3A6B]">Bác sĩ & chuyên gia nổi bật</h2>
                  <Button variant="link" className="text-teal-600 font-bold hover:text-teal-700">Xem tất cả bác sĩ <ChevronRight className="w-4 h-4 ml-1" /></Button>
               </div>

               {loading ? (
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                     {[1, 2, 3, 4, 5].map((idx) => (
                        <div key={idx} className="animate-pulse bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[400px]">
                           <div className="h-[220px] bg-slate-200"></div>
                           <div className="p-5 flex-1 flex flex-col">
                              <div className="h-5 bg-slate-200 rounded w-3/4 mb-2"></div>
                              <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
                              <div className="h-3 bg-slate-200 rounded w-full mb-2"></div>
                              <div className="h-3 bg-slate-200 rounded w-2/3 mb-4"></div>
                              <div className="h-10 bg-slate-200 rounded mt-auto"></div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                     {featuredDoctors.map((doc, idx) => (
                        <div key={idx} className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-teal-900/5 transition-all overflow-hidden flex flex-col group">
                           <div className="relative h-[220px] w-full bg-[#EEF2F6]">
                              <Image src={doc.avatarUrl || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"} alt={doc.firstName} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                           </div>
                           <div className="p-5 flex-1 flex flex-col">
                              <h3 className="font-bold text-[#1B3A6B] text-[15px] mb-1 leading-tight group-hover:text-teal-600 transition-colors">BS. {doc.firstName} {doc.lastName}</h3>
                              <p className="text-teal-600 font-bold text-[12px] mb-2">{doc.doctorProfile?.specialty}</p>
                              <div className="flex items-center gap-1.5 mb-4">
                                 <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                 <span className="text-[12px] font-bold text-slate-700">5.0</span>
                                 <span className="text-[11px] text-slate-400">(N/A đánh giá)</span>
                              </div>
                              <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3 mb-5 flex-1">
                                 {doc.doctorProfile?.about}
                              </p>
                              <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 rounded-[10px] h-[40px] font-bold text-[13px]">Xem hồ sơ</Button>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </section>

         {/* All Doctors */}
         <section className="py-12 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <h2 className="text-[1.75rem] font-bold text-[#1B3A6B] mb-8">Tất cả bác sĩ & chuyên gia</h2>
               {loading ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                     {[1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
                        <div key={idx} className="animate-pulse bg-white p-4 rounded-[20px] border border-slate-100 flex items-center gap-4">
                           <div className="w-[68px] h-[68px] rounded-full bg-slate-200 shrink-0"></div>
                           <div className="flex-1 space-y-2">
                              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                              <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                           </div>
                        </div>
                     ))}
                  </div>
               ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                     {allDoctors.map((doc, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-teal-900/5 transition-all cursor-pointer group flex items-center gap-4">
                           <div className="w-[68px] h-[68px] rounded-full overflow-hidden bg-[#EEF2F6] shrink-0 relative">
                              <Image src={doc.avatarUrl || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"} alt={doc.firstName} fill className="object-cover" />
                           </div>
                           <div className="flex-1">
                              <h4 className="font-bold text-[14px] text-[#1B3A6B] group-hover:text-teal-600 transition-colors leading-tight mb-1">BS. {doc.firstName} {doc.lastName}</h4>
                              <p className="text-teal-600 font-bold text-[11px] mb-1">{doc.doctorProfile?.specialty}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               )}
            </div>
         </section>
      </div>
   );
}
