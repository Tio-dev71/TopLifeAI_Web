import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, ShieldCheck, UserCheck, TrendingUp, Brain, Database, Cloud, Lock, Server, HeartPulse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AITechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-800 leading-tight">
                Công nghệ AI <br />
                <span className="text-teal-600">vì sức khỏe của bạn</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                ToplifeAI ứng dụng trí tuệ nhân tạo và khoa học dữ liệu tiên tiến để phân tích toàn diện dữ liệu sức khỏe, dự đoán rủi ro, cá nhân hóa kế hoạch chăm sóc và đồng hành cùng bạn trên hành trình sống khỏe, sống thọ và hạnh phúc hơn.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-800">AI phân tích<br />chuyên sâu</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-800">Bảo mật dữ liệu<br />tuyệt đối</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-800">Cá nhân hóa<br />đến từng cá nhân</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm text-slate-800">Dự đoán sớm<br />- Phòng ngừa hiệu quả</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/20">
                  Khám phá nền tảng AI →
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full text-teal-600 border-teal-600 hover:bg-teal-50">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Xem video giới thiệu
                  </span>
                </Button>
              </div>
            </div>

            <div className="flex-1 relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/50 to-transparent rounded-full blur-3xl animate-pulse"></div>
              <Image
                src="/anh1trangcongngheAI.png"
                alt="AI App Mockup"
                fill
                className="object-contain z-10 scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 inline-block relative">
              Nền tảng AI toàn diện của ToplifeAI
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-teal-600 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Database className="w-8 h-8 text-teal-600" />, title: "Thu thập dữ liệu đa nguồn", desc: "Kết nối thiết bị đeo tay, hồ sơ y tế, xét nghiệm, gene, lối sống và môi trường." },
              { icon: <Brain className="w-8 h-8 text-teal-600" />, title: "AI phân tích và hiểu bạn", desc: "AI phân tích hàng nghìn chỉ số để hiểu cơ thể bạn ở cấp độ sâu sắc, chính xác." },
              { icon: <Activity className="w-8 h-8 text-teal-600" />, title: "Dự đoán rủi ro sớm", desc: "Phát hiện sớm nguy cơ bệnh tật trước khi triệu chứng xuất hiện để chủ động phòng ngừa." },
              { icon: <UserCheck className="w-8 h-8 text-teal-600" />, title: "Cá nhân hóa kế hoạch sức khỏe", desc: "Đề xuất chế độ dinh dưỡng, luyện tập, giấc ngủ, bổ sung và theo dõi phù hợp với bạn." },
              { icon: <HeartPulse className="w-8 h-8 text-teal-600" />, title: "AI Health Coach đồng hành 24/7", desc: "Trợ lý AI luôn sẵn sàng giải đáp, nhắc nhở và hỗ trợ bạn mỗi ngày." },
              { icon: <TrendingUp className="w-8 h-8 text-teal-600" />, title: "Theo dõi & cải thiện liên tục", desc: "Theo dõi tiến trình, đo lường hiệu quả và tối ưu kế hoạch để bạn đạt mục tiêu sức khỏe." },
            ].map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech exclusive */}
      <section className="py-5 bg-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Công nghệ & nền tảng độc quyền</h2>
              <p className="text-slate-600 mb-8">ToplifeAI được xây dựng trên nền tảng công nghệ hiện đại, linh hoạt và an toàn bậc nhất.</p>
              <Button variant="outline" className="border-teal-600 text-teal-600 rounded-full">Tìm hiểu chi tiết công nghệ →</Button>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Brain className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">AI & Machine Learning</h4>
                <p className="text-sm text-slate-500">Thuật toán học máy tiên tiến phản ánh dữ liệu phức tạp, tự học và liên tục cải thiện độ chính xác.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Database className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Big Data Health</h4>
                <p className="text-sm text-slate-500">Xử lý hàng tỷ dữ liệu y tế để tạo ra những phân tích sâu sắc và đáng tin cậy.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Cloud className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Cloud Security</h4>
                <p className="text-sm text-slate-500">Hạ tầng đám mây đạt chuẩn quốc tế, mã hóa đa lớp, bảo vệ dữ liệu tuyệt đối.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Server className="w-8 h-8 text-teal-600 mb-4" />
                <h4 className="font-bold text-slate-800 mb-2">Interoperability</h4>
                <p className="text-sm text-slate-500">Kết nối với bệnh viện, phòng khám, thiết bị y tế và ứng dụng sức khỏe một cách dễ dàng.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/4">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Bảo mật &<br />tiêu chuẩn quốc tế</h3>
              <p className="text-sm text-slate-500">ToplifeAI cam kết bảo vệ dữ liệu sức khỏe cá nhân theo các tiêu chuẩn nghiêm ngặt nhất thế giới.</p>
            </div>
            <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <ShieldCheck className="w-8 h-8 text-teal-600" />
                </div>
                <div className="font-bold text-sm text-slate-800">ISO 27001</div>
                <div className="text-[10px] text-slate-500">Quản lý an toàn thông tin</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <ShieldCheck className="w-8 h-8 text-teal-600" />
                </div>
                <div className="font-bold text-sm text-slate-800">HIPAA</div>
                <div className="text-[10px] text-slate-500">Bảo mật dữ liệu y tế (Hoa Kỳ)</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <ShieldCheck className="w-8 h-8 text-teal-600" />
                </div>
                <div className="font-bold text-sm text-slate-800">GDPR</div>
                <div className="text-[10px] text-slate-500">Bảo vệ dữ liệu châu Âu</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <ShieldCheck className="w-8 h-8 text-teal-600" />
                </div>
                <div className="font-bold text-sm text-slate-800">SOC 2 Type II</div>
                <div className="text-[10px] text-slate-500">Kiểm soát an ninh, minh bạch</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <Lock className="w-8 h-8 text-teal-600" />
                </div>
                <div className="font-bold text-sm text-slate-800">Mã hóa end-to-end</div>
                <div className="text-[10px] text-slate-500">Dữ liệu được mã hóa trong quá trình truyền và lưu trữ.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How AI works workflow */}
      <section className="py-5 bg-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[2rem] font-bold text-[#1B3A6B] mb-16 relative inline-block">
            AI hoạt động như thế nào?
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-teal-600 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[4.25rem] left-[8%] right-[8%] h-0 border-t-2 border-dashed border-teal-100 z-0"></div>
            {[
              { step: "01", icon: <Database />, title: "Thu thập dữ liệu", desc: "Kết nối và thu thập dữ liệu từ nhiều nguồn khác nhau." },
              { step: "02", icon: <Server />, title: "Xử lý & làm sạch", desc: "AI xử lý, chuẩn hóa và làm sạch dữ liệu thông minh." },
              { step: "03", icon: <Brain />, title: "Phân tích chuyên sâu", desc: "Phân tích hàng nghìn chỉ số bằng các mô hình AI tiên tiến." },
              { step: "04", icon: <ShieldCheck />, title: "Dự đoán & đánh giá", desc: "Đánh giá sức khỏe hiện tại và dự đoán rủi ro tương lai." },
              { step: "05", icon: <UserCheck />, title: "Đề xuất cá nhân hóa", desc: "AI đề xuất kế hoạch phù hợp với thể trạng và mục tiêu." },
              { step: "06", icon: <TrendingUp />, title: "Theo dõi & tối ưu", desc: "Theo dõi tiến trình và liên tục tối ưu kết quả." },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center relative z-10">
                <span className="text-teal-600 font-bold mb-4 text-[18px]">{item.step}</span>
                <div className="w-[72px] h-[72px] rounded-full border-2 border-teal-50 flex items-center justify-center mb-6 text-teal-600 shadow-sm bg-white">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[14px] text-slate-800 mb-2 px-2">{item.title}</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
          <div className="bg-[#0A2534] rounded-[24px] relative overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
            {/* Content */}
            <div className="flex-1 text-white p-8 lg:p-12 relative z-20 flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 items-center lg:items-start">
                <div className="flex-1 w-full text-center lg:text-left">
                  <h2 className="text-[2rem] lg:text-[2.25rem] font-bold mb-4 leading-tight">
                    Công nghệ AI – <br className="hidden lg:block" />Chìa khóa cho tương lai sức khỏe
                  </h2>
                  <p className="text-white/80 max-w-md mx-auto lg:mx-0 text-[15px] leading-relaxed">
                    ToplifeAI không chỉ là công nghệ, mà là người bạn đồng hành thông minh giúp bạn sống khỏe hơn mỗi ngày.
                  </p>
                </div>
                <div className="flex-1 space-y-6 pt-0 lg:pt-2 w-full flex flex-col items-center lg:items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-transparent border border-white/40 text-white flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[15px] text-white font-medium">Chủ động phòng ngừa</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-transparent border border-white/40 text-white flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[15px] text-white font-medium">Cá nhân hóa tối ưu</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-transparent border border-white/40 text-white flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[15px] text-white font-medium">Sống khỏe, sống thọ, sống hạnh phúc</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end lg:pr-[15%]">
                <Button className="h-[48px] px-8 bg-white text-[#0A2534] hover:bg-slate-100 rounded-[8px] font-medium text-[14px]">Trải nghiệm ToplifeAI ngay</Button>
                <Button variant="outline" className="h-[48px] px-8 border border-white/30 text-white hover:bg-white/10 rounded-[8px] font-medium text-[14px] bg-transparent">Liên hệ tư vấn</Button>
              </div>
            </div>
            {/* Image */}
            <div className="lg:w-[55%] relative w-full min-h-[400px] lg:min-h-auto">
              {/* Gradient mask on the left side to blend the image seamlessly */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2534] via-[#0A2534]/50 to-transparent z-10 w-[30%]"></div>
              <Image src="/anh2trangcongngheAI.png" alt="AI Technology Visualization" fill className="object-cover object-right" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
