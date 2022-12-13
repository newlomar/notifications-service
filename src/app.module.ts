import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './http.module';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
