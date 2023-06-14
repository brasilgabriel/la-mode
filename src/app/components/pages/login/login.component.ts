import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuario';
import { CadastroService } from 'src/app/services/cadastro.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // formulario: FormGroup;

  usuarioLogin: Usuario = {
    email: '',
    senha: ''
  };

  constructor(private cadastroService: CadastroService) {
    // this.formulario = new FormGroup({
    //   nome: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]+')])
    // });
   }

  ngOnInit(): void {
  }

  // validacaoFormulario() {
  //   return this.formulario.get('nome');
  // }

  validarLogin(usuarios: Usuario[]) {
    let erro = 0;

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === this.usuarioLogin.email) {
        usuarios[i].senha === this.usuarioLogin.senha ? console.log('logado') : console.log('senha errada');
      } else {
        erro++;
        erro === usuarios.length ? console.log('não existe') : '';
      }
    }
  }

  get() {
    this.cadastroService.getUsuarios().subscribe((usuarios) => this.validarLogin(usuarios))
  }
}
