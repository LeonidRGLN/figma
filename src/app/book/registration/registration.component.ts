import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


  
export class RegistrationComponent  {

  addFormGroup:FormGroup;

  constructor() { 
      this.addFormGroup = new FormGroup({
        'userName': new FormControl('', Validators.required),
        'userEmail': new FormControl('', [Validators.required, Validators.email]),
        'userPassword': new FormControl('', Validators.required)
      })
    }
  log(data:any){
    console.log(data.value)
  }
  
}
