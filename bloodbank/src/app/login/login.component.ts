import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'bb-section',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login = {
    email: '',
    password: ''
  }
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

