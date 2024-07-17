import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';


import { AdminRoutingModule } from './admin-routing.module';
import { StudentComponent } from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { CourseComponent } from './component/course/course.component';
import { EnrollementComponent } from './component/enrollement/enrollement.component';
import { PaymentComponent } from './component/payment/payment.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    StudentComponent,
    TeacherComponent,
    CourseComponent,
    EnrollementComponent,
    PaymentComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    DividerModule,
    DropdownModule

  ]
})
export class AdminModule { }
