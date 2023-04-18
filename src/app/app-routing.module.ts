import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { FormularioPessoasComponent } from './formulario-pessoas/formulario-pessoas.component';
import { DetalhesPessoaComponent } from './detalhes-pessoa/detalhes-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-pessoas', component: ListaPessoasComponent },
  { path: 'cadastro-pessoas', component: FormularioPessoasComponent },
  { path: 'pessoas/:id', component: DetalhesPessoaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
