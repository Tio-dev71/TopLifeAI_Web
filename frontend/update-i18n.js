const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');

const newTranslations = {
  VI: {
    about: {
      breadcrumb: "Về chúng tôi",
      title: "Về",
      titleHighlight: "ToplifeAI",
      subtitle: "Công nghệ vì sức khỏe – \nĐồng hành cùng bạn trọn đời",
      desc: "ToplifeAI được thành lập với sứ mệnh ứng dụng trí tuệ nhân tạo và khoa học dữ liệu để cá nhân hóa hành trình chăm sóc sức khỏe, giúp mỗi người sống khỏe hơn, sống thọ hơn và hạnh phúc hơn.",
      watchVideo: "Xem video giới thiệu về ToplifeAI",
      mission: {
        title: "Sứ mệnh",
        desc: "Ứng dụng AI và dữ liệu y khoa tiên tiến để cung cấp giải pháp chăm sóc sức khỏe chính xác, cá nhân hóa và tiện lợi cho tất cả mọi người."
      },
      vision: {
        title: "Tầm nhìn",
        desc: "Trở thành nền tảng sức khỏe AI hàng đầu tại Việt Nam và khu vực, kết nối con người với những giải pháp y tế và công nghệ tốt nhất thế giới."
      },
      coreValues: {
        title: "Giá trị cốt lõi",
        v1: "Đặt sức khỏe & sự an toàn của khách hàng lên hàng đầu",
        v2: "Chính xác – Minh bạch – Bảo mật",
        v3: "Khoa học & Công nghệ làm nền tảng",
        v4: "Đồng hành dài hạn – Tạo giá trị bền vững"
      },
      stats: {
        title: "ToplifeAI qua những con số",
        users: "Người dùng tin tưởng",
        doctors: "Bác sĩ & chuyên gia hàng đầu",
        partners: "Bệnh viện & phòng khám đối tác",
        countries: "Quốc gia phục vụ",
        satisfaction: "Khách hàng hài lòng"
      },
      whyChooseUs: {
        title: "Vì sao chọn ToplifeAI?",
        healthReport: "Tốt",
        features: [
          { title: "Công nghệ AI tiên tiến", desc: "Phân tích dữ liệu chính xác, đưa ra khuyến nghị phù hợp với từng cá nhân." },
          { title: "Đội ngũ chuyên gia đầu ngành", desc: "Quy tụ các bác sĩ, chuyên gia giàu kinh nghiệm tại các bệnh viện lớn." },
          { title: "Dữ liệu sức khỏe toàn diện", desc: "Kết nối và lưu trữ an toàn mọi dữ liệu sức khỏe của bạn trên một nền tảng." },
          { title: "Bảo mật tuyệt đối", desc: "Tiêu chuẩn bảo mật quốc tế, bảo vệ thông tin cá nhân ở mức cao nhất." },
          { title: "Hệ sinh thái toàn diện", desc: "Từ dự phòng, chẩn đoán, điều trị đến theo dõi và chăm sóc sau điều trị." },
          { title: "Đồng hành trọn đời", desc: "ToplifeAI luôn đồng hành cùng bạn và gia đình trên hành trình sống khỏe." }
        ]
      },
      leadership: {
        title: "Ban lãnh đạo",
        leaders: [
          { name: "Nguyễn Hòa Bình", title: "Nhà sáng lập & CEO", desc: "Hơn 20 năm kinh nghiệm trong lĩnh vực y tế, công nghệ và phát triển hệ sinh thái sức khỏe tại Việt Nam." },
          { name: "TS.BS. Thanh Hà", title: "Giám đốc Y khoa", desc: "Bác sĩ Nhi khoa hàng đầu tại Bệnh viện Nhi Trung ương với hơn 20 năm kinh nghiệm lâm sàng." },
          { name: "ThS.BS. Hằng", title: "Giám đốc Chuyên môn", desc: "Chuyên gia trong lĩnh vực y học dự phòng, dinh dưỡng và quản lý sức khỏe chủ động." },
          { name: "Trần Quang Minh", title: "Giám đốc Công nghệ (CTO)", desc: "Chuyên gia AI & dữ liệu với 15+ năm kinh nghiệm phát triển các nền tảng công nghệ quy mô lớn." },
          { name: "Lê Tuấn Anh", title: "Giám đốc Vận hành (COO)", desc: "Kinh nghiệm quản trị, vận hành và phát triển hệ thống y tế, dịch vụ khách hàng trên toàn quốc." }
        ]
      },
      partners: {
        title: "Đối tác chiến lược",
        viewAll: "Xem tất cả đối tác"
      },
      timeline: {
        title: "Hành trình phát triển",
        steps: [
          { year: "2019", title: "Ý tưởng ToplifeAI ra đời" },
          { year: "2020", title: "Nghiên cứu & phát triển nền tảng công nghệ" },
          { year: "2021", title: "Ra mắt phiên bản đầu tiên" },
          { year: "2022", title: "Mở rộng hợp tác với các bệnh viện lớn" },
          { year: "2023", title: "Ứng dụng AI nâng cao & cá nhân hóa sức khỏe" },
          { year: "2024", title: "Phục vụ hơn 1 triệu người dùng" }
        ]
      },
      cta: {
        title: "ToplifeAI luôn nỗ lực mỗi ngày\nđể mang đến cho bạn\nmột tương lai khỏe mạnh hơn.",
        explore: "Khám phá dịch vụ",
        contact: "Liên hệ hợp tác"
      }
    }
  },
  EN: {
    about: {
      breadcrumb: "About Us",
      title: "About",
      titleHighlight: "ToplifeAI",
      subtitle: "Technology for health – \nYour lifelong companion",
      desc: "ToplifeAI was founded with the mission to apply artificial intelligence and data science to personalize your healthcare journey, helping everyone live healthier, longer, and happier lives.",
      watchVideo: "Watch ToplifeAI introduction video",
      mission: {
        title: "Mission",
        desc: "Applying advanced AI and medical data to provide precise, personalized, and convenient healthcare solutions for everyone."
      },
      vision: {
        title: "Vision",
        desc: "To become the leading AI health platform in Vietnam and the region, connecting people with the world's best medical and technology solutions."
      },
      coreValues: {
        title: "Core Values",
        v1: "Put customers' health & safety first",
        v2: "Accuracy – Transparency – Security",
        v3: "Science & Technology as the foundation",
        v4: "Long-term companionship – Sustainable value creation"
      },
      stats: {
        title: "ToplifeAI in Numbers",
        users: "Trusted Users",
        doctors: "Leading Doctors & Experts",
        partners: "Partner Hospitals & Clinics",
        countries: "Countries Served",
        satisfaction: "Satisfied Customers"
      },
      whyChooseUs: {
        title: "Why Choose ToplifeAI?",
        healthReport: "Good",
        features: [
          { title: "Advanced AI Technology", desc: "Accurate data analysis, providing personalized recommendations." },
          { title: "Leading Expert Team", desc: "Gathering highly experienced doctors and experts from major hospitals." },
          { title: "Comprehensive Health Data", desc: "Securely connect and store all your health data on a single platform." },
          { title: "Absolute Security", desc: "International security standards, protecting personal information at the highest level." },
          { title: "Comprehensive Ecosystem", desc: "From prevention, diagnosis, treatment to monitoring and post-treatment care." },
          { title: "Lifelong Companionship", desc: "ToplifeAI always accompanies you and your family on the journey of healthy living." }
        ]
      },
      leadership: {
        title: "Leadership Team",
        leaders: [
          { name: "Nguyen Hoa Binh", title: "Founder & CEO", desc: "Over 20 years of experience in healthcare, technology, and developing health ecosystems in Vietnam." },
          { name: "Dr. Thanh Ha", title: "Chief Medical Officer", desc: "Leading Pediatrician at National Children's Hospital with over 20 years of clinical experience." },
          { name: "Dr. Hang", title: "Chief Professional Officer", desc: "Expert in preventive medicine, nutrition, and proactive health management." },
          { name: "Tran Quang Minh", title: "Chief Technology Officer (CTO)", desc: "AI & Data expert with 15+ years of experience developing large-scale technology platforms." },
          { name: "Le Tuan Anh", title: "Chief Operating Officer (COO)", desc: "Experience in management, operations, and development of healthcare systems and customer service nationwide." }
        ]
      },
      partners: {
        title: "Strategic Partners",
        viewAll: "View all partners"
      },
      timeline: {
        title: "Development Journey",
        steps: [
          { year: "2019", title: "ToplifeAI idea was born" },
          { year: "2020", title: "Research & develop technology platform" },
          { year: "2021", title: "Launch of the first version" },
          { year: "2022", title: "Expand cooperation with major hospitals" },
          { year: "2023", title: "Advanced AI application & personalized health" },
          { year: "2024", title: "Serving over 1 million users" }
        ]
      },
      cta: {
        title: "ToplifeAI strives every day\nto bring you\na healthier future.",
        explore: "Explore Services",
        contact: "Contact for Cooperation"
      }
    }
  },
  KO: {
    about: {
      breadcrumb: "회사 소개",
      title: "소개",
      titleHighlight: "ToplifeAI",
      subtitle: "건강을 위한 기술 – \n평생의 동반자",
      desc: "ToplifeAI는 인공지능과 데이터 과학을 활용하여 귀하의 의료 여정을 개인화하여 모든 사람이 더 건강하고 길고 행복한 삶을 살 수 있도록 돕는다는 사명으로 설립되었습니다.",
      watchVideo: "ToplifeAI 소개 비디오 시청",
      mission: {
        title: "사명",
        desc: "고급 AI 및 의료 데이터를 적용하여 모두에게 정확하고 개인화되고 편리한 의료 솔루션을 제공합니다."
      },
      vision: {
        title: "비전",
        desc: "사람들을 세계 최고의 의료 및 기술 솔루션과 연결하는 베트남 및 지역 최고의 AI 건강 플랫폼이 됩니다."
      },
      coreValues: {
        title: "핵심 가치",
        v1: "고객의 건강과 안전 최우선",
        v2: "정확성 – 투명성 – 보안",
        v3: "과학과 기술을 기반으로",
        v4: "장기적인 동반자 – 지속 가능한 가치 창출"
      },
      stats: {
        title: "숫자로 보는 ToplifeAI",
        users: "신뢰하는 사용자",
        doctors: "최고의 의사 및 전문가",
        partners: "파트너 병원 및 클리닉",
        countries: "서비스 제공 국가",
        satisfaction: "만족한 고객"
      },
      whyChooseUs: {
        title: "ToplifeAI를 선택하는 이유?",
        healthReport: "좋음",
        features: [
          { title: "고급 AI 기술", desc: "정확한 데이터 분석을 통해 맞춤형 추천 제공." },
          { title: "최고의 전문가 팀", desc: "주요 병원의 경험이 풍부한 의사와 전문가를 모았습니다." },
          { title: "포괄적인 건강 데이터", desc: "단일 플랫폼에서 모든 건강 데이터를 안전하게 연결하고 저장합니다." },
          { title: "완벽한 보안", desc: "국제 보안 표준, 최고 수준의 개인 정보 보호." },
          { title: "포괄적인 생태계", desc: "예방, 진단, 치료부터 모니터링 및 치료 후 관리까지." },
          { title: "평생의 동반자", desc: "ToplifeAI는 건강한 삶의 여정에 항상 귀하와 귀하의 가족과 함께합니다." }
        ]
      },
      leadership: {
        title: "리더십 팀",
        leaders: [
          { name: "응우옌 호아 빈", title: "창립자 및 CEO", desc: "베트남의 의료, 기술 및 건강 생태계 개발 분야에서 20년 이상의 경험." },
          { name: "Dr. 탄 하", title: "최고 의료 책임자", desc: "20년 이상의 임상 경험을 가진 국립 어린이 병원의 수석 소아과 전문의." },
          { name: "Dr. 항", title: "최고 전문 책임자", desc: "예방 의학, 영양 및 능동적 건강 관리 전문가." },
          { name: "트란 꽝 민", title: "최고 기술 책임자(CTO)", desc: "대규모 기술 플랫폼 개발 경험이 15년 이상인 AI 및 데이터 전문가." },
          { name: "레 투안 안", title: "최고 운영 책임자(COO)", desc: "전국적인 의료 시스템 및 고객 서비스의 관리, 운영 및 개발 경험." }
        ]
      },
      partners: {
        title: "전략적 파트너",
        viewAll: "모든 파트너 보기"
      },
      timeline: {
        title: "개발 여정",
        steps: [
          { year: "2019", title: "ToplifeAI 아이디어 탄생" },
          { year: "2020", title: "기술 플랫폼 연구 및 개발" },
          { year: "2021", title: "첫 번째 버전 출시" },
          { year: "2022", title: "주요 병원과의 협력 확대" },
          { year: "2023", title: "고급 AI 적용 및 맞춤형 건강" },
          { year: "2024", title: "100만 명 이상의 사용자에게 서비스 제공" }
        ]
      },
      cta: {
        title: "ToplifeAI는 더 건강한 미래를\n선물하기 위해\n매일 노력합니다.",
        explore: "서비스 살펴보기",
        contact: "협력 문의"
      }
    }
  },
  JA: {
    about: {
      breadcrumb: "会社概要",
      title: "概要",
      titleHighlight: "ToplifeAI",
      subtitle: "健康のためのテクノロジー – \n生涯のパートナー",
      desc: "ToplifeAIは、人工知能とデータサイエンスを活用してヘルスケアの旅をパーソナライズし、すべての人がより健康で、より長く、より幸せな生活を送れるように支援するという使命を持って設立されました。",
      watchVideo: "ToplifeAIの紹介動画を見る",
      mission: {
        title: "ミッション",
        desc: "高度なAIと医療データを適用して、すべての人に正確でパーソナライズされた便利なヘルスケアソリューションを提供します。"
      },
      vision: {
        title: "ビジョン",
        desc: "ベトナムおよび地域を代表するAIヘルスプラットフォームになり、人々を世界最高の医療およびテクノロジーソリューションと結び付けます。"
      },
      coreValues: {
        title: "コアバリュー",
        v1: "お客様の健康と安全を第一に考える",
        v2: "正確性 – 透明性 – セキュリティ",
        v3: "科学と技術を基盤に",
        v4: "長期的な関係 – 持続可能な価値創造"
      },
      stats: {
        title: "数字で見るToplifeAI",
        users: "信頼するユーザー",
        doctors: "主要な医師と専門家",
        partners: "提携病院とクリニック",
        countries: "サービス提供国",
        satisfaction: "満足した顧客"
      },
      whyChooseUs: {
        title: "ToplifeAIが選ばれる理由",
        healthReport: "良い",
        features: [
          { title: "高度なAIテクノロジー", desc: "正確なデータ分析により、パーソナライズされた推奨事項を提供します。" },
          { title: "トップエキスパートチーム", desc: "主要な病院から経験豊富な医師や専門家を集めました。" },
          { title: "包括的な健康データ", desc: "単一のプラットフォームですべての健康データを安全に接続して保存します。" },
          { title: "絶対的なセキュリティ", desc: "国際的なセキュリティ基準で、個人情報を最高レベルで保護します。" },
          { title: "包括的なエコシステム", desc: "予防、診断、治療から監視、治療後のケアまで。" },
          { title: "生涯のパートナー", desc: "ToplifeAIは、健康的な生活の旅で常にあなたとあなたの家族のそばにいます。" }
        ]
      },
      leadership: {
        title: "リーダーシップチーム",
        leaders: [
          { name: "グエン・ホア・ビン", title: "創設者兼CEO", desc: "ベトナムのヘルスケア、テクノロジー、および健康エコシステムの開発において20年以上の経験。" },
          { name: "Dr. タン・ハ", title: "最高医療責任者", desc: "20年以上の臨床経験を持つ国立小児病院の主任小児科医。" },
          { name: "Dr. ハン", title: "最高専門責任者", desc: "予防医学、栄養、プロアクティブな健康管理の専門家。" },
          { name: "トラン・クアン・ミン", title: "最高技術責任者 (CTO)", desc: "大規模なテクノロジープラットフォームの開発において15年以上の経験を持つAIとデータの専門家。" },
          { name: "レ・トゥアン・アン", title: "最高執行責任者 (COO)", desc: "全国の医療システムとカスタマーサービスの管理、運営、開発の経験。" }
        ]
      },
      partners: {
        title: "戦略的パートナー",
        viewAll: "すべてのパートナーを見る"
      },
      timeline: {
        title: "開発の歩み",
        steps: [
          { year: "2019", title: "ToplifeAIのアイデアが誕生" },
          { year: "2020", title: "テクノロジープラットフォームの研究開発" },
          { year: "2021", title: "最初のバージョンをリリース" },
          { year: "2022", title: "主要な病院との協力を拡大" },
          { year: "2023", title: "高度なAIの適用とパーソナライズされた健康" },
          { year: "2024", title: "100万人以上のユーザーにサービスを提供" }
        ]
      },
      cta: {
        title: "ToplifeAIは、より健康的な未来を\nお届けするために\n日々努力しています。",
        explore: "サービスを見る",
        contact: "お問い合わせ"
      }
    }
  },
  ZH: {
    about: {
      breadcrumb: "关于我们",
      title: "关于",
      titleHighlight: "ToplifeAI",
      subtitle: "科技助力健康 – \n您的终身伴侣",
      desc: "ToplifeAI 的创立使命是应用人工智能和数据科学来个性化您的医疗保健之旅，帮助每个人过上更健康、更长寿、更快乐的生活。",
      watchVideo: "观看 ToplifeAI 介绍视频",
      mission: {
        title: "使命",
        desc: "应用先进的 AI 和医疗数据，为所有人提供精确、个性化且便捷的医疗保健解决方案。"
      },
      vision: {
        title: "愿景",
        desc: "成为越南及该地区领先的 AI 健康平台，将人们与世界上最好的医疗和技术解决方案联系起来。"
      },
      coreValues: {
        title: "核心价值",
        v1: "将客户的健康和安全放在首位",
        v2: "准确 – 透明 – 安全",
        v3: "以科学和技术为基础",
        v4: "长期陪伴 – 创造可持续价值"
      },
      stats: {
        title: "数字ToplifeAI",
        users: "信任用户",
        doctors: "顶尖医生和专家",
        partners: "合作医院和诊所",
        countries: "服务国家",
        satisfaction: "满意的客户"
      },
      whyChooseUs: {
        title: "为什么选择 ToplifeAI？",
        healthReport: "良好",
        features: [
          { title: "先进的 AI 科技", desc: "准确的数据分析，提供个性化的建议。" },
          { title: "顶尖专家团队", desc: "聚集了来自主要医院的经验丰富的医生和专家。" },
          { title: "全面的健康数据", desc: "在单一平台上安全地连接和存储您的所有健康数据。" },
          { title: "绝对安全", desc: "国际安全标准，最高级别保护个人信息。" },
          { title: "全面的生态系统", desc: "从预防、诊断、治疗到监测和治疗后护理。" },
          { title: "终身陪伴", desc: "ToplifeAI 始终陪伴您和您的家人走在健康生活的旅程中。" }
        ]
      },
      leadership: {
        title: "领导团队",
        leaders: [
          { name: "阮和平", title: "创始人兼首席执行官", desc: "在越南医疗保健、技术和健康生态系统开发方面拥有 20 多年的经验。" },
          { name: "清霞 博士", title: "首席医疗官", desc: "国家儿童医院首席儿科医生，拥有 20 多年的临床经验。" },
          { name: "恒 博士", title: "首席专业官", desc: "预防医学、营养和主动健康管理专家。" },
          { name: "陈光明显", title: "首席技术官 (CTO)", desc: "AI和数据专家，拥有 15 年以上开发大型技术平台的经验。" },
          { name: "黎俊英", title: "首席运营官 (COO)", desc: "拥有全国医疗系统和客户服务管理、运营和开发经验。" }
        ]
      },
      partners: {
        title: "战略合作伙伴",
        viewAll: "查看所有合作伙伴"
      },
      timeline: {
        title: "发展历程",
        steps: [
          { year: "2019", title: "ToplifeAI 理念诞生" },
          { year: "2020", title: "研发技术平台" },
          { year: "2021", title: "发布第一个版本" },
          { year: "2022", title: "扩大与主要医院的合作" },
          { year: "2023", title: "高级 AI 应用和个性化健康" },
          { year: "2024", title: "服务超过 100 万用户" }
        ]
      },
      cta: {
        title: "ToplifeAI 每天都在努力\n为您带来\n更健康的未来。",
        explore: "探索服务",
        contact: "合作联系"
      }
    }
  }
};

['vi', 'en', 'ko', 'ja', 'zh'].forEach(lang => {
  const file = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const uppercaseLang = lang.toUpperCase();
  data.about = newTranslations[uppercaseLang].about;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
});

console.log("Updated locales successfully.");
