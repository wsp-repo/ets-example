import { Module } from '@nestjs/common';

import { EmulateModule } from '../emulate/emulate.module';
import { AppService } from './app.service';

@Module({
  imports: [EmulateModule],
  providers: [AppService],
})
export class AppModule {}
