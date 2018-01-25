import { Component, OnInit} from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import {DropdownModule} from "ngx-dropdown";
import { Http } from '@angular/http';

import { FormConfigService } from '../services/formConfig.service';

@Component({
  selector: 'bb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ FormConfigService ]
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
  formData;
  isDataAvailable = false;
  form: FormGroup;

  constructor (formConfig: FormConfigService) {
    formConfig.getFormConfig().subscribe(data => {
      this.formData = data.formConfig;
      this.isDataAvailable = true;
    });
  }

  ngOnInit() {
    
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
      "value": "O+"
    },{
      "value": "O-"
    }
  ]

  onSubmit = function(){
    this.sbumitted = true;
    console.log(this.signup);
    console.log("FormSubmit");
  }
  inputFocus = function(event) {
    console.log("inputFocus");
    console.log(event);
  }
}
