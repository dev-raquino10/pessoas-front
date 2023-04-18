import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../pessoas/pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-detalhes-pessoa',
  templateUrl: './detalhes-pessoa.component.html',
  styleUrls: ['./detalhes-pessoa.component.css']
})
export class DetalhesPessoaComponent implements OnInit {
  pessoa!: Pessoa;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pessoaService.getPessoa(id).subscribe(
      (data: Pessoa) => {
        this.pessoa = data;
      },
      (error: any) => {
        console.log(error);
    }
    );
    }
    }

