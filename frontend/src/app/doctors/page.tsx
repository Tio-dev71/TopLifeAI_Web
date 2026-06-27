import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Star, ChevronDown, Calendar, MessageSquare, ChevronRight, Baby, Sparkles, Bone, Scissors, HeartPulse, Activity, Ear, Smile, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorsPage() {
   const featuredDoctors = [
      { name: "TS.BS. Thanh Hà", specialty: "Nhi khoa", hospital: "Bệnh viện Nhi Trung ương", rating: 4.9, reviews: 126, exp: "Hơn 20 năm kinh nghiệm trong lĩnh vực nhi khoa, đặc biệt về dị ứng, miễn dịch và hô hấp trẻ em.", langs: ["VI", "EN"], img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "GS.TS.BS. Phạm Minh Tuấn", specialty: "Phẫu thuật chỉnh hình", hospital: "Bệnh viện Việt Đức", rating: 4.9, reviews: 96, exp: "Chuyên gia hàng đầu về phẫu thuật khớp, thay khớp gối, khớp háng và chấn thương chỉnh hình.", langs: ["VI", "EN"], img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "TS.BS. Lê Hồng Nhung", specialty: "Thẩm mỹ", hospital: "Bệnh viện Thẩm mỹ Thu Cúc", rating: 4.8, reviews: 84, exp: "Chuyên gia phẫu thuật thẩm mỹ nội khoa và phẫu thuật thẩm mỹ với hơn 15 năm kinh nghiệm.", langs: ["VI", "EN", "KO"], img: "https://images.unsplash.com/photo-1594824436998-dd1b48d0164c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "PGS.TS.BS. Nguyễn Hoàng Bắc", specialty: "Ngoại khoa tiêu hóa", hospital: "Bệnh viện Bạch Mai", rating: 4.9, reviews: 112, exp: "Chuyên gia phẫu thuật nội soi tiêu hóa, điều trị bệnh lý dạ dày, gan mật, tụy và đại trực tràng.", langs: ["VI", "EN"], img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "ThS.BS. Trần Thu Thảo", specialty: "Sản phụ khoa & IVF", hospital: "Bệnh viện Phụ sản TW", rating: 4.8, reviews: 73, exp: "Chuyên gia hỗ trợ sinh sản (IVF), điều trị vô sinh hiếm muộn và sản phụ khoa.", langs: ["VI", "EN"], img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
   ];

   const allDoctors = [
      { name: "BS.CKII. Nguyễn Thị Kim Dung", specialty: "Tim mạch", hospital: "Bệnh viện Tim Hà Nội", rating: 4.8, reviews: 57, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "PGS.TS.BS. Trần Văn Long", specialty: "Tai mũi họng", hospital: "Bệnh viện Tai Mũi Họng TƯ", rating: 4.9, reviews: 65, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "TS.BS. Vũ Thành Nhân", specialty: "Ung bướu", hospital: "Bệnh viện K Trung ương", rating: 4.8, reviews: 59, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "ThS.BS. Đỗ Minh Hằng", specialty: "Răng hàm mặt", hospital: "Bệnh viện Răng Hàm Mặt TƯ", rating: 4.9, reviews: 88, img: "https://images.unsplash.com/photo-1594824436998-dd1b48d0164c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "TS.BS. Lê Quang Huy", specialty: "Y học cổ truyền", hospital: "Bệnh viện YHCT Trung ương", rating: 4.8, reviews: 44, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "ThS.BS. Phạm Thị Mai", specialty: "Dinh dưỡng lâm sàng", hospital: "Bệnh viện Bạch Mai", rating: 4.7, reviews: 35, img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "ThS.BS. Nguyễn Quang Anh", specialty: "Gene & Di truyền", hospital: "Trung tâm Gen & Công nghệ cao", rating: 4.9, reviews: 52, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
      { name: "BS.CKI. Lương Thị Thu", specialty: "Da liễu", hospital: "Bệnh viện Da liễu Trung ương", rating: 4.8, reviews: 60, img: "https://images.unsplash.com/photo-1594824436998-dd1b48d0164c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" },
   ];

   return (
      <div className="flex flex-col min-h-screen bg-slate-50">
         {/* Hero Section */}
         {/* Hero Section */}
         <section className="relative bg-[#F8FBFC] overflow-hidden">
            <div className="max-w-[1536px] w-full mx-auto pl-6 lg:pl-12 relative z-10">
               <div className="absolute mt-5 flex items-center text-[13px] text-slate-500 mb-10">
                  <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
                  <span className="mx-2 text-slate-400">&rsaquo;</span>
                  <span className="text-teal-600 font-semibold">Bác sĩ & chuyên gia</span>
               </div>

               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                  <div className="lg:w-[45%] space-y-6">
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

         {/* Search Bar - overlaps hero and next section */}
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
                     <Button variant="outline" className="h-[52px] px-5 w-full lg:w-auto justify-between gap-3 text-[14px] font-medium text-slate-600 border-slate-100 rounded-[12px] hover:bg-slate-50 shadow-sm">
                        Ngôn ngữ <ChevronDown className="w-4 h-4 text-slate-400" />
                     </Button>
                     <Button className="h-[52px] px-10 bg-teal-600 hover:bg-teal-700 rounded-[12px] w-full lg:w-auto text-[15px] font-bold text-white shadow-md shadow-teal-600/20">Tìm kiếm</Button>
                  </div>
               </div>

               <div className="flex flex-wrap items-center gap-3 px-2">
                  <span className="text-[13px] text-[#1B3A6B] font-bold mr-2">Tìm kiếm phổ biến:</span>
                  {["Nhi khoa", "Thẩm mỹ", "Chỉnh hình", "Tim mạch", "Ung bướu", "Gene & Di truyền", "IVF"].map(tag => (
                     <span key={tag} className="px-4 py-2 bg-[#F8FBFC] text-slate-600 text-[12px] font-medium rounded-full hover:bg-teal-50 hover:text-teal-600 cursor-pointer transition-colors">
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         </div>

         {/* Specialties */}
         <section className="py-12 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="flex justify-between items-center mb-8">
                  <h2 className="text-[1.75rem] font-bold text-[#1B3A6B]">Chuyên khoa</h2>
                  <Button variant="link" className="text-teal-600 font-bold hover:text-teal-700">Xem tất cả chuyên khoa <ChevronRight className="w-4 h-4 ml-1" /></Button>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-4">
                  {[
                     { icon: <Baby className="w-6 h-6" />, name: "Nhi khoa" },
                     { icon: <Sparkles className="w-6 h-6" />, name: "Thẩm mỹ" },
                     { icon: <Bone className="w-6 h-6" />, name: "Phẫu thuật\nchỉnh hình" },
                     { icon: <Scissors className="w-6 h-6" />, name: "Ngoại khoa" },
                     { icon: <HeartPulse className="w-6 h-6" />, name: "Tim mạch" },
                     { icon: <Baby className="w-6 h-6" />, name: "Sản phụ khoa\n& IVF" },
                     { icon: <Activity className="w-6 h-6" />, name: "Ung bướu" },
                     { icon: <Ear className="w-6 h-6" />, name: "Tai mũi họng" },
                     { icon: <Smile className="w-6 h-6" />, name: "Răng hàm mặt" },
                  ].map((item, idx) => (
                     <div key={idx} className="flex flex-col items-center justify-center p-4 h-[140px] bg-white border border-slate-100 rounded-[20px] cursor-pointer group hover:border-teal-600 hover:shadow-lg hover:shadow-teal-900/5 transition-all">
                        <div className="w-[52px] h-[52px] rounded-full border border-teal-50 bg-teal-50/50 flex items-center justify-center text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        <span className="text-[12px] font-bold text-[#1B3A6B] text-center leading-tight whitespace-pre-line group-hover:text-teal-600 transition-colors">{item.name}</span>
                     </div>
                  ))}
                  <div className="flex flex-col items-center justify-center p-4 h-[140px] bg-white border border-slate-100 rounded-[20px] cursor-pointer group hover:border-teal-600 hover:shadow-lg hover:shadow-teal-900/5 transition-all">
                     <div className="w-[52px] h-[52px] rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-400 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <MoreHorizontal className="w-6 h-6" />
                     </div>
                     <span className="text-[12px] font-bold text-slate-500 text-center leading-tight group-hover:text-teal-600 transition-colors">Xem tất cả</span>
                  </div>
               </div>
            </div>
         </section>

         {/* Featured Doctors */}
         <section className="py-12 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="flex justify-between items-center mb-8">
                  <h2 className="text-[1.75rem] font-bold text-[#1B3A6B]">Bác sĩ & chuyên gia nổi bật</h2>
                  <Button variant="link" className="text-teal-600 font-bold hover:text-teal-700">Xem tất cả bác sĩ <ChevronRight className="w-4 h-4 ml-1" /></Button>
               </div>

               <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {featuredDoctors.map((doc, idx) => (
                     <div key={idx} className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-teal-900/5 transition-all overflow-hidden flex flex-col group">
                        <div className="relative h-[220px] w-full bg-[#EEF2F6]">
                           <Image src={doc.img} alt={doc.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                           <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 border border-teal-100 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer transition-colors shadow-sm">
                              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                           </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col">
                           <h3 className="font-bold text-[#1B3A6B] text-[15px] mb-1 leading-tight group-hover:text-teal-600 transition-colors">{doc.name}</h3>
                           <p className="text-teal-600 font-bold text-[12px] mb-2">{doc.specialty}</p>
                           <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mb-3">
                              <MapPin className="w-[14px] h-[14px] shrink-0 text-slate-400" /> <span className="truncate">{doc.hospital}</span>
                           </div>
                           <div className="flex items-center gap-1.5 mb-4">
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                              <span className="text-[12px] font-bold text-slate-700">{doc.rating}</span>
                              <span className="text-[11px] text-slate-400">({doc.reviews} đánh giá)</span>
                           </div>
                           <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3 mb-5 flex-1">
                              {doc.exp}
                           </p>
                           <div className="flex items-center gap-2 mb-5">
                              <span className="text-[11px] font-bold text-slate-700">Ngôn ngữ:</span>
                              <div className="flex gap-1.5 items-center">
                                 {doc.langs.map((lang, lIdx) => (
                                    <div key={lang} className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                                       {lIdx > 0 && <span className="text-slate-300 mr-1">|</span>}
                                       {lang}
                                    </div>
                                 ))}
                              </div>
                           </div>
                           <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 rounded-[10px] h-[40px] font-bold text-[13px]">Xem hồ sơ</Button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* All Doctors */}
         <section className="py-12 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <h2 className="text-[1.75rem] font-bold text-[#1B3A6B] mb-8">Tất cả bác sĩ & chuyên gia</h2>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {allDoctors.map((doc, idx) => (
                     <div key={idx} className="bg-white p-4 rounded-[20px] border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-teal-900/5 transition-all cursor-pointer group flex items-center gap-4">
                        <div className="w-[68px] h-[68px] rounded-full overflow-hidden bg-[#EEF2F6] shrink-0">
                           <Image src={doc.img} alt={doc.name} width={68} height={68} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-[14px] text-[#1B3A6B] group-hover:text-teal-600 transition-colors leading-tight mb-1">{doc.name}</h4>
                           <p className="text-teal-600 font-bold text-[11px] mb-1">{doc.specialty}</p>
                           <p className="text-slate-500 text-[11px] font-medium mb-1.5 line-clamp-1">{doc.hospital}</p>
                           <div className="flex items-center gap-1.5">
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                              <span className="text-[11px] font-bold text-slate-700">{doc.rating}</span>
                              <span className="text-[10px] text-slate-400">({doc.reviews} đánh giá)</span>
                           </div>
                        </div>
                        <div className="w-[32px] h-[32px] rounded-full border border-teal-50 bg-teal-50/30 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-colors shrink-0 self-start">
                           <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="text-center">
                  <Button variant="outline" className="rounded-[10px] border-teal-600 text-teal-600 hover:bg-teal-50 px-12 h-[44px] font-bold text-[14px]">Xem tất cả bác sĩ</Button>
               </div>
            </div>
         </section>

         {/* Footer CTA */}
         <section className="py-20 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="bg-gradient-to-r from-[#F0F7F9] to-[#E3F2F5] rounded-[24px] p-4 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                  {/* Decorative background pattern */}
                  <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                     <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-teal-600" /></svg>
                  </div>

                  <div className="relative z-10 hidden md:block w-[350px] h-[300px] shrink-0 -ml-4 -mb-16">
                     {/* Consultant Image */}
                     <div className="relative w-full h-full">
                        <Image src="/anh2trangbacsi&chuyengia.png" alt="Support" fill className="object-cover rounded-[20px] shadow-2xl shadow-teal-900/10" style={{ maskImage: "linear-gradient(to top, transparent, black 15%)", WebkitMaskImage: "linear-gradient(to top, transparent, black 15%)" }} />

                        {/* Floating Icon 1 */}
                        <div className="absolute top-[20%] -left-4 w-12 h-12 bg-white rounded-[12px] shadow-lg flex items-center justify-center text-teal-600">
                           <MessageSquare className="w-5 h-5" />
                        </div>
                        {/* Floating Icon 2 */}
                        <div className="absolute top-[10%] -right-4 w-12 h-12 bg-white rounded-[12px] shadow-lg flex items-center justify-center text-teal-600">
                           <Calendar className="w-5 h-5" />
                        </div>
                     </div>
                  </div>

                  <div className="flex-1 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
                     <div className="space-y-5 text-center md:text-left">
                        <h2 className="text-[2rem] font-bold text-[#1B3A6B]">Bạn cần tư vấn với bác sĩ?</h2>
                        <ul className="space-y-3 inline-block text-left">
                           <li className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                              <div className="w-[22px] h-[22px] rounded-full bg-white border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
                                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              Tư vấn trực tuyến 24/7
                           </li>
                           <li className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                              <div className="w-[22px] h-[22px] rounded-full bg-white border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
                                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              Kết nối đúng chuyên gia phù hợp
                           </li>
                           <li className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                              <div className="w-[22px] h-[22px] rounded-full bg-white border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
                                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              Bảo mật tuyệt đối thông tin cá nhân
                           </li>
                           <li className="flex items-center gap-3 text-slate-700 font-medium text-[15px]">
                              <div className="w-[22px] h-[22px] rounded-full bg-white border border-teal-200 text-teal-600 flex items-center justify-center shrink-0">
                                 <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </div>
                              Hỗ trợ đa ngôn ngữ: Tiếng Việt, English, 中文
                           </li>
                        </ul>
                     </div>

                     <div className="flex flex-col gap-3 relative z-10 w-full md:w-auto shrink-0 md:pl-10 lg:pl-20">
                        <Button className="bg-teal-600 hover:bg-teal-700 rounded-[10px] h-[52px] px-8 text-[15px] font-bold text-white shadow-lg shadow-teal-600/20 whitespace-nowrap w-full">
                           Đặt lịch tư vấn ngay
                        </Button>
                        <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-[10px] h-[52px] px-8 text-[15px] font-bold bg-transparent whitespace-nowrap w-full">
                           Tìm hiểu quy trình
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
