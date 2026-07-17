import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class PublicService {
  constructor(private prisma: PrismaService) {}

  async getDoctors() {
    return this.prisma.user.findMany({
      where: {
        role: Role.DOCTOR,
        isActive: true,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        avatarUrl: true,
        doctorProfile: {
          select: {
            specialty: true,
            experience: true,
            certifications: true,
            languages: true,
            about: true,
            consultationFee: true,
          }
        }
      }
    });
  }

  async getArticles() {
    return this.prisma.article.findMany({
      where: {
        isPublished: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        category: true,
        tags: true,
        createdAt: true,
        author: {
          select: {
            firstName: true,
            lastName: true,
          }
        }
      }
    });
  }
}
