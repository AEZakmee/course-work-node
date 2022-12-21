import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager, MoreThan, Repository } from 'typeorm';
import { StudentDto } from './student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @Inject('STUDENTS_REPOSITORY')
    private studentsRepository: Repository<Student>,
  ) {}
 
  public async saveStudent(student: StudentDto): Promise<Student> {
    let createdStudent = await this.studentsRepository.save(student);
    createdStudent = await this.studentsRepository.findOne({
      where: { id: createdStudent.id },
    });
    return createdStudent;
  }

  public async findAllStudentsByGPA(gpa: number): Promise<Student[]> {
    const students = await this.studentsRepository.find({
      where: {
        gpa: MoreThan(gpa)
      }
    });
    return students;
  }

  public async findStudent(id: number) : Promise<Student> {
    const student = await this.studentsRepository.findOne({
      where: { id: id },
    });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} was not found.`);
    }
    return student;
  }

  public async deleteStudent(id: number): Promise<any> {
    let student = await this.studentsRepository.findOne({
      where: { id },
    });
    if (!student) {
      throw new NotFoundException(`Student with id ${id} was not found.`);
    }
    student = (await this.studentsRepository.delete({ id }))?.raw;
    return student;
  }
}
