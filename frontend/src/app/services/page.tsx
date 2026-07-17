import { Button } from "@/components/ui/button";
import { Stethoscope, Dna, Baby, Scissors, Syringe, Activity, Leaf, ChevronRight, Shield, Users, Clock, Globe, HeartPulse, FileText, Phone, BarChart2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      name: "Khám & Tư vấn với chuyên gia",
      icon: <Stethoscope className="w-8 h-8 text-teal-600" />,
      desc: "Tư vấn trực tuyến hoặc trực tiếp với các bác sĩ đầu ngành trong và ngoài nước.",
      img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Xét nghiệm Gene & Y học chính xác",
      icon: <Dna className="w-8 h-8 text-teal-600" />,
      desc: "Giải mã gen, đánh giá nguy cơ bệnh tật và cá nhân hóa kế hoạch phòng ngừa & điều trị.",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nhi khoa quốc tế",
      icon: <Baby className="w-8 h-8 text-teal-600" />,
      desc: "Chăm sóc và điều trị chuyên sâu cho trẻ em với đội ngũ chuyên gia nhi khoa hàng đầu.",
      img: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Thẩm mỹ & Làm đẹp",
      icon: <Scissors className="w-8 h-8 text-teal-600" />,
      desc: "Dịch vụ thẩm mỹ an toàn, hiện đại với công nghệ tiên tiến và bác sĩ chuyên khoa giàu kinh nghiệm.",
      img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Phẫu thuật chỉnh hình",
      icon: <Syringe className="w-8 h-8 text-teal-600" />,
      desc: "Điều trị các bệnh lý xương khớp, thay khớp, nội soi khớp, chỉnh hình cột sống với kỹ thuật tiên tiến.",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ngoại khoa chuyên sâu",
      icon: <Syringe className="w-8 h-8 text-teal-600" />,
      desc: "Phẫu thuật tiêu hóa, gan mật, tiết niệu, ung bướu... với trang thiết bị hiện đại, chuẩn quốc tế.",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Tầm soát & Kiểm tra sức khỏe",
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      desc: "Gói kiểm tra sức khỏe tổng quát, tầm soát ung thư và bệnh lý mạn tính toàn diện.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Wellness & Phục hồi sức khỏe",
      icon: <Leaf className="w-8 h-8 text-teal-600" />,
      desc: "Liệu trình dưỡng sinh, phục hồi chức năng, y học cổ truyền kết hợp công nghệ hiện đại.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0"></div>
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 relative z-10">
          <div className="absolute flex items-center text-[13px] text-slate-500 mt-5">
            <Link href="/" className="hover:text-[#1B3A6B] transition-colors font-medium">Trang chủ</Link>
            <ChevronRight className="w-3 h-3 mx-2 text-slate-400" />
            <span className="text-slate-800 font-semibold">Dịch vụ</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="lg:w-[45%] space-y-6 z-20">
              <h1 className="text-[2.75rem] lg:text-[4rem] font-bold tracking-tight text-[#1B3A6B] leading-[1.15]">
                Dịch vụ chăm sóc<br />sức khỏe toàn diện
              </h1>
              <p className="text-[15px] lg:text-[16px] text-slate-600 max-w-[500px] leading-relaxed">
                ToplifeAI kết nối bạn với đội ngũ bác sĩ và chuyên gia hàng đầu, cùng công nghệ AI tiên tiến – mang đến giải pháp chăm sóc sức khỏe cá nhân hóa, chính xác và tiện lợi.
              </p>
            </div>

            <div className="lg:w-[55%] relative w-full aspect-[4/3] lg:aspect-auto lg:h-[540px] z-10 flex items-center justify-end">
              <div className="absolute right-[-5%] lg:right-[-10%] top-0 bottom-0 w-[110%] z-0" style={{ maskImage: "linear-gradient(to right, transparent, black 15%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)" }}>
                <Image
                  src="/anh1trangdichvu.png"
                  alt="Doctor Consultation"
                  fill
                  className="object-cover object-[center_top]"
                />
              </div>

              {/* AI Health Score floating badge */}
              <div className="absolute left-[15%] lg:left-[5%] top-[25%] bg-white/80 backdrop-blur-xl rounded-[24px] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white flex flex-col gap-5 z-20 w-[240px]">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold text-teal-600">AI Health Score</span>
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-[72px] h-[72px] rounded-full border-[6px] border-teal-50 flex items-center justify-center relative shrink-0">
                    <svg className="absolute inset-0 w-full h-full text-teal-500" viewBox="0 0 36 36">
                      <path className="stroke-current" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <span className="text-[24px] font-bold text-teal-600">92</span>
                  </div>
                  <svg viewBox="0 0 100 30" className="flex-1 h-[24px] stroke-teal-200 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 15 H15 L20 5 L30 25 L35 15 H100" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-1">
                  <div className="h-[52px] rounded-[16px] bg-white border border-slate-100 flex items-center justify-center text-teal-300 shadow-sm">
                    <BarChart2 className="w-6 h-6" />
                  </div>
                  <div className="h-[52px] rounded-[16px] bg-teal-50 border border-teal-100/50 flex items-center justify-center text-teal-500 shadow-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v4M8 12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.5-3-4-4zM16 12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.5-3 4-4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-20 pb-24 bg-[#FAFAFA]">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] font-bold text-[#1B3A6B] inline-block relative">
              Các dịch vụ nổi bật
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-teal-600 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 border-t-[4px] border-t-teal-600 group flex flex-col h-full">
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex gap-4 mb-4 items-start">
                    <div className="w-[46px] h-[46px] rounded-full bg-teal-50/80 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-[16px] text-[#1B3A6B] leading-snug pt-1">{service.name}</h3>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                  <div className="mt-auto">
                    <Button variant="link" className="text-teal-600 p-0 h-auto font-bold text-[13px] group-hover:gap-2 gap-1 transition-all flex items-center">
                      Tìm hiểu thêm <ChevronRight className="w-[14px] h-[14px]" />
                    </Button>
                  </div>
                </div>
                <div className="relative h-[180px] w-full overflow-hidden shrink-0">
                  <Image src={service.img} alt={service.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex items-start gap-4">
              <Users className="w-[28px] h-[28px] text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-[14px] text-[#1B3A6B] mb-1 leading-tight">Bác sĩ & chuyên gia<br />hàng đầu</h4>
                <p className="text-[12px] text-slate-500 leading-snug">Đội ngũ chuyên môn cao,<br />giàu kinh nghiệm</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Activity className="w-[28px] h-[28px] text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-[14px] text-[#1B3A6B] mb-1 leading-tight">Công nghệ AI<br />hiện đại</h4>
                <p className="text-[12px] text-slate-500 leading-snug">Phân tích dữ liệu chính xác,<br />cá nhân hóa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-[28px] h-[28px] text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-[14px] text-[#1B3A6B] mb-1 leading-tight">Quy trình<br />chuẩn quốc tế</h4>
                <p className="text-[12px] text-slate-500 leading-snug">An toàn, minh bạch,<br />hiệu quả</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-[28px] h-[28px] text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-[14px] text-[#1B3A6B] mb-1 leading-tight">Bảo mật thông tin<br />tuyệt đối</h4>
                <p className="text-[12px] text-slate-500 leading-snug">Đạt tiêu chuẩn bảo mật<br />quốc tế</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-[28px] h-[28px] text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-[14px] text-[#1B3A6B] mb-1 leading-tight">Hỗ trợ toàn diện<br />24/7</h4>
                <p className="text-[12px] text-slate-500 leading-snug">Đồng hành cùng bạn<br />mọi lúc, mọi nơi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Patients Section */}
      <section className="pb-10 bg-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="bg-[#F4F9FC] rounded-[32px] p-8 lg:p-14 flex flex-col lg:flex-row gap-14 border border-teal-50">
            {/* Left: Program Info */}
            <div className="lg:w-[40%] flex flex-col justify-center">
              <h2 className="text-[1.75rem] font-bold text-[#1B3A6B] leading-tight mb-4">Chương trình dành cho<br />bệnh nhân quốc tế</h2>
              <p className="text-[14px] text-slate-600 mb-8 max-w-[400px] leading-relaxed">
                ToplifeAI cung cấp dịch vụ hỗ trợ toàn diện cho bệnh nhân quốc tế khi đến Việt Nam thăm khám và điều trị.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                <div className="flex items-center gap-2 text-[13px] text-[#1B3A6B] font-bold">
                  <span className="text-teal-600">✓</span> Tư vấn & hội chẩn từ xa
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#1B3A6B] font-bold">
                  <span className="text-teal-600">✓</span> Phiên dịch y tế chuyên nghiệp
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#1B3A6B] font-bold">
                  <span className="text-teal-600">✓</span> Hỗ trợ visa y tế & giấy mời
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#1B3A6B] font-bold">
                  <span className="text-teal-600">✓</span> Điều phối lịch khám & điều trị
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#1B3A6B] font-bold">
                  <span className="text-teal-600">✓</span> Đón sân bay, đặt khách sạn
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#1B3A6B] font-bold">
                  <span className="text-teal-600">✓</span> Theo dõi & chăm sóc sau điều trị
                </div>
              </div>
              <div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-[10px] h-[48px] px-8 text-[14px] font-bold shadow-lg shadow-teal-600/20">
                  Tìm hiểu chương trình <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            {/* Right: 6-Step Process */}
            <div className="lg:w-[60%] flex flex-col justify-between">
              <div>
                <h3 className="text-[18px] font-bold text-[#1B3A6B] mb-10">Quy trình 6 bước đơn giản</h3>
                <div className="relative flex justify-between">
                  <div className="absolute top-[36px] left-[20px] right-[20px] h-[2px] border-t-2 border-dashed border-teal-200 z-0"></div>

                  {[
                    { step: "01", title: "Gửi yêu cầu\n& hồ sơ", icon: <FileText className="w-5 h-5" /> },
                    { step: "02", title: "Hội chẩn\n& tư vấn", icon: <Users className="w-5 h-5" /> },
                    { step: "03", title: "Lên kế hoạch\nđiều trị", icon: <Activity className="w-5 h-5" /> },
                    { step: "04", title: "Chuẩn bị\nđến Việt Nam", icon: <Globe className="w-5 h-5" /> },
                    { step: "05", title: "Điều trị\n& chăm sóc", icon: <Shield className="w-5 h-5" /> },
                    { step: "06", title: "Theo dõi\nsau điều trị", icon: <Clock className="w-5 h-5" /> },
                  ].map((s, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center flex-1">
                      <span className="text-teal-600 font-bold text-[14px] mb-3">{s.step}</span>
                      <div className="w-[42px] h-[42px] rounded-full bg-white border-2 border-teal-100 flex items-center justify-center mb-3 text-teal-600 shadow-sm">
                        {s.icon}
                      </div>
                      <p className="text-[12px] font-bold text-[#1B3A6B] text-center whitespace-pre-line leading-snug">{s.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Info Cards */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <div className="flex-1 bg-white rounded-xl p-5 border border-slate-100 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#F4F9FC] flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1B3A6B] mb-1">Hỗ trợ đa ngôn ngữ</p>
                    <p className="text-[11px] text-slate-500">EN | 中文 | 한국어 | 日本語 | ភាសាខ្មែរ | Русский</p>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 border border-slate-100 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#F4F9FC] flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1B3A6B] mb-1">Đối tác bệnh viện uy tín</p>
                    <p className="text-[11px] text-slate-500">Vinmec, Việt Đức, Nhi TW, Tâm Anh, Hồng Ngọc...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-10 bg-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="bg-[#F8FBFC] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-50/50">
            <div className="flex items-center gap-5">
              <div className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center text-teal-600 shadow-sm border border-teal-100">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[18px] text-[#1B3A6B] mb-1">Bạn cần tư vấn dịch vụ phù hợp?</h3>
                <p className="text-[14px] text-slate-500">Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none border-teal-600 text-teal-600 hover:bg-teal-50 rounded-[10px] h-[48px] px-8 font-bold">
                Liên hệ ngay
              </Button>
              <Button className="flex-1 md:flex-none bg-teal-600 hover:bg-teal-700 rounded-[10px] h-[48px] px-8 font-bold text-white shadow-lg shadow-teal-600/20">
                Đặt lịch tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
