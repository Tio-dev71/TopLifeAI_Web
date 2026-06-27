import { PatientService } from './patient.service';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    getProfile(req: any): Promise<{
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
    updateMetrics(req: any, data: any): Promise<{
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
    addActivity(req: any, data: any): Promise<{
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
