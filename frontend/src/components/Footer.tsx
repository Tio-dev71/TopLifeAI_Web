import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image src="/ToplifeAI-White-Logo.png" alt="ToplifeAI Logo" width={400} height={120} className="w-auto h-20 scale-[1.2] lg:scale-[2.0] lg:h-32 object-contain" priority />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              ToplifeAI ứng dụng trí tuệ nhân tạo và y học chính xác để cá nhân
              hóa hành trình chăm sóc sức khỏe toàn diện cho bạn.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Dịch vụ */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Dịch vụ
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Khám & Tư vấn chuyên gia</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Xét nghiệm Gene</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Nhi khoa quốc tế</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Thẩm mỹ & Làm đẹp</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Tầm soát sức khỏe</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Wellness & Longevity</Link></li>
            </ul>
          </div>

          {/* Công ty */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Công ty
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/doctors" className="hover:text-teal-400 transition-colors">Đội ngũ bác sĩ</Link></li>
              <li><Link href="/ai-technology" className="hover:text-teal-400 transition-colors">Công nghệ AI</Link></li>
              <li><Link href="/news" className="hover:text-teal-400 transition-colors">Tin tức & Blog</Link></li>
              <li><Link href="/international" className="hover:text-teal-400 transition-colors">Bệnh nhân quốc tế</Link></li>
              <li><Link href="#" className="hover:text-teal-400 transition-colors">Tuyển dụng</Link></li>
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Liên hệ
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <div>
                  <p className="text-white font-medium">+84 888 123 456</p>
                  <p className="text-slate-500 text-xs">Hỗ trợ 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <span>hello@toplifeai.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                <span>Tầng 12, Center Building, Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ToplifeAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-teal-400 transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">Điều khoản sử dụng</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">Chính sách Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
