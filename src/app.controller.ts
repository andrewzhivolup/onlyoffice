import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  save(@Body() dto: any): void {
    return this.appService.save(dto);
  }
  @Get()
  aboba():any {
    return "hello";
  }
}
