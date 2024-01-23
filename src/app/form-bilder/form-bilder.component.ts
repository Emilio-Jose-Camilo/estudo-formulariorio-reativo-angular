import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-bilder',
  templateUrl: './form-bilder.component.html',
  styleUrls: [],
})
export class FormBilderComponent implements OnInit {
  /*
  clientForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(' '),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });
  */
  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  submit() {
    console.log(this.clientForm.value);
  }
}
