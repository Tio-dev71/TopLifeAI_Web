import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('doctor')
@UseGuards(AuthGuard('jwt'))
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('profile')
  getProfile(@Request() req: any) {
    return this.doctorService.getProfile(req.user.userId);
  }

  @Get('appointments')
  getAppointments(@Request() req: any) {
    return this.doctorService.getAppointments(req.user.userId);
  }
}
