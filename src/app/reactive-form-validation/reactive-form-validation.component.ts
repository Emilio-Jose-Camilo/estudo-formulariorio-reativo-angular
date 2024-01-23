import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: []
})
export class ReactiveFormValidationComponent implements OnInit{

  clientForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    birth: [new Date(), [Validators.required, Validators.minLength(1), Validators.maxLength(150)]],
    age: [0, [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    phone1: ['', [Validators.required]],
    phone2: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

  }

  onSubmit() {}
}
