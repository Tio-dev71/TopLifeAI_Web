import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const profile = await this.prisma.patientProfile.findUnique({
      where: { userId },
      include: {
        activityRecords: {
          orderBy: { date: 'desc' },
          take: 7,
        },
        healthRecords: true,
      }
    });

    if (!profile) {
      throw new NotFoundException('Patient profile not found');
    }

    return profile;
  }

  async updateMetrics(userId: string, data: any) {
    return this.prisma.patientProfile.update({
      where: { userId },
      data: {
        height: data.height,
        weight: data.weight,
        bloodType: data.bloodType,
      }
    });
  }

  async addActivity(userId: string, data: any) {
    const profile = await this.prisma.patientProfile.findUnique({ where: { userId }});
    if (!profile) throw new NotFoundException('Profile not found');

    return this.prisma.activityRecord.create({
      data: {
        patientProfileId: profile.id,
        date: new Date(),
        steps: data.steps,
        distance: data.distance,
        calories: data.calories,
      }
    });
  }
}
