import { Component } from '@angular/core';
import { Student } from '../Model/student';
import { StudentApiService } from '../Service/student-api.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  constructor(private _studentApi:StudentApiService){}
  data:Student = new Student();

  savedata(myform:any){
    this._studentApi.insertStu(myform).subscribe((res:any)=>{
      this.data = myform;
      console.log(this.data)
      return this.data;
    })
  }
}
