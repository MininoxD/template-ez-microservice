import { HttpModule } from '@nestjs/axios/dist'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { FcdGetController } from './controllers/fcdGet.controller'
import { FcdPostController } from './controllers/fcdPost.controller'
import { FcdService } from './services/fcd.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    HttpModule
  ],
  controllers: [FcdGetController, FcdPostController],
  providers: [FcdService]
})
export class FcdModule {}
