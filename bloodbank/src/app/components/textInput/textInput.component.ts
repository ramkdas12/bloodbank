import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Validators, ValidatorFn } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'bb-textInput',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.css']
})
export class TextInputComponent implements OnInit {
  
  @Input() config: any;
  @Input() model: string;

  @Output() modelChange = new EventEmitter<boolean>();
  @Output() elementFocus = new EventEmitter();
  @Output() elementBlur = new EventEmitter();
  @Output() elementKPress = new EventEmitter();
  @Output() elementKDown = new EventEmitter();
  @Output() elementKUp = new EventEmitter();
  @Output() elementCut = new EventEmitter();
  @Output() elementCopy = new EventEmitter();
  @Output() elementPaste = new EventEmitter();
  
  ngOnInit = function() {

  }
  onChange = function(value: string){
    this.modelChange.emit(value);
  }
  onFocus = function(event) {
    this.elementFocus.emit(event);
  }
  onBlur = function(event) {
    this.elementBlur.emit(event);
  }
  onKeyPress = function(event) {
    this.elementKPress.emit(event);
  }
  onKeyDown = function(event) {
    this.elementKDown.emit(event);
  }
  onKeyUp = function(event) {
    this.elementKUp.emit(event);
  }
  onCut = function(event) {
    this.elementCut.emit(event);
  }
  onCopy = function(event) {
    this.elementCopy.emit(event);
  }
  onPaste = function(event) {
    this.elementPaste.emit(event);
  }
}