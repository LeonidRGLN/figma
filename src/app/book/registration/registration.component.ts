import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


  
export class RegistrationComponent implements OnInit {

  title ='aa'
  nameControl:FormControl|any;

  constructor() { }

  ngOnInit(): void {
    this.nameControl = new FormControl('John')
    
  }

}
