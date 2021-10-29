import { cep } from './../model/cep';
import { CepService } from '../cep.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cep = new cep();
  addressSection = new FormGroup({
    cep: new FormControl(''),
    logradouro: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    numero: new FormControl(''),
    cidade: new FormControl(''),
    uf: new FormControl('')
  });

  constructor( private cepService: CepService) { }

  ngOnInit() { window.scroll(0,0) }

  async preencherForms() {
    await this.cepService.buscar(this.cep.cep);
    this.addressSection.patchValue({
      logradouro: this.cepService.logradouro,
      complemento: this.cepService.complemento,
      bairro: this.cepService.bairro,
      numero: this.cepService.numero,
      cidade: this.cepService.cidade,
      uf: this.cepService.uf
      }
    )
  }



}
