import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // 1. Seed Users (Super Admin, Admin)
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@toplifeai.com' },
    update: {},
    create: {
      email: 'admin@toplifeai.com',
      firstName: 'System',
      lastName: 'Admin',
      password: adminPassword,
      role: Role.SUPER_ADMIN,
    },
  });
  console.log(`Admin user created: ${admin.email}`);

  // 2. Seed Test Patient
  const testPassword = await bcrypt.hash('test1234', 10);
  const testUser = await prisma.user.upsert({
    where: { email: 'test@toplifeai.com' },
    update: {},
    create: {
      email: 'test@toplifeai.com',
      firstName: 'Test',
      lastName: 'User',
      password: testPassword,
      role: Role.PATIENT,
      patientProfile: {
        create: {
          dateOfBirth: new Date('1990-01-01'),
          gender: 'MALE',
          bloodType: 'O+',
          height: 175,
          weight: 70,
          allergies: ['Peanuts'],
        }
      }
    },
    include: {
      patientProfile: true
    }
  });
  console.log(`Test user created: ${testUser.email}`);

  // Add dummy activity record for dashboard demo
  if (testUser.patientProfile) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    await prisma.activityRecord.upsert({
      where: {
        patientProfileId_date: {
          patientProfileId: testUser.patientProfile.id,
          date: today,
        }
      },
      update: {},
      create: {
        patientProfileId: testUser.patientProfile.id,
        date: today,
        steps: 8432,
        distance: 5.2,
        calories: 320,
      }
    });
  }

  // 3. Seed Doctors
  const doctorsData = [
    { email: 'dr.smith@toplifeai.com', fn: 'John', ln: 'Smith', spec: 'Tim mạch (Cardiology)', exp: 15, certs: ['FACC', 'MD'], langs: ['English', 'Vietnamese'], fee: 500000, about: 'Chuyên gia hàng đầu về các bệnh lý tim mạch và phẫu thuật tim.', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=500&fit=crop' },
    { email: 'dr.nguyen@toplifeai.com', fn: 'An', ln: 'Nguyễn', spec: 'Nhi khoa (Pediatrics)', exp: 10, certs: ['FAAP'], langs: ['Vietnamese', 'English'], fee: 350000, about: 'Bác sĩ An Nguyễn có 10 năm kinh nghiệm chăm sóc sức khỏe cho trẻ sơ sinh và trẻ nhỏ.', img: 'https://images.unsplash.com/photo-1594824436998-d70cb26229c9?w=500&h=500&fit=crop' },
    { email: 'dr.lee@toplifeai.com', fn: 'Min Jun', ln: 'Lee', spec: 'Thẩm mỹ (Aesthetics)', exp: 12, certs: ['Board Certified Plastic Surgeon'], langs: ['Korean', 'English'], fee: 1000000, about: 'Chuyên gia phẫu thuật thẩm mỹ và da liễu từ Hàn Quốc.', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&h=500&fit=crop' },
    { email: 'dr.tran@toplifeai.com', fn: 'Mai', ln: 'Trần', spec: 'Thần kinh (Neurology)', exp: 20, certs: ['MD', 'PhD'], langs: ['Vietnamese', 'French'], fee: 600000, about: 'Giáo sư chuyên ngành Thần kinh học, tu nghiệp tại Pháp.', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=500&fit=crop' },
  ];

  for (const doc of doctorsData) {
    const docPass = await bcrypt.hash('doctor123', 10);
    const doctor = await prisma.user.upsert({
      where: { email: doc.email },
      update: {
        avatarUrl: doc.img,
      },
      create: {
        email: doc.email,
        firstName: doc.fn,
        lastName: doc.ln,
        password: docPass,
        role: Role.DOCTOR,
        avatarUrl: doc.img,
        doctorProfile: {
          create: {
            specialty: doc.spec,
            experience: doc.exp,
            certifications: doc.certs,
            languages: doc.langs,
            about: doc.about,
            consultationFee: doc.fee,
          }
        }
      },
    });
    console.log(`Doctor created: ${doctor.email}`);
  }

  // 2.5 Seed Services
  const services = [
    {
      slug: 'kham-va-tu-van-chuyen-gia',
      name: 'Khám & Tư vấn chuyên gia',
      description: 'Đội ngũ bác sĩ hàng đầu tại ToplifeAI luôn sẵn sàng tư vấn trực tiếp và đưa ra các phác đồ điều trị tốt nhất.',
      icon: 'Stethoscope',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Chương trình khám chuyên gia tại ToplifeAI quy tụ đội ngũ y bác sĩ đầu ngành từ các bệnh viện lớn. Chúng tôi cung cấp dịch vụ thăm khám, chẩn đoán và đưa ra phác đồ điều trị cá nhân hóa cho từng bệnh nhân. Đảm bảo chất lượng và sự an tâm tuyệt đối.'
    },
    {
      slug: 'xet-nghiem-gene',
      name: 'Xét nghiệm Gene',
      description: 'Giải mã bản đồ gen của bạn để dự đoán các rủi ro sức khỏe và cá nhân hóa lộ trình chăm sóc.',
      icon: 'Dna',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Công nghệ phân tích Gene tiên tiến giúp phát hiện sớm các nguy cơ bệnh lý di truyền, ung thư, và các vấn đề về chuyển hóa. Từ đó, các chuyên gia sẽ lên kế hoạch phòng ngừa và chế độ dinh dưỡng phù hợp nhất với cơ thể bạn.'
    },
    {
      slug: 'ai-phan-tich-suc-khoe',
      name: 'AI Phân tích sức khỏe',
      description: 'Sử dụng công nghệ AI tiên tiến nhất để phân tích dữ liệu và cung cấp báo cáo sức khỏe chi tiết.',
      icon: 'Brain',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Hệ thống Trí tuệ nhân tạo (AI) độc quyền của ToplifeAI có khả năng phân tích hàng triệu điểm dữ liệu sức khỏe, hình ảnh y khoa và chỉ số sinh tồn để đưa ra cảnh báo sớm về các nguy cơ tiềm ẩn với độ chính xác cao.'
    },
    {
      slug: 'tam-soat-kiem-tra',
      name: 'Tầm soát & Kiểm tra',
      description: 'Các gói khám tầm soát toàn diện giúp phát hiện sớm các bệnh lý nguy hiểm.',
      icon: 'Activity',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Gói tầm soát sức khỏe tổng quát và chuyên sâu đa dạng, từ cơ bản đến cao cấp, giúp bạn nắm rõ tình trạng cơ thể, phát hiện kịp thời các bất thường và có phương án can thiệp sớm nhất.'
    },
    {
      slug: 'wellness-phuc-hoi',
      name: 'Wellness & Phục hồi',
      description: 'Chương trình chăm sóc sức khỏe chủ động, giúp cơ thể phục hồi năng lượng và sống khỏe mỗi ngày.',
      icon: 'Sparkles',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Không chỉ chữa bệnh, chúng tôi hướng tới việc xây dựng lối sống khỏe mạnh (Wellness) thông qua các liệu pháp phục hồi, dinh dưỡng cân bằng, vật lý trị liệu và các chương trình chống lão hóa tiên tiến.'
    },
    {
      slug: 'cham-soc-suc-khoe-tinh-than',
      name: 'Chăm sóc sức khỏe tinh thần',
      description: 'Đội ngũ chuyên gia tâm lý luôn lắng nghe và đồng hành cùng bạn vượt qua mọi căng thẳng.',
      icon: 'HeartPulse',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Sức khỏe tinh thần là nền tảng của một cuộc sống hạnh phúc. ToplifeAI cung cấp dịch vụ tham vấn và trị liệu tâm lý với các chuyên gia giàu kinh nghiệm, giúp bạn giải tỏa áp lực, điều trị trầm cảm và rối loạn lo âu.'
    },
    {
      slug: 'quan-ly-thuoc-thong-minh',
      name: 'Quản lý thuốc thông minh',
      description: 'Hệ thống AI nhắc nhở uống thuốc và theo dõi tương tác thuốc an toàn.',
      icon: 'Pill',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Ứng dụng tự động lập lịch uống thuốc, cảnh báo khi quên liều, và phân tích nguy cơ tương tác thuốc dựa trên đơn thuốc bạn đang dùng, đảm bảo quá trình điều trị diễn ra an toàn và hiệu quả.'
    },
    {
      slug: 'tu-van-tu-xa',
      name: 'Tư vấn từ xa (Telehealth)',
      description: 'Kết nối trực tuyến với bác sĩ mọi lúc, mọi nơi thông qua nền tảng Video Call bảo mật.',
      icon: 'Video',
      image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      content: 'Giờ đây bạn không cần phải đến tận bệnh viện. Dịch vụ Telehealth cho phép bạn đặt lịch và video call trực tiếp với bác sĩ chuyên khoa ngay tại nhà. Hỗ trợ kê đơn điện tử và giao thuốc tận nơi.'
    },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log('Seeded Services');

  // 4. Seed Articles (News)
  const articlesData = [
    {
      title: 'Khám Phá Công Nghệ Lõi AI Trong Y Tế',
      slug: 'kham-pha-cong-nghe-loi-ai-trong-y-te',
      excerpt: 'Làm thế nào Trí tuệ Nhân tạo (AI) đang thay đổi cách chúng ta chẩn đoán và điều trị bệnh tật?',
      content: 'Trí tuệ nhân tạo (AI) đang trở thành một phần không thể thiếu trong y học hiện đại, giúp bác sĩ phát hiện ung thư sớm hơn, dự đoán rủi ro bệnh lý, và cá nhân hóa liệu trình điều trị...',
      coverImage: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?auto=format&fit=crop&w=800&q=80',
      category: 'Công nghệ y tế',
      tags: ['AI', 'Y tế tương lai'],
    },
    {
      title: '5 Lợi Ích Của Việc Phân Tích Gene Di Truyền',
      slug: '5-loi-ich-cua-viec-phan-tich-gene',
      excerpt: 'Hiểu rõ về mã gen của bạn giúp tối ưu hóa chế độ dinh dưỡng và phòng ngừa các bệnh mạn tính.',
      content: 'Phân tích gene không chỉ cho chúng ta biết về nguồn gốc tổ tiên mà còn giúp phát hiện các rủi ro sức khỏe tiềm ẩn. Việc biết được bộ gen của mình giúp bạn điều chỉnh lối sống...',
      coverImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      category: 'Di truyền học',
      tags: ['Gene', 'Chăm sóc sức khỏe'],
    },
    {
      title: 'Làm Thế Nào Để Sống Thọ Và Khỏe Mạnh Hơn?',
      slug: 'lam-the-nao-de-song-tho-va-khoe-manh-hon',
      excerpt: 'Những bí quyết đơn giản dựa trên cơ sở khoa học để tăng cường tuổi thọ và sức khỏe toàn diện.',
      content: 'Chế độ ăn Địa Trung Hải, thói quen tập thể dục hàng ngày, giấc ngủ chất lượng và quản lý căng thẳng là những yếu tố then chốt giúp kéo dài tuổi thọ một cách khỏe mạnh...',
      coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      category: 'Sống khỏe',
      tags: ['Lifestyle', 'Sức khỏe'],
    },
  ];

  for (const art of articlesData) {
    await prisma.article.upsert({
      where: { slug: art.slug },
      update: {},
      create: {
        ...art,
        authorId: admin.id,
        isPublished: true,
      }
    });
    console.log(`Article created: ${art.title}`);
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
