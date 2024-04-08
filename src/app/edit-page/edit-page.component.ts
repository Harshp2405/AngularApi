import { Component } from '@angular/core';
import { StudentApiService } from '../Service/student-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Model/student';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.css'
})
export class EditPageComponent {
  constructor (private _apiStudent:StudentApiService , private _activatedRoute:ActivatedRoute , private _router:Router){}
  id=-1
  data:Student = new Student();
  ngOnInit(){
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this._apiStudent.getById(this.id).subscribe((res:any)=>{
      this.data = res;
    })
  }

  savedata(myform:any){
    this._apiStudent.update(this.id ,myform).subscribe((res:any)=>{
      // this.ngOnInit()
      this.data = res;
      console.log(this.data);
      this._router.navigate(['Student'])
    })
  }
}
