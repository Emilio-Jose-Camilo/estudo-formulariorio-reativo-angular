import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-gorup',
  templateUrl: './form-gorup.component.html',
  styleUrls: ['./form-gorup.component.scss']
})
export class FormGorupComponent implements OnInit{

  clientForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    address : new FormGroup({
      street : new FormControl(''),
      postalCode : new FormControl(''),
      neighborhood : new FormControl(''),
      cidade : new FormControl(''),
      state : new FormControl('')
    })
  });

  states = ["SP", "PR", "SC", "RS", "PA", "RO", "MA", "AC", "AL", "AP", "AM",
  "BA", "CE", "DF", "ES", "GO", "MT", "MS", "MG", "PB", "PE", "PI", "RJ", "RN",
  "RR", "SE", "TO"]

  constructor() {}

  ngOnInit(): void {

  }

  submit(){
    console.log(this.clientForm.value); //Retorna o valor do formulário
    console.log(`
    
    `)

  }

}
