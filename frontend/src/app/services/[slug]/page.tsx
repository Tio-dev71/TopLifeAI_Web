"use client";

import { useEffect, useState, use } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, Stethoscope, Dna, Brain, Activity, Sparkles, HeartPulse, Pill, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/provider";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useTranslation();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Unwrapping params Promise in Next 15
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`http://localhost:3001/public/services/${slug}`);
        const data = await res.json();
        setService(data);
      } catch (error) {
        console.error("Failed to fetch service:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
        <div className="max-w-[1000px] mx-auto animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/3 mb-6"></div>
          <div className="h-[400px] bg-slate-200 rounded-[32px] mb-12"></div>
          <div className="h-6 bg-slate-200 rounded w-full mb-4"></div>
          <div className="h-6 bg-slate-200 rounded w-5/6 mb-4"></div>
          <div className="h-6 bg-slate-200 rounded w-4/6"></div>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Không tìm thấy dịch vụ</h2>
        <Link href="/services">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl">Quay lại danh sách Dịch vụ</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <section className="relative pt-24 pb-16 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center text-[13px] text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-teal-600 transition-colors">{t("nav.home")}</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-slate-400" />
            <Link href="/services" className="hover:text-teal-600 transition-colors">{t("nav.services")}</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate">{service.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h1 className="text-[2.5rem] lg:text-[3.5rem] font-bold text-[#1B3A6B] leading-[1.1] tracking-tight">
                {service.name}
              </h1>
              <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="pt-4 flex gap-4">
                <Button size="lg" className="h-[54px] px-8 rounded-xl bg-teal-600 hover:bg-teal-700 text-[15px] font-bold shadow-xl shadow-teal-600/20">
                  <Calendar className="w-5 h-5 mr-2" />
                  Đặt lịch ngay
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-hidden shadow-2xl">
                <Image 
                  src={service.image || "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"} 
                  alt={service.name} 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[32px] p-8 lg:p-14 shadow-sm border border-slate-100">
            <h2 className="text-[2rem] font-bold text-[#1B3A6B] mb-8 relative inline-block">
              Chi tiết giải pháp
              <div className="absolute -bottom-3 left-0 w-12 h-[4px] bg-teal-600 rounded-full"></div>
            </h2>
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-loose">
              <p className="text-[17px]">{service.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
