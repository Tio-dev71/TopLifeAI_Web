import { DoctorService } from './doctor.service';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getProfile(req: any): Promise<{
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
    getAppointments(req: any): Promise<({
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
