import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { UserModule } from './user/user.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [AuthModule, PrismaModule, PatientModule, DoctorModule, UserModule, PublicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
