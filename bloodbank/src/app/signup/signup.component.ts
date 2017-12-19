import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {DropdownModule} from "ngx-dropdown";

@Component({
  selector: 'bb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  
  signup = {
    email: '',
    password: '',
    confPassword: '',
    name: '',
    age: '',
    gender: '',
    bloodType: ''
  }
  genders = [
    {
      "value": "M",
      "name" : "Male"
    },
    {
      "value": "F",
      "name" : "Female"
    },
    {
      "value": "T",
      "name" : "Other"
    }
  ]

  bloodTypes = [
    {
      "value": "A+"
    },{
      "value": "A-"
    },{
      "value": "B+"
    },{
      "value": "B-"
    },{
      "value": "AB+"
    },{
      "value": "AB-"
    },{
      "value": "O-"
    },{
      "value": "O-"
    }
  ]

  
  //pureEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi);
  pureEmail = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  ngOnInit = function() {
    
  }
  onSubmit = function(){
    this.sbumitted = true;
    console.log("FormSubmit");
  }
}

function emailRegexValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    console.log(forbidden);
    return forbidden ? {'email': {value: control.value}} : null;
  };
}

