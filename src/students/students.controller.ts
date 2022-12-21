import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { StudentDto } from './student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post()
  async addStudent(@Body() student: StudentDto) {
    const createdStudent = await this.studentsService.saveStudent(student);
    return createdStudent;
  }

  @Get(':id')
  async getStudent(@Param('id') id: number) {
    const student = await this.studentsService.findStudent(id);
    return student;
  }

  @Get()
  async getAllStudentsByGPA() {
    const student = await this.studentsService.findAllStudentsByGPA(5.5);
    return student;
  }

  @Delete()
  async deleteStudent(@Query('id') id: number) {
    const student = await this.studentsService.deleteStudent(id);
    return student;
  }
}
