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
