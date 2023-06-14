import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuario';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  usuarios: Usuario[] = [];

  usuario: Usuario = {
    nome: '',
    celular: '',
    email: '',
    senha: ''
  };

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  post() {
    this.cadastroService.postUsuarios(this.usuario).subscribe(resposta => {
      this.usuario = {
        nome: '',
        celular: '',
        email: '',
        senha: ''
      }
    });
  }
}
