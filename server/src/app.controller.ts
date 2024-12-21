import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('greeting')
  getGreeting(): { message: string } {
    return { message: 'It is just a message!' };
  }
}
