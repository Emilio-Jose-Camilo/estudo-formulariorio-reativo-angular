import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: []
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('');


  //code: string[] = ['', '', '', '', '', '',];

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges
      .subscribe((newName) => console.log(newName));
  }
  setfirstName() {
    this.firstName.setValue('Emílio');
    console.log(this.firstName.value)
  }
}
