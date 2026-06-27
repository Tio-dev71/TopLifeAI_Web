import { PrismaService } from '../prisma/prisma.service';
export declare class DoctorService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): Promise<{
        appointments: ({
            patientProfile: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                dateOfBirth: Date | null;
                gender: string | null;
                bloodType: string | null;
                height: number | null;
                weight: number | null;
                allergies: string[];
                userId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientProfileId: string;
            startTime: Date;
            doctorProfileId: string;
            endTime: Date;
            status: import(".prisma/client").$Enums.AppointmentStatus;
            videoLink: string | null;
            notes: string | null;
            paymentStatus: string;
            amount: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        specialty: string;
        experience: number;
        certifications: string[];
        languages: string[];
        about: string | null;
        consultationFee: number;
    }>;
    getAppointments(userId: string): Promise<({
        patientProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            dateOfBirth: Date | null;
            gender: string | null;
            bloodType: string | null;
            height: number | null;
            weight: number | null;
            allergies: string[];
            userId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        patientProfileId: string;
        startTime: Date;
        doctorProfileId: string;
        endTime: Date;
        status: import(".prisma/client").$Enums.AppointmentStatus;
        videoLink: string | null;
        notes: string | null;
        paymentStatus: string;
        amount: number;
    })[]>;
}
