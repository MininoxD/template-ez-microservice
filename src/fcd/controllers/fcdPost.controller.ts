import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes
} from '@nestjs/common'
import { CreateSchema } from '../schemas/createSchema'
import { CreateParameters } from '../dto/create.dto'
import { ZodValidationPipe } from '../validation/zodValidationPipe'
import { FcdService } from '../services/fcd.service'

@Controller()
export class FcdPostController {
  constructor(private fcdService: FcdService) {}
  @Post('/create')
  @UsePipes(new ZodValidationPipe(CreateSchema))
  @HttpCode(HttpStatus.CREATED)
  create(@Body() parameters: CreateParameters) {
    return this.fcdService.create(parameters)
  }
}
