import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'

@Controller()
export class FcdGetController {
  @Get('/health')
  @HttpCode(HttpStatus.OK)
  healthCheck() {
    return {
      status: 'ok',
      message: 'FCD is running',
      date: new Date().toISOString()
    }
  }
}
