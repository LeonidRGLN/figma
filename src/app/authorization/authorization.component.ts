import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AppServise} from '../app.servise'
import {FirebaseService} from "../services/firebase.service";


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit{
  isSignedIn = false;
  addFormGroup:FormGroup;
  constructor(public firebaseService: FirebaseService) {
      this.addFormGroup = new FormGroup({
        "userEmail": new FormControl('', [Validators.required, Validators.email]),
        "userPassword": new FormControl('', Validators.required)
      })
    }
    log(data:any){
      console.log(data.value)
    }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    } else {
      this.isSignedIn = false
    }
  }

  async onSignup(email: string, password: string) {
    await this.firebaseService.signUp(email, password)
    if (this.firebaseService.isLoggedInn)
      this.isSignedIn = true;
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signUp(email, password)
    if (this.firebaseService.isLoggedInn)
      this.isSignedIn = true;
  }
}
