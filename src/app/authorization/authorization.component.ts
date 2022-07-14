import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AppServise} from '../app.servise'


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  addFormGroup:FormGroup;
  constructor() { 
      this.addFormGroup = new FormGroup({
        "userEmail": new FormControl('', [Validators.required, Validators.email]),
        "userPassword": new FormControl('', Validators.required)
      })
    }
    log(data:any){
      console.log(data.value)
    }
}
