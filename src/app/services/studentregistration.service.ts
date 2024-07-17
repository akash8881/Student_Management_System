import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  public baseURLss="https://localhost:44331/api/StudentRegistration";
  constructor(private _http:HttpClient) {

   }

   fetchPaymentDetails()
   {
     return this._http.get(this.baseURLss);
   }

}
