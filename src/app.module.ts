import { Module } from '@nestjs/common'
import { FcdModule } from './fcd/fcd.module'

@Module({
  imports: [FcdModule]
})
export class AppModule {}
