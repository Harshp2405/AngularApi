import { Component } from '@angular/core';
import { StudentApiService } from '../Service/student-api.service';
import { Student } from '../Model/student';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.css'
})
export class AllStudentComponent {
  StudentA:Student[] = []
constructor(private _apiStudent:StudentApiService){}
_id:Number=0
ngOnInit(){
  this._apiStudent.getall().subscribe((res:any)=>{
    // console.log(res)
    this.StudentA = res;
  })
}

}
