import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
