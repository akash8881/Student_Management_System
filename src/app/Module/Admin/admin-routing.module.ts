import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { StudentComponent } from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { CourseComponent } from './component/course/course.component';
import { PaymentComponent } from './component/payment/payment.component';
import { EnrollementComponent } from './component/enrollement/enrollement.component';
import path from 'path';

const routes: Routes = [
  {
   path:'',
   component:DashboardComponent,
   children:[
    {
      path:'student',
      component:StudentComponent,
    },
    {
      path:'teacher',
      component:TeacherComponent
    },
    {
      path:'course',
      component:CourseComponent
    },
    {
      path:'payment',
      component:PaymentComponent
    },
    {
      path:'enrollemnt',
      component:EnrollementComponent
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
