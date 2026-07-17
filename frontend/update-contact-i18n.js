const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');

const newTranslations = {
  VI: {
    contact: {
      breadcrumb: "Liên hệ",
      title: "Liên hệ với ToplifeAI",
      subtitle: "Chúng tôi luôn sẵn sàng đồng hành cùng bạn",
      desc: "Mọi thắc mắc, nhu cầu tư vấn hoặc hợp tác, đội ngũ ToplifeAI sẽ phản hồi nhanh chóng và hỗ trợ bạn tốt nhất.",
      features: {
        f1: "Tư vấn chuyên sâu với bác sĩ & chuyên gia",
        f2: "Hỗ trợ bệnh nhân quốc tế 24/7",
        f3: "Bảo mật thông tin tuyệt đối"
      },
      form: {
        title: "Gửi yêu cầu cho chúng tôi",
        desc: "Vui lòng điền đầy đủ thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
        name: "Họ và tên*",
        email: "Email*",
        phone: "Số điện thoại*",
        subject: {
          placeholder: "Chọn chủ đề quan tâm*",
          opt1: "Tư vấn khám bệnh",
          opt2: "Xét nghiệm Gene",
          opt3: "Hợp tác đối tác",
          opt4: "Khác"
        },
        message: "Nội dung tin nhắn*",
        terms: "Tôi đồng ý với",
        policy: "Chính sách bảo mật",
        submit: "Gửi yêu cầu"
      },
      quickContact: {
        title: "Liên hệ nhanh qua các kênh",
        hotline: { title: "Hotline", sub: "Hỗ trợ 24/7" },
        zalo: { title: "Zalo OA", sub: "Nhắn tin ngay" },
        email: { title: "Email", sub: "Phản hồi trong 2h" },
        whatsapp: { title: "WhatsApp", sub: "Chat ngay" },
        booking: { title: "Đặt lịch tư vấn", value: "Chọn thời gian phù hợp", sub: "với bạn", linkText: "Đặt lịch ngay →" }
      },
      offices: {
        title: "Văn phòng của ToplifeAI",
        headquarters: "Trụ sở chính",
        office: "Văn phòng",
        international: "Văn phòng quốc tế",
        viewAll: "Xem tất cả chi nhánh"
      },
      faqMap: {
        faqTitle: "Câu hỏi thường gặp",
        viewMore: "Xem thêm câu hỏi →",
        mapTitle: "Chúng tôi ở đây",
        hq: "ToplifeAI Headquarters",
        address: "Tầng 12, Center Building, 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội",
        directions: "Chỉ đường"
      },
      cta: {
        title: "Bạn cần tư vấn chuyên sâu?",
        subtitle: "Đội ngũ bác sĩ và chuyên gia của ToplifeAI luôn sẵn sàng đồng hành cùng bạn.",
        f1: "Tư vấn 1:1 với chuyên gia",
        f2: "Lộ trình chăm sóc sức khỏe cá nhân hóa",
        f3: "Hỗ trợ trực tuyến 24/7",
        button: "Đặt lịch tư vấn ngay"
      }
    }
  },
  EN: {
    contact: {
      breadcrumb: "Contact",
      title: "Contact ToplifeAI",
      subtitle: "We are always ready to accompany you",
      desc: "For any questions, consultation or cooperation needs, the ToplifeAI team will respond quickly and provide you with the best support.",
      features: {
        f1: "In-depth consultation with doctors & experts",
        f2: "24/7 International patient support",
        f3: "Absolute information security"
      },
      form: {
        title: "Send us a request",
        desc: "Please fill out the information, we will contact you as soon as possible.",
        name: "Full Name*",
        email: "Email*",
        phone: "Phone Number*",
        subject: {
          placeholder: "Select a topic of interest*",
          opt1: "Medical Consultation",
          opt2: "Genetic Testing",
          opt3: "Partnership",
          opt4: "Other"
        },
        message: "Message Content*",
        terms: "I agree to the",
        policy: "Privacy Policy",
        submit: "Submit Request"
      },
      quickContact: {
        title: "Quick Contact Channels",
        hotline: { title: "Hotline", sub: "24/7 Support" },
        zalo: { title: "Zalo OA", sub: "Message Now" },
        email: { title: "Email", sub: "Response within 2h" },
        whatsapp: { title: "WhatsApp", sub: "Chat Now" },
        booking: { title: "Book a Consultation", value: "Choose a suitable time", sub: "for you", linkText: "Book Now →" }
      },
      offices: {
        title: "ToplifeAI Offices",
        headquarters: "Headquarters",
        office: "Office",
        international: "International Office",
        viewAll: "View all branches"
      },
      faqMap: {
        faqTitle: "Frequently Asked Questions",
        viewMore: "View more questions →",
        mapTitle: "We are here",
        hq: "ToplifeAI Headquarters",
        address: "12th Floor, Center Building, 1 Nguyen Huy Tuong, Thanh Xuan, Hanoi",
        directions: "Get Directions"
      },
      cta: {
        title: "Need an in-depth consultation?",
        subtitle: "ToplifeAI's team of doctors and experts is always ready to accompany you.",
        f1: "1:1 Consultation with experts",
        f2: "Personalized health care roadmap",
        f3: "24/7 Online Support",
        button: "Book a consultation now"
      }
    }
  },
  KO: {
    contact: {
      breadcrumb: "문의",
      title: "ToplifeAI 문의",
      subtitle: "우리는 항상 당신과 함께 할 준비가 되어 있습니다",
      desc: "질문, 상담 또는 협력 요구 사항이 있는 경우 ToplifeAI 팀이 신속하게 답변하고 최상의 지원을 제공할 것입니다.",
      features: {
        f1: "의사 및 전문가와의 심층 상담",
        f2: "연중무휴 국제 환자 지원",
        f3: "절대적인 정보 보안"
      },
      form: {
        title: "요청 보내기",
        desc: "정보를 기입해 주시면 가능한 한 빨리 연락드리겠습니다.",
        name: "성명*",
        email: "이메일*",
        phone: "전화번호*",
        subject: {
          placeholder: "관심 주제 선택*",
          opt1: "의료 상담",
          opt2: "유전자 검사",
          opt3: "파트너십",
          opt4: "기타"
        },
        message: "메시지 내용*",
        terms: "본인은 동의합니다",
        policy: "개인 정보 보호 정책",
        submit: "요청 제출"
      },
      quickContact: {
        title: "빠른 연락 채널",
        hotline: { title: "핫라인", sub: "연중무휴 지원" },
        zalo: { title: "Zalo OA", sub: "지금 메시지 보내기" },
        email: { title: "이메일", sub: "2시간 이내 응답" },
        whatsapp: { title: "WhatsApp", sub: "지금 채팅" },
        booking: { title: "상담 예약", value: "적절한 시간 선택", sub: "당신을 위한", linkText: "지금 예약 →" }
      },
      offices: {
        title: "ToplifeAI 사무소",
        headquarters: "본사",
        office: "사무소",
        international: "국제 사무소",
        viewAll: "모든 지점 보기"
      },
      faqMap: {
        faqTitle: "자주 묻는 질문",
        viewMore: "더 많은 질문 보기 →",
        mapTitle: "우리는 여기에 있습니다",
        hq: "ToplifeAI 본사",
        address: "하노이 타인쑤언 응우옌후이뚜엉 1 센트럴 빌딩 12층",
        directions: "길찾기"
      },
      cta: {
        title: "심층 상담이 필요하신가요?",
        subtitle: "ToplifeAI의 의사와 전문가 팀은 항상 귀하와 함께할 준비가 되어 있습니다.",
        f1: "전문가와의 1:1 상담",
        f2: "개인화된 건강 관리 로드맵",
        f3: "연중무휴 온라인 지원",
        button: "지금 상담 예약"
      }
    }
  },
  JA: {
    contact: {
      breadcrumb: "お問い合わせ",
      title: "ToplifeAIにお問い合わせ",
      subtitle: "私たちは常にあなたに同行する準備ができています",
      desc: "ご質問、ご相談、または協力の必要性については、ToplifeAIチームが迅速に対応し、最高のサポートを提供します。",
      features: {
        f1: "医師と専門家による詳細な相談",
        f2: "24時間年中無休の外国人患者サポート",
        f3: "絶対的な情報セキュリティ"
      },
      form: {
        title: "リクエストを送信する",
        desc: "情報を記入してください。できるだけ早くご連絡いたします。",
        name: "氏名*",
        email: "Eメール*",
        phone: "電話番号*",
        subject: {
          placeholder: "関心のあるトピックを選択*",
          opt1: "医療相談",
          opt2: "遺伝子検査",
          opt3: "パートナーシップ",
          opt4: "その他"
        },
        message: "メッセージ内容*",
        terms: "私は同意します",
        policy: "プライバシーポリシー",
        submit: "リクエストを送信"
      },
      quickContact: {
        title: "クイックコンタクトチャネル",
        hotline: { title: "ホットライン", sub: "24時間年中無休のサポート" },
        zalo: { title: "Zalo OA", sub: "今すぐメッセージ" },
        email: { title: "Eメール", sub: "2時間以内に返信" },
        whatsapp: { title: "WhatsApp", sub: "今すぐチャット" },
        booking: { title: "相談を予約する", value: "適切な時間を選択", sub: "あなたのために", linkText: "今すぐ予約 →" }
      },
      offices: {
        title: "ToplifeAIオフィス",
        headquarters: "本社",
        office: "オフィス",
        international: "国際オフィス",
        viewAll: "すべての支店を表示"
      },
      faqMap: {
        faqTitle: "よくある質問",
        viewMore: "その他の質問を見る →",
        mapTitle: "私たちはここにいます",
        hq: "ToplifeAI本社",
        address: "ハノイ、タインスアン、グエンフイトゥオン1、センタービル12階",
        directions: "道順"
      },
      cta: {
        title: "詳細な相談が必要ですか？",
        subtitle: "ToplifeAIの医師と専門家のチームは、常にあなたに同行する準備ができています。",
        f1: "専門家との1対1の相談",
        f2: "パーソナライズされたヘルスケアロードマップ",
        f3: "24時間年中無休のオンラインサポート",
        button: "今すぐ相談を予約する"
      }
    }
  },
  ZH: {
    contact: {
      breadcrumb: "联系",
      title: "联系 ToplifeAI",
      subtitle: "我们随时准备陪伴您",
      desc: "如有任何疑问、咨询或合作需求，ToplifeAI团队将迅速做出回应，为您提供最佳支持。",
      features: {
        f1: "与医生和专家进行深入咨询",
        f2: "24/7 国际患者支持",
        f3: "绝对的信息安全"
      },
      form: {
        title: "向我们发送请求",
        desc: "请填写信息，我们会尽快与您联系。",
        name: "全名*",
        email: "电子邮件*",
        phone: "电话号码*",
        subject: {
          placeholder: "选择感兴趣的主题*",
          opt1: "医疗咨询",
          opt2: "基因检测",
          opt3: "合作伙伴关系",
          opt4: "其他"
        },
        message: "留言内容*",
        terms: "我同意",
        policy: "隐私政策",
        submit: "提交请求"
      },
      quickContact: {
        title: "快速联系渠道",
        hotline: { title: "热线", sub: "全天候支持" },
        zalo: { title: "Zalo OA", sub: "立即留言" },
        email: { title: "电子邮件", sub: "2小时内回复" },
        whatsapp: { title: "WhatsApp", sub: "立即聊天" },
        booking: { title: "预约咨询", value: "选择合适的时间", sub: "为你", linkText: "立即预约 →" }
      },
      offices: {
        title: "ToplifeAI 办公室",
        headquarters: "总部",
        office: "办公室",
        international: "国际办公室",
        viewAll: "查看所有分行"
      },
      faqMap: {
        faqTitle: "常问问题",
        viewMore: "查看更多问题 →",
        mapTitle: "我们在这里",
        hq: "ToplifeAI 总部",
        address: "河内青春郡阮辉祥1号中心大厦12楼",
        directions: "获取路线"
      },
      cta: {
        title: "需要深入的咨询吗？",
        subtitle: "ToplifeAI的医生和专家团队随时准备为您提供帮助。",
        f1: "与专家的1:1咨询",
        f2: "个性化健康护理路线图",
        f3: "24/7在线支持",
        button: "立即预约咨询"
      }
    }
  }
};

['vi', 'en', 'ko', 'ja', 'zh'].forEach(lang => {
  const file = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const uppercaseLang = lang.toUpperCase();
  data.contact = newTranslations[uppercaseLang].contact;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
});

console.log("Updated contact locales successfully.");
