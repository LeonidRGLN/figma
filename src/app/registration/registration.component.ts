import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {FirebaseService} from "../services/firebase.service";
import {stringifyTask} from "@angular/compiler-cli/ngcc/src/execution/tasks/utils";




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [FirebaseService]
})



export class RegistrationComponent implements OnInit {

  addFormGroup: FormGroup;
  isSignedIn = false;


  constructor(public firebaseService: FirebaseService) {
    this.addFormGroup = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'userPassword': new FormControl('', Validators.required)
    })
  }

  log(data: any) {
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
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }

  async onSignin(email: string, password: string) {
    await this.firebaseService.signup(email, password)
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
  }


}
