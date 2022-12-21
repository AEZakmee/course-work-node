import { DataSource } from 'typeorm';
import { Student } from './student.entity';

export const studentsProviders = [
  {
    provide: 'STUDENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
    inject: ['DATA_SOURCE'],
  },
];
