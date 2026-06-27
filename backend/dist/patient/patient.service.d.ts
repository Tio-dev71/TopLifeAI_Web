import { PrismaService } from '../prisma/prisma.service';
export declare class PatientService {
    private prisma;
    constructor(prisma: PrismaService);
    getProfile(userId: string): Promise<{
        activityRecords: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            steps: number;
            distance: number;
            calories: number;
            runningDistance: number;
            walkingDistance: number;
            cyclingDistance: number;
            patientProfileId: string;
        }[];
        healthRecords: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            patientProfileId: string;
            notes: string | null;
            title: string;
            type: string;
            fileUrl: string;
            fileType: string;
        }[];
    } & {
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
    }>;
    updateMetrics(userId: string, data: any): Promise<{
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
    }>;
    addActivity(userId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        steps: number;
        distance: number;
        calories: number;
        runningDistance: number;
        walkingDistance: number;
        cyclingDistance: number;
        patientProfileId: string;
    }>;
}
