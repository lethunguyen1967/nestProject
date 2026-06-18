import { Module } from '@nestjs/common';
import { StudentController } from './user/student.controller.ts';
import { StudentService } from './student.service';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
