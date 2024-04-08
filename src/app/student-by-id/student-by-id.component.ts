import { Component } from '@angular/core';
import { StudentApiService } from '../Service/student-api.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkWithHref } from '@angular/router';
import { Student } from '../Model/student';

@Component({
  selector: 'app-student-by-id',
  templateUrl: './student-by-id.component.html',
  styleUrl: './student-by-id.component.css'
})
export class StudentByIdComponent {
constructor(private _apiStudent:StudentApiService , private _activateRoute:ActivatedRoute ,private _router:Router){}

data:Student = new Student();
id=0;
ngOnInit(){
  this.id = Number(this._activateRoute.snapshot.paramMap.get('id'));
  this._apiStudent.getById(this.id).subscribe((res:any)=>{
    this.data = res;
    console.log("res clg")
    console.log(this.data)
  });
}

  delete(){  
    this._apiStudent.deletestu(this.id).subscribe((res:any)=>{
      console.log("res"+res)
      this._router.navigate(['Student'])
    })
  }
}
