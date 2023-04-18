import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoas/pessoa';
import { PessoaService } from '../pessoa.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesPessoaComponent } from '../detalhes-pessoa/detalhes-pessoa.component';
import { PessoaResumida } from '../pessoas/pessoa-resumida';

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'grupo', 'privilégio', 'tipoPublicador', 'detalhes'];
  pessoas: PessoaResumida[] = [];

  constructor(private pessoaService: PessoaService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.listarPessoas();
  }

  listarPessoas() {
    this.pessoaService.listarPessoas().subscribe(
      (data: Pessoa[]) => {
        this.pessoas = data.map(pessoa => ({
          id: pessoa.id,
          nome: pessoa.nome,
          grupo: pessoa.grupo,
          privilegio: pessoa.privilegio,
          tipoPublicador: pessoa.tipoPublicador
        }));
      },
      error => {
        console.log(error);
      }
    );
  }

  verDetalhes(pessoa: Pessoa) {
    this.abrirModal(pessoa);
  }

  abrirModal(pessoa: Pessoa) {
    const dialogRef = this.dialog.open(DetalhesPessoaComponent, {
      width: '500px',
      data: pessoa
    });
  }

  abrirDetalhes(id: number) {
    this.router.navigate(['/pessoas', id]);
  }
}
