import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CepService } from './cep.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
