import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor( private http: HttpClient ) { }

  logradouro: string;
  complemento: string;
  bairro: string;
  numero: string;
  cidade: string;
  uf: string;

  async buscar(cep:string) {
    await this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`)
      .toPromise()
      .then(resp => {
        console.log(resp);
        this.logradouro = resp.logradouro
        this.complemento = resp.complemento
        this.bairro = resp.bairro
        this.numero = resp.numero
        this.cidade = resp.localidade
        this.uf = resp.uf
      }
    )
  }

}
