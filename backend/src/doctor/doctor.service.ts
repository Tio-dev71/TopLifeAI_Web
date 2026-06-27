import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: string) {
    const profile = await this.prisma.doctorProfile.findUnique({
      where: { userId },
      include: {
        appointments: {
          include: { patientProfile: true },
          orderBy: { startTime: 'asc' }
        }
      }
    });

    if (!profile) throw new NotFoundException('Doctor profile not found');
    return profile;
  }

  async getAppointments(userId: string) {
    const profile = await this.getProfile(userId);
    return profile.appointments;
  }
}
