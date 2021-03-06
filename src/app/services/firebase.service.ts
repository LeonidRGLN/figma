import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth: AngularFireAuth) { }
  isLoggedIn = false
  async signin(email:string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  async signup(email:string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      })
  }

  // logout(){
  //   this.firebaseAuth.signOut()
  //   localStorage.removeItem('user')
  // }
}
