import { Component, OnInit } from '@angular/core';

interface Campos {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-form-native-validation',
  templateUrl: './form-native-validation.component.html',
  styleUrls: ['./form-native-validation.component.scss']
})
export class FormNativeValidationComponent implements OnInit{

  firstName = "";
  lastName = "";

  campos: Campos = {firstName: "", lastName: ""};

  constructor(){}

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.campos)
  }
}
