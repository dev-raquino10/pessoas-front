import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioPessoasComponent } from './formulario-pessoas/formulario-pessoas.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { HomeComponent } from './home/home.component';
import { DetalhesPessoaComponent } from './detalhes-pessoa/detalhes-pessoa.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './home/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPessoasComponent,
    ListaPessoasComponent,
    HomeComponent,
    DetalhesPessoaComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    CommonModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
