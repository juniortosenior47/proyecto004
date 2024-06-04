import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { CompressDTO } from './request.dto';

@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/compress')
  async compress(@Body() request: CompressDTO) {
    if (request.text) {
      return await this.appService.compressv1(request.text);
    } else {
      throw new UnauthorizedException('data no valid');
    }
  }
}
