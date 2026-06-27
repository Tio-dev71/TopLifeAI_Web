import { Controller, Get, Post, Body, UseGuards, Request, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('patient')
@UseGuards(AuthGuard('jwt'))
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get('profile')
  getProfile(@Request() req: any) {
    return this.patientService.getProfile(req.user.userId);
  }

  @Put('metrics')
  updateMetrics(@Request() req: any, @Body() data: any) {
    return this.patientService.updateMetrics(req.user.userId, data);
  }

  @Post('activity')
  addActivity(@Request() req: any, @Body() data: any) {
    return this.patientService.addActivity(req.user.userId, data);
  }
}
