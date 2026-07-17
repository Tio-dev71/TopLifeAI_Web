const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');

const newTranslations = {
  VI: {
    services: {
      breadcrumb: "Dịch vụ",
      title: "Dịch vụ chăm sóc\nsức khỏe toàn diện",
      desc: "ToplifeAI kết nối bạn với đội ngũ bác sĩ và chuyên gia hàng đầu, cùng công nghệ AI tiên tiến – mang đến giải pháp chăm sóc sức khỏe cá nhân hóa, chính xác và tiện lợi.",
      healthScore: "AI Health Score",
      outstanding: "Các dịch vụ nổi bật",
      learnMore: "Tìm hiểu thêm",
      list: [
        { name: "Khám & Tư vấn với chuyên gia", desc: "Tư vấn trực tuyến hoặc trực tiếp với các bác sĩ đầu ngành trong và ngoài nước." },
        { name: "Xét nghiệm Gene & Y học chính xác", desc: "Giải mã gen, đánh giá nguy cơ bệnh tật và cá nhân hóa kế hoạch phòng ngừa & điều trị." },
        { name: "Nhi khoa quốc tế", desc: "Chăm sóc và điều trị chuyên sâu cho trẻ em với đội ngũ chuyên gia nhi khoa hàng đầu." },
        { name: "Thẩm mỹ & Làm đẹp", desc: "Dịch vụ thẩm mỹ an toàn, hiện đại với công nghệ tiên tiến và bác sĩ chuyên khoa giàu kinh nghiệm." },
        { name: "Phẫu thuật chỉnh hình", desc: "Điều trị các bệnh lý xương khớp, thay khớp, nội soi khớp, chỉnh hình cột sống với kỹ thuật tiên tiến." },
        { name: "Ngoại khoa chuyên sâu", desc: "Phẫu thuật tiêu hóa, gan mật, tiết niệu, ung bướu... với trang thiết bị hiện đại, chuẩn quốc tế." },
        { name: "Tầm soát & Kiểm tra sức khỏe", desc: "Gói kiểm tra sức khỏe tổng quát, tầm soát ung thư và bệnh lý mạn tính toàn diện." },
        { name: "Wellness & Phục hồi sức khỏe", desc: "Liệu trình dưỡng sinh, phục hồi chức năng, y học cổ truyền kết hợp công nghệ hiện đại." }
      ],
      trust: {
        f1: { title: "Bác sĩ & chuyên gia\nhàng đầu", desc: "Đội ngũ chuyên môn cao,\ngiàu kinh nghiệm" },
        f2: { title: "Công nghệ AI\nhiện đại", desc: "Phân tích dữ liệu chính xác,\ncá nhân hóa" },
        f3: { title: "Quy trình\nchuẩn quốc tế", desc: "An toàn, minh bạch,\nhiệu quả" },
        f4: { title: "Bảo mật thông tin\ntuyệt đối", desc: "Đạt tiêu chuẩn bảo mật\nquốc tế" },
        f5: { title: "Hỗ trợ toàn diện\n24/7", desc: "Đồng hành cùng bạn\nmọi lúc, mọi nơi" }
      },
      intl: {
        title: "Chương trình dành cho\nbệnh nhân quốc tế",
        desc: "ToplifeAI cung cấp dịch vụ hỗ trợ toàn diện cho bệnh nhân quốc tế khi đến Việt Nam thăm khám và điều trị.",
        checks: [
          "Tư vấn & hội chẩn từ xa", "Phiên dịch y tế chuyên nghiệp", "Hỗ trợ visa y tế & giấy mời", "Điều phối lịch khám & điều trị", "Đón sân bay, đặt khách sạn", "Theo dõi & chăm sóc sau điều trị"
        ],
        btn: "Tìm hiểu chương trình",
        processTitle: "Quy trình 6 bước đơn giản",
        steps: [
          { step: "01", title: "Gửi yêu cầu\n& hồ sơ" },
          { step: "02", title: "Hội chẩn\n& tư vấn" },
          { step: "03", title: "Lên kế hoạch\nđiều trị" },
          { step: "04", title: "Chuẩn bị\nđến Việt Nam" },
          { step: "05", title: "Điều trị\n& chăm sóc" },
          { step: "06", title: "Theo dõi\nsau điều trị" }
        ],
        langSupport: { title: "Hỗ trợ đa ngôn ngữ", desc: "EN | 中文 | 한국어 | 日本語 | ភាសាខ្មែរ | Русский" },
        partners: { title: "Đối tác bệnh viện uy tín", desc: "Vinmec, Việt Đức, Nhi TW, Tâm Anh, Hồng Ngọc..." }
      },
      cta: {
        title: "Bạn cần tư vấn dịch vụ phù hợp?",
        desc: "Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn.",
        btn1: "Liên hệ ngay",
        btn2: "Đặt lịch tư vấn miễn phí"
      }
    }
  },
  EN: {
    services: {
      breadcrumb: "Services",
      title: "Comprehensive Healthcare\nServices",
      desc: "ToplifeAI connects you with leading doctors and experts, along with advanced AI technology – delivering personalized, precise, and convenient healthcare solutions.",
      healthScore: "AI Health Score",
      outstanding: "Outstanding Services",
      learnMore: "Learn more",
      list: [
        { name: "Expert Consultation", desc: "Online or in-person consultation with leading domestic and international doctors." },
        { name: "Genetic Testing & Precision Medicine", desc: "Decode genes, assess disease risks, and personalize prevention & treatment plans." },
        { name: "International Pediatrics", desc: "Intensive care and treatment for children with a team of leading pediatric experts." },
        { name: "Aesthetics & Beauty", desc: "Safe, modern aesthetic services with advanced technology and experienced specialists." },
        { name: "Orthopedic Surgery", desc: "Treatment of musculoskeletal disorders, joint replacement, arthroscopy, spinal orthopedics with advanced techniques." },
        { name: "Intensive Surgery", desc: "Digestive, hepatobiliary, urological, oncological surgery... with modern, international standard equipment." },
        { name: "Health Screening & Check-up", desc: "Comprehensive general health check-up, cancer screening, and chronic disease screening packages." },
        { name: "Wellness & Rehabilitation", desc: "Nourishing therapy, rehabilitation, traditional medicine combined with modern technology." }
      ],
      trust: {
        f1: { title: "Leading Doctors &\nExperts", desc: "Highly specialized,\nexperienced team" },
        f2: { title: "Modern AI\nTechnology", desc: "Accurate, personalized\ndata analysis" },
        f3: { title: "International Standard\nProcess", desc: "Safe, transparent,\neffective" },
        f4: { title: "Absolute Information\nSecurity", desc: "Meets international\nsecurity standards" },
        f5: { title: "Comprehensive Support\n24/7", desc: "Accompanying you\nanytime, anywhere" }
      },
      intl: {
        title: "Program for\nInternational Patients",
        desc: "ToplifeAI provides comprehensive support services for international patients coming to Vietnam for examination and treatment.",
        checks: [
          "Remote consultation", "Professional medical translation", "Medical visa & invitation support", "Schedule examination & treatment", "Airport pickup, hotel booking", "Post-treatment monitoring & care"
        ],
        btn: "Learn about the program",
        processTitle: "Simple 6-Step Process",
        steps: [
          { step: "01", title: "Submit Request\n& Records" },
          { step: "02", title: "Consultation\n& Advice" },
          { step: "03", title: "Treatment\nPlanning" },
          { step: "04", title: "Preparation for\nVietnam" },
          { step: "05", title: "Treatment\n& Care" },
          { step: "06", title: "Post-treatment\nMonitoring" }
        ],
        langSupport: { title: "Multilingual Support", desc: "EN | 中文 | 한국어 | 日本語 | ភាសាខ្មែរ | Русский" },
        partners: { title: "Reputable Hospital Partners", desc: "Vinmec, Viet Duc, National Children's Hospital, Tam Anh, Hong Ngoc..." }
      },
      cta: {
        title: "Need advice on suitable services?",
        desc: "Our team is always ready to support you.",
        btn1: "Contact Now",
        btn2: "Book Free Consultation"
      }
    }
  },
  KO: {
    services: {
      breadcrumb: "서비스",
      title: "포괄적인 건강 관리\n서비스",
      desc: "ToplifeAI는 최고의 의사 및 전문가와 첨단 AI 기술을 연결하여 개인화되고 정확하며 편리한 의료 솔루션을 제공합니다.",
      healthScore: "AI 건강 점수",
      outstanding: "주요 서비스",
      learnMore: "더 알아보기",
      list: [
        { name: "전문가 상담", desc: "국내외 주요 의사들과의 온라인 또는 대면 상담." },
        { name: "유전자 검사 및 정밀 의학", desc: "유전자를 해독하고, 질병 위험을 평가하고, 예방 및 치료 계획을 개인화합니다." },
        { name: "국제 소아과", desc: "최고의 소아과 전문가 팀과 함께 어린이 집중 치료." },
        { name: "미용 및 뷰티", desc: "첨단 기술과 경험이 풍부한 전문가와 함께 안전하고 현대적인 미용 서비스." },
        { name: "정형외과 수술", desc: "첨단 기술을 이용한 근골격계 질환, 인공관절 치환술, 관절경 검사, 척추 정형외과 치료." },
        { name: "집중 수술", desc: "국제 표준의 현대 장비를 갖춘 소화기, 간담도, 비뇨기과, 종양 수술..." },
        { name: "건강 검진", desc: "포괄적인 종합 건강 검진, 암 검진, 만성 질환 검진 패키지." },
        { name: "웰니스 및 재활", desc: "현대 기술과 결합된 한의학, 재활, 영양 요법." }
      ],
      trust: {
        f1: { title: "최고의 의사 및\n전문가", desc: "고도로 전문화되고\n경험이 풍부한 팀" },
        f2: { title: "현대 AI\n기술", desc: "정확하고 개인화된\n데이터 분석" },
        f3: { title: "국제 표준\n프로세스", desc: "안전하고 투명하며\n효과적" },
        f4: { title: "절대적인 정보\n보안", desc: "국제 보안\n표준 충족" },
        f5: { title: "포괄적인 지원\n24/7", desc: "언제 어디서나\n함께합니다" }
      },
      intl: {
        title: "외국인 환자를 위한\n프로그램",
        desc: "ToplifeAI는 진찰 및 치료를 위해 베트남을 방문하는 외국인 환자를 위한 포괄적인 지원 서비스를 제공합니다.",
        checks: [
          "원격 상담 및 진료", "전문 의료 통역", "의료 비자 및 초청장 지원", "진찰 및 치료 일정 조정", "공항 픽업, 호텔 예약", "치료 후 모니터링 및 관리"
        ],
        btn: "프로그램 알아보기",
        processTitle: "간단한 6단계 프로세스",
        steps: [
          { step: "01", title: "요청 및\n기록 제출" },
          { step: "02", title: "상담 및\n조언" },
          { step: "03", title: "치료\n계획" },
          { step: "04", title: "베트남\n방문 준비" },
          { step: "05", title: "치료\n및 관리" },
          { step: "06", title: "치료 후\n모니터링" }
        ],
        langSupport: { title: "다국어 지원", desc: "EN | 中文 | 한국어 | 日本語 | ភាសាខ្មែរ | Русский" },
        partners: { title: "평판이 좋은 병원 파트너", desc: "빈멕, 비엣득, 국립어린이병원, 떰안, 홍응옥..." }
      },
      cta: {
        title: "적절한 서비스에 대한 조언이 필요하십니까?",
        desc: "저희 팀은 항상 귀하를 지원할 준비가 되어 있습니다.",
        btn1: "지금 연락하기",
        btn2: "무료 상담 예약"
      }
    }
  },
  JA: {
    services: {
      breadcrumb: "サービス",
      title: "包括的なヘルスケア\nサービス",
      desc: "ToplifeAIは、主要な医師や専門家、および高度なAIテクノロジーとあなたを結び付け、パーソナライズされた、正確で便利なヘルスケアソリューションを提供します。",
      healthScore: "AIヘルススコア",
      outstanding: "主なサービス",
      learnMore: "詳細を見る",
      list: [
        { name: "専門家への相談", desc: "国内外の主要な医師とのオンラインまたは対面での相談。" },
        { name: "遺伝子検査と精密医療", desc: "遺伝子を解読し、病気のリスクを評価し、予防と治療計画をパーソナライズします。" },
        { name: "国際小児科", desc: "一流の小児科専門家チームによる子供の集中治療とケア。" },
        { name: "美学と美容", desc: "高度なテクノロジーと経験豊富なスペシャリストによる安全でモダンな美容サービス。" },
        { name: "整形外科", desc: "高度な技術による筋骨格系疾患、人工関節置換術、関節鏡検査、脊椎整形外科の治療。" },
        { name: "集中手術", desc: "最新の国際標準機器を使用した消化器、肝胆道、泌尿器、腫瘍手術..." },
        { name: "健康診断とチェック", desc: "包括的な一般的な健康診断、がん検診、および慢性疾患の検診パッケージ。" },
        { name: "ウェルネスとリハビリテーション", desc: "現代のテクノロジーと組み合わせた伝統医学、リハビリテーション、栄養療法。" }
      ],
      trust: {
        f1: { title: "主要な医師と\n専門家", desc: "高度に専門化され、\n経験豊富なチーム" },
        f2: { title: "最新のAI\nテクノロジー", desc: "正確でパーソナライズされた\nデータ分析" },
        f3: { title: "国際標準\nプロセス", desc: "安全、透明、\n効果的" },
        f4: { title: "絶対的な情報\nセキュリティ", desc: "国際的なセキュリティ\n基準を満たす" },
        f5: { title: "24時間年中無休の\n包括的なサポート", desc: "いつでもどこでも\nあなたに同行します" }
      },
      intl: {
        title: "外国人患者向け\nプログラム",
        desc: "ToplifeAIは、診察と治療のためにベトナムに来る外国人患者に包括的なサポートサービスを提供します。",
        checks: [
          "遠隔相談と診察", "専門的な医療通訳", "医療ビザと招待状のサポート", "診察と治療のスケジュール調整", "空港送迎、ホテル予約", "治療後のモニタリングとケア"
        ],
        btn: "プログラムについて学ぶ",
        processTitle: "シンプルな6ステッププロセス",
        steps: [
          { step: "01", title: "リクエストと\n記録の送信" },
          { step: "02", title: "相談と\nアドバイス" },
          { step: "03", title: "治療の\n計画" },
          { step: "04", title: "ベトナム\nへの準備" },
          { step: "05", title: "治療\nとケア" },
          { step: "06", title: "治療後の\nモニタリング" }
        ],
        langSupport: { title: "多言語サポート", desc: "EN | 中文 | 한국어 | 日本語 | ភាសាខ្មែរ | Русский" },
        partners: { title: "評判の良い病院パートナー", desc: "ビンメック、ベトドク、国立小児病院、タムアイン、ホンゴック..." }
      },
      cta: {
        title: "適切なサービスについてのアドバイスが必要ですか？",
        desc: "私たちのチームは常にあなたをサポートする準備ができています。",
        btn1: "今すぐ連絡する",
        btn2: "無料相談を予約する"
      }
    }
  },
  ZH: {
    services: {
      breadcrumb: "服务",
      title: "全面的医疗保健\n服务",
      desc: "ToplifeAI 将您与顶尖的医生和专家以及先进的 AI 技术联系起来，提供个性化、精准且便捷的医疗保健解决方案。",
      healthScore: "AI 健康评分",
      outstanding: "卓越服务",
      learnMore: "了解更多",
      list: [
        { name: "专家咨询", desc: "与国内外顶尖医生进行在线或面对面的咨询。" },
        { name: "基因检测与精准医疗", desc: "解码基因，评估疾病风险，并个性化预防和治疗计划。" },
        { name: "国际儿科", desc: "由顶尖儿科专家团队为儿童提供重症监护和治疗。" },
        { name: "美容与美学", desc: "利用先进技术和经验丰富的专家提供安全、现代的美容服务。" },
        { name: "骨科手术", desc: "采用先进技术治疗肌肉骨骼疾病、关节置换、关节镜检查和脊柱骨科。" },
        { name: "重症手术", desc: "配备国际标准现代设备的消化、肝胆、泌尿、肿瘤手术..." },
        { name: "健康筛查和体检", desc: "全面的综合健康体检、癌症筛查和慢性病筛查套餐。" },
        { name: "健康与康复", desc: "结合现代技术的传统医学、康复、营养疗法。" }
      ],
      trust: {
        f1: { title: "顶尖医生和\n专家", desc: "高度专业化、\n经验丰富的团队" },
        f2: { title: "现代 AI\n技术", desc: "准确、个性化的\n数据分析" },
        f3: { title: "国际标准\n流程", desc: "安全、透明、\n有效" },
        f4: { title: "绝对的信\n息安全", desc: "符合国际\n安全标准" },
        f5: { title: "24/7 全面\n支持", desc: "随时随地\n陪伴您" }
      },
      intl: {
        title: "国际患者\n计划",
        desc: "ToplifeAI为来越南就诊的国际患者提供全面的支持服务。",
        checks: [
          "远程咨询与诊断", "专业医疗翻译", "医疗签证及邀请函协助", "安排检查与治疗", "机场接机，酒店预订", "治疗后跟踪与护理"
        ],
        btn: "了解该计划",
        processTitle: "简单的6步流程",
        steps: [
          { step: "01", title: "提交请求\n和记录" },
          { step: "02", title: "咨询与\n建议" },
          { step: "03", title: "治疗\n计划" },
          { step: "04", title: "准备\n来越南" },
          { step: "05", title: "治疗\n与护理" },
          { step: "06", title: "治疗后\n跟踪" }
        ],
        langSupport: { title: "多语言支持", desc: "EN | 中文 | 한국어 | 日本語 | ភាសាខ្មែរ | Русский" },
        partners: { title: "知名医院合作伙伴", desc: "Vinmec、越德、国家儿童医院、Tam Anh、Hong Ngoc..." }
      },
      cta: {
        title: "需要有关合适服务的建议吗？",
        desc: "我们的团队随时准备为您提供支持。",
        btn1: "立即联系",
        btn2: "预约免费咨询"
      }
    }
  }
};

['vi', 'en', 'ko', 'ja', 'zh'].forEach(lang => {
  const file = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const uppercaseLang = lang.toUpperCase();
  data.services = newTranslations[uppercaseLang].services;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
});

console.log("Updated services locales successfully.");
