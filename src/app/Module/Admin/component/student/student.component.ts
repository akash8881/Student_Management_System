import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { UI_CONSTANT } from '../../../../constants/ui_constants';
import { StudentregistrationService } from '../../../../services/studentregistration.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  public visible:boolean=false;
  public classOptions:Array<{key:string,value:number}>=UI_CONSTANT.studentClass;
  public sectionOptions:Array<{key:string,value:number}>=UI_CONSTANT.classSection;
  public hostelOptions:Array<{key:string,value:number}>=UI_CONSTANT.hostel;
  public genederOptions:Array<{key:string,value:string}>=UI_CONSTANT.gender;
  public rawData:any=[];
  constructor(private studentregistrationService:StudentregistrationService){

  }

  ngOninit(){

    this.studentregistrationService.fetchPaymentDetails().subscribe(res=>{
      this.rawData=res;
      console.log('rawData',this.rawData);
    })

    this.visible=false;
  }

  showDialog(){
    this.studentregistrationService.fetchPaymentDetails().subscribe(res=>{
      this.rawData=res;
      console.log('rawData',this.rawData);
    })
  }

}
