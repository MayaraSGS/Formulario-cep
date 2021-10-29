import { cep } from './../model/cep';
import { CepService } from '../cep.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cep = new cep();

  constructor( private cepService: CepService, private router: Router) { }

  ngOnInit() { window.scroll(0,0) }

  addressSection = new FormGroup({
    cep: new FormControl('', Validators.required),
    logradouro: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    numero: new FormControl(''),
    cidade: new FormControl(''),
    uf: new FormControl('')
  });

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

  validarCampo() {
    if(!this.addressSection.valid) {
      alert('Para continuar o campo CEP precisa ser preechido!!')
      console.log('CEP vazio')
      return;
    } else {
      console.log('CEP válido', this.addressSection.value)
      this.router.navigate(['/offers'])
    }
  }

}
