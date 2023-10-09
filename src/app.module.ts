import { Module } from '@nestjs/common';
import { PeriodsModule } from './periods/periods.module';

@Module({
  imports: [PeriodsModule],
})
export class AppModule {}
