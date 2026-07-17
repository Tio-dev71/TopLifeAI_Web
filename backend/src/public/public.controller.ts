import { Controller, Get, Param } from '@nestjs/common';
import { PublicService } from './public.service';

@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('doctors')
  getDoctors() {
    return this.publicService.getDoctors();
  }

  @Get('articles')
  getArticles() {
    return this.publicService.getArticles();
  }

  @Get('services')
  getServices() {
    return this.publicService.getServices();
  }

  @Get('services/:slug')
  getServiceBySlug(@Param('slug') slug: string) {
    return this.publicService.getServiceBySlug(slug);
  }
}
