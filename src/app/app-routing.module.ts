import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentComponent } from './all-student/all-student.component';
import { StudentByIdComponent } from './student-by-id/student-by-id.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  {path:'Student' , component:AllStudentComponent},
  {path:'Student/edit/:id' , component:EditPageComponent},
  {path:'Student/Add' , component:AddStudentComponent},
  {path:'Student/:id' , component:StudentByIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
