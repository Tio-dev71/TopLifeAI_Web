"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PatientService = class PatientService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfile(userId) {
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
            throw new common_1.NotFoundException('Patient profile not found');
        }
        return profile;
    }
    async updateMetrics(userId, data) {
        return this.prisma.patientProfile.update({
            where: { userId },
            data: {
                height: data.height,
                weight: data.weight,
                bloodType: data.bloodType,
            }
        });
    }
    async addActivity(userId, data) {
        const profile = await this.prisma.patientProfile.findUnique({ where: { userId } });
        if (!profile)
            throw new common_1.NotFoundException('Profile not found');
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
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PatientService);
//# sourceMappingURL=patient.service.js.map