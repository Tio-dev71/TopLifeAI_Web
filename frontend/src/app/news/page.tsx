"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Grid, Stethoscope, Users, Leaf, Activity, ShieldPlus, HeartPulse, Video, Mic, ChevronDown, CheckCircle2, RefreshCcw, HeartHandshake, Lightbulb, PlayCircle, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "@/i18n/provider";

export default function NewsPage() {
   const [articles, setArticles] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);
   const { t } = useTranslation();

   useEffect(() => {
      const fetchArticles = async () => {
         try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/public/articles`);
            if (res.ok) {
               const data = await res.json();
               setArticles(data);
            }
         } catch (error) {
            console.error("Failed to fetch articles:", error);
         } finally {
            setLoading(false);
         }
      };
      fetchArticles();
   }, []);

   const categories = [
      { name: "Tất cả", icon: <Grid className="w-5 h-5 lg:w-6 lg:h-6" />, active: true },
      { name: "Tin tức y tế", icon: <Stethoscope className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Sức khỏe gia đình", icon: <Users className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Dinh dưỡng", icon: <Leaf className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Công nghệ y tế", icon: <Activity className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Phòng ngừa bệnh", icon: <ShieldPlus className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Sống khỏe mỗi ngày", icon: <HeartPulse className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Video", icon: <Video className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
      { name: "Podcast", icon: <Mic className="w-5 h-5 lg:w-6 lg:h-6" />, active: false },
   ];

   const trendingTopics = [
      { title: "Xu hướng ứng dụng AI trong y tế 2024", count: "12 bài viết" },
      { title: "Dinh dưỡng cho người bận rộn", count: "9 bài viết" },
      { title: "Phòng ngừa bệnh tim mạch", count: "8 bài viết" },
      { title: "Chăm sóc sức khỏe gia đình", count: "15 bài viết" },
      { title: "Công nghệ xét nghiệm gene", count: "10 bài viết" },
   ];

   const videos = [
      { title: "AI trong y tế: Cơ hội và thách thức", views: "1.2K lượt xem", time: "05:12", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { title: "Dinh dưỡng cân bằng cho gia đình", views: "856 lượt xem", time: "04:38", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { title: "5 bài tập đơn giản tại nhà mỗi ngày", views: "1K lượt xem", time: "03:48", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
   ];

   const featuredArticle = articles.length > 0 ? articles[0] : null;
   const latestPosts = articles.length > 1 ? articles.slice(1) : [];

   return (
      <div className="flex flex-col min-h-screen bg-[#F8FBFC]">
         {/* Hero Section */}
         <section className="relative pb-32 overflow-hidden bg-gradient-to-r from-[#F0F7F9] to-[#E3F2F3] lg:to-transparent">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12 relative z-10">
               {/* Breadcrumb */}
               <div className="flex items-center pt-8 text-[13px] text-slate-500 mb-8 font-medium">
                  <Link href="/" className="hover:text-teal-600 transition-colors">Trang chủ</Link>
                  <span className="mx-2">&rsaquo;</span>
                  <span className="text-slate-800">Tin tức</span>
               </div>

               <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10 pt-10">
                  <div className="flex-1 space-y-6 max-w-2xl">
                     <h1 className="text-[3rem] lg:text-[4rem] font-bold tracking-tight text-[#1B3A6B] leading-[1.1]">
                        Tin tức & Kiến thức sức khỏe
                     </h1>
                     <p className="text-slate-600 text-[16px] leading-relaxed max-w-[500px]">
                        Cập nhật những thông tin y khoa mới nhất, kiến thức chăm sóc sức khỏe và xu hướng công nghệ y tế từ ToplifeAI và các chuyên gia hàng đầu.
                     </p>
                     <div className="relative max-w-md bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex p-1 border border-slate-100 mt-8">
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                           <Search className="w-5 h-5" />
                        </div>
                        <Input placeholder="Tìm kiếm bài viết, chủ đề, chuyên gia..." className="pl-14 h-[48px] border-0 focus-visible:ring-0 rounded-l-full bg-transparent flex-1 text-[14px]" />
                        <Button className="rounded-full px-8 bg-teal-600 hover:bg-teal-700 h-[48px] font-bold text-[14px]">Tìm kiếm</Button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background Image positioned to the right */}
            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 opacity-40 lg:opacity-100 pointer-events-none mix-blend-multiply lg:mix-blend-normal">
               <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7F9] via-[#F0F7F9]/80 lg:via-transparent to-transparent z-10 w-[60%] lg:w-[30%]"></div>
               <Image src="/anh1trangtintuc.png" alt="News and articles" fill className="object-cover lg:object-contain object-right" priority />
            </div>
         </section>

         {/* Category Menu */}
         <section className="relative z-20 -mt-14 mb-16">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 px-4 py-4 lg:py-6">
                  <div className="flex overflow-x-auto gap-2 lg:gap-6 justify-between scrollbar-hide px-2">
                     {categories.map((cat, idx) => (
                        <button
                           key={idx}
                           className={`flex flex-col items-center justify-center min-w-[80px] lg:min-w-[100px] gap-3 transition-all ${cat.active ? 'text-teal-600' : 'text-slate-500 hover:text-teal-600'}`}
                        >
                           <div className={`p-3 rounded-[16px] ${cat.active ? 'bg-teal-50 text-teal-600' : 'bg-transparent text-slate-400'}`}>
                              {cat.icon}
                           </div>
                           <span className={`text-[12px] lg:text-[14px] text-center whitespace-nowrap ${cat.active ? 'font-bold' : 'font-medium'}`}>{cat.name}</span>
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* Main Content */}
         <section className="pb-24">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="flex flex-col lg:flex-row gap-10">

                  {/* Left Column - Articles */}
                  <div className="lg:w-[65%] space-y-16">

                     {/* Featured Article */}
                     <div>
                        <h2 className="text-[24px] font-bold text-[#1B3A6B] mb-6">Bài viết nổi bật</h2>
                        {loading ? (
                           <div className="animate-pulse h-[400px] bg-white border border-slate-100 shadow-sm rounded-[24px] flex">
                              <div className="w-[55%] bg-slate-200"></div>
                              <div className="w-[45%] p-10 flex flex-col justify-center space-y-4">
                                 <div className="h-6 bg-slate-200 rounded w-1/4"></div>
                                 <div className="h-10 bg-slate-200 rounded w-full"></div>
                                 <div className="h-4 bg-slate-200 rounded w-full"></div>
                                 <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                              </div>
                           </div>
                        ) : featuredArticle ? (
                           <Card className="overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] group cursor-pointer bg-white">
                              <div className="flex flex-col lg:flex-row h-full">
                                 <div className="relative w-full lg:w-[55%] h-[300px] lg:h-auto overflow-hidden bg-slate-100">
                                    <Image src={featuredArticle.coverImage} alt="Featured article" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                 </div>
                                 <CardContent className="p-8 lg:p-10 lg:w-[45%] flex flex-col justify-center">
                                    <div className="flex items-center justify-between mb-6">
                                       <span className="text-[11px] font-bold text-teal-600 px-3 py-1.5 bg-teal-50 rounded-md uppercase tracking-wider">{featuredArticle.category || 'Tin tức'}</span>
                                       <span className="text-[12px] text-slate-500 font-medium flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 5 phút đọc</span>
                                    </div>
                                    <h3 className="text-[24px] lg:text-[28px] font-bold text-[#1B3A6B] mb-4 group-hover:text-teal-600 transition-colors leading-[1.3]">
                                       {featuredArticle.title}
                                    </h3>
                                    <p className="text-slate-600 text-[15px] mb-8 line-clamp-3 leading-relaxed">
                                       {featuredArticle.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                       <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[12px] font-bold">
                                             {featuredArticle.author?.firstName?.charAt(0) || 'A'}
                                          </div>
                                          <span className="text-[14px] font-bold text-[#1B3A6B]">{featuredArticle.author?.firstName || 'Admin'}</span>
                                       </div>
                                       <span className="text-[13px] text-slate-400 font-medium">{new Date(featuredArticle.createdAt).toLocaleDateString('vi-VN')}</span>
                                    </div>
                                 </CardContent>
                              </div>
                           </Card>
                        ) : (
                           <div className="text-center p-10 bg-white rounded-[24px] border border-slate-100 text-slate-500">
                              Chưa có bài viết nổi bật.
                           </div>
                        )}
                        
                        <div className="flex justify-center gap-2 mt-6">
                           <div className="w-6 h-1.5 bg-teal-600 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-slate-300 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-slate-300 rounded-full"></div>
                           <div className="w-2 h-1.5 bg-slate-300 rounded-full"></div>
                        </div>
                     </div>

                     {/* Latest Articles */}
                     <div>
                        <h2 className="text-[24px] font-bold text-[#1B3A6B] mb-6">Bài viết mới nhất</h2>
                        {loading ? (
                           <div className="grid md:grid-cols-2 gap-6">
                              {[1, 2, 3, 4].map((idx) => (
                                 <div key={idx} className="animate-pulse bg-white rounded-[20px] border border-slate-100 h-[400px] flex flex-col">
                                    <div className="h-[220px] bg-slate-200"></div>
                                    <div className="p-6 space-y-3">
                                       <div className="h-4 bg-slate-200 w-1/4"></div>
                                       <div className="h-6 bg-slate-200 w-3/4"></div>
                                       <div className="h-4 bg-slate-200 w-full"></div>
                                       <div className="h-4 bg-slate-200 w-1/2"></div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <div className="grid md:grid-cols-2 gap-6">
                              {latestPosts.map((post: any, idx: number) => (
                                 <Card key={idx} className="overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[20px] transition-all group cursor-pointer flex flex-col bg-white">
                                    <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                                       <Image src={post.coverImage || "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69"} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <CardContent className="p-6 flex flex-col flex-1">
                                       <div className="flex items-center justify-between mb-4">
                                          <span className="text-[10px] font-bold text-teal-600 px-2.5 py-1 bg-teal-50 rounded uppercase tracking-wider">{post.category || 'Tin tức'}</span>
                                          <span className="text-[12px] text-slate-500 font-medium">5 phút đọc</span>
                                       </div>
                                       <h4 className="font-bold text-[18px] text-[#1B3A6B] mb-3 group-hover:text-teal-600 transition-colors line-clamp-2 leading-tight">{post.title}</h4>
                                       <p className="text-[14px] text-slate-600 mb-6 line-clamp-2 flex-1 leading-relaxed">{post.excerpt}</p>
                                       <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                                          <div className="flex items-center gap-2.5">
                                             <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-bold text-teal-600 overflow-hidden">
                                                {post.author?.firstName?.charAt(0) || 'A'}
                                             </div>
                                             <span className="text-[13px] font-bold text-[#1B3A6B]">{post.author?.firstName || 'Admin'}</span>
                                          </div>
                                          <span className="text-[12px] text-slate-400 font-medium">{new Date(post.createdAt).toLocaleDateString('vi-VN')}</span>
                                       </div>
                                    </CardContent>
                                 </Card>
                              ))}
                           </div>
                        )}
                        <div className="mt-12 text-center">
                           <Button variant="outline" className="h-[48px] rounded-[12px] px-10 text-teal-600 border-teal-600 hover:bg-teal-50 font-bold text-[15px]">
                              Xem thêm bài viết <ChevronDown className="w-4 h-4 ml-2" />
                           </Button>
                        </div>
                     </div>
                  </div>

                  {/* Right Column - Sidebar */}
                  <div className="lg:w-[35%] space-y-8">

                     {/* Trending Topics */}
                     <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-[24px] bg-white">
                        <CardContent className="p-8">
                           <h3 className="font-bold text-[18px] text-[#1B3A6B] mb-6">Chủ đề được quan tâm</h3>
                           <div className="space-y-6">
                              {trendingTopics.map((topic, idx) => (
                                 <div key={idx} className="flex items-start gap-5 group cursor-pointer">
                                    <span className="text-[28px] font-bold text-slate-200 group-hover:text-teal-200 transition-colors mt-0.5 leading-none">
                                       {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1 border-b border-slate-50 pb-4">
                                       <h4 className="text-[15px] font-bold text-[#1B3A6B] group-hover:text-teal-600 transition-colors mb-1.5 leading-snug">{topic.title}</h4>
                                       <span className="text-[13px] text-slate-500 font-medium">{topic.count}</span>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </CardContent>
                     </Card>

                     {/* Newsletter */}
                     <Card className="border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] bg-[#F8FBFC] rounded-[24px]">
                        <CardContent className="p-8">
                           <h3 className="font-bold text-[18px] text-[#1B3A6B] mb-3">Đăng ký nhận bản tin</h3>
                           <p className="text-[14px] text-slate-600 mb-6 leading-relaxed">Nhận những thông tin sức khỏe mới nhất từ ToplifeAI mỗi tuần.</p>
                           <form className="space-y-4">
                              <Input placeholder="Nhập email của bạn" className="bg-white border-slate-200 rounded-[12px] h-[48px] text-[14px]" required />
                              <Button className="w-full bg-teal-600 hover:bg-teal-700 rounded-[12px] h-[48px] font-bold text-[15px]">Đăng ký ngay</Button>
                              <p className="text-[12px] text-slate-500 text-center font-medium mt-4">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
                           </form>
                        </CardContent>
                     </Card>

                     {/* Featured Videos */}
                     <div>
                        <div className="flex justify-between items-center mb-6">
                           <h3 className="font-bold text-[18px] text-[#1B3A6B]">Video nổi bật</h3>
                           <Link href="#" className="text-[13px] text-teal-600 font-bold hover:underline">Xem tất cả</Link>
                        </div>
                        <div className="space-y-5">
                           {videos.map((vid, idx) => (
                              <div key={idx} className="flex gap-4 group cursor-pointer bg-white p-3 rounded-[16px] border border-slate-50 shadow-sm hover:shadow-md transition-shadow">
                                 <div className="relative w-[130px] h-[85px] rounded-[10px] overflow-hidden shrink-0">
                                    <Image src={vid.img} alt={vid.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                       <PlayCircle className="w-8 h-8 text-white/90" />
                                    </div>
                                    <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{vid.time}</span>
                                 </div>
                                 <div className="flex flex-col justify-center">
                                    <h4 className="text-[14px] font-bold text-[#1B3A6B] mb-2 group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">{vid.title}</h4>
                                    <span className="text-[12px] text-slate-500 font-medium">ToplifeAI • {vid.views}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Bottom CTA Banner */}
         <section className="py-12 bg-white">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="bg-[#F0F7F9] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-100">
                  <div className="flex items-center gap-6 lg:gap-8">
                     <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-teal-50">
                        <MailIcon className="w-8 h-8 lg:w-10 lg:h-10 text-teal-600" />
                     </div>
                     <div>
                        <h2 className="text-[20px] lg:text-[24px] font-bold text-[#1B3A6B] mb-2">Bạn muốn trở thành chuyên gia đóng góp bài viết?</h2>
                        <p className="text-slate-600 text-[14px] lg:text-[15px] font-medium">Chia sẻ kiến thức và kinh nghiệm của bạn đến cộng đồng ToplifeAI.</p>
                     </div>
                  </div>
                  <Button className="h-[52px] px-10 bg-teal-600 hover:bg-teal-700 rounded-[12px] font-bold text-[15px] whitespace-nowrap">
                     Gửi bài viết
                  </Button>
               </div>
            </div>
         </section>

         {/* Trust Features Row */}
         <section className="py-12 bg-white border-t border-slate-100">
            <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-12">
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                  <div className="flex items-start lg:items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0"><CheckCircle2 className="w-6 h-6" strokeWidth={2.5} /></div>
                     <div>
                        <h4 className="font-bold text-[15px] text-[#1B3A6B] mb-1">Thông tin chính xác</h4>
                        <p className="text-[13px] text-slate-500 font-medium">Được kiểm duyệt bởi đội ngũ chuyên gia</p>
                     </div>
                  </div>
                  <div className="flex items-start lg:items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0"><RefreshCcw className="w-6 h-6" strokeWidth={2.5} /></div>
                     <div>
                        <h4 className="font-bold text-[15px] text-[#1B3A6B] mb-1">Cập nhật mỗi ngày</h4>
                        <p className="text-[13px] text-slate-500 font-medium">Tin tức mới nhất từ nguồn uy tín</p>
                     </div>
                  </div>
                  <div className="flex items-start lg:items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0"><Lightbulb className="w-6 h-6" strokeWidth={2.5} /></div>
                     <div>
                        <h4 className="font-bold text-[15px] text-[#1B3A6B] mb-1">Dễ hiểu & hữu ích</h4>
                        <p className="text-[13px] text-slate-500 font-medium">Kiến thức y khoa dễ hiểu, áp dụng được</p>
                     </div>
                  </div>
                  <div className="flex items-start lg:items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0"><HeartHandshake className="w-6 h-6" strokeWidth={2.5} /></div>
                     <div>
                        <h4 className="font-bold text-[15px] text-[#1B3A6B] mb-1">Vì cộng đồng khỏe mạnh</h4>
                        <p className="text-[13px] text-slate-500 font-medium">ToplifeAI đồng hành cùng bạn</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </div>
   );
}

// Helper icons
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
   return <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}
