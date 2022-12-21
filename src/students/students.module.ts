import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StudentsController } from './students.controller';
import { studentsProviders } from './students.providers';
import { StudentsService } from './students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [...studentsProviders, StudentsService],
  exports: [],
})
export class StudentsModule {}
