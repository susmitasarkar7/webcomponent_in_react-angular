import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  @Input() name !: String;
  @Output() formSubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(this.name),
      email: new FormControl(''),
    })
  }

  submitForm({ value, valid } : { value: any, valid: any }): void {
    // console.log(this.myForm.value);
    
    if (valid) {
      this.formSubmit.next(value);
    }
  }

}
