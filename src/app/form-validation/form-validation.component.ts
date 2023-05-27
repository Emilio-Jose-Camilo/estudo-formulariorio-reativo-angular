import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit{


  client = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    birth: new Date(),
    street: '',
    city: '',
    state: '',
    phone1: '',
    phone2: ''
  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.client);
  }
}
