import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config/dist'
import { map } from 'rxjs'
import { CreateParameters } from '../dto/create.dto'
@Injectable()
export class FcdService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService
  ) {}

  create(parameter: CreateParameters) {
    const DAO_URL = this.configService.get<string>('DAO_URL')
    return this.httpService
      .post(DAO_URL, parameter, {
        headers: {
          'X-RapidAPI-Key':
            '4a79eb2542mshdd45dea1b6453b7p1d1ba4jsnfb86ddbfa477',
          'X-RapidAPI-Host':
            'telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com'
        }
      })
      .pipe(map((response) => response.data))
  }
}
