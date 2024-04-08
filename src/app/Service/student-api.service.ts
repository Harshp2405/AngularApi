import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {
  ApiUrl = 'http://localhost:2024/Student';
  
  constructor(private _http:HttpClient) {}

  getall(){
    return this._http.get(this.ApiUrl);
  }
  getById(id:any){
    return this._http.get(this.ApiUrl+"/"+id);
  }
  deletestu(id:any){
    return this._http.delete(this.ApiUrl+"/"+id);
  }
  insertStu(myform:any){
    return this._http.post(this.ApiUrl+"/Add",myform);
  }
  update(id:any, form:any){
    return this._http.put(this.ApiUrl+"/edit/"+id , form)
  }
}
