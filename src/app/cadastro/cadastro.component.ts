import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

<<<<<<< HEAD
  cadastrar(form:any){
=======
  cadastrar(form : any){
    console.log(form);
>>>>>>> 48ace2955ad45c418ee188cefc2fdaf2d6d0a80b
    if(form.valid){
      // this.router.navigate(['sucesso']);
      console.log('Formulário enviado');
    }else{
      console.log('Formulário inválido');
<<<<<<< HEAD
      console.log(form);
      console.log(form.errors);
      console.log(form.controls.nome.errors);
      console.log(form.controls.email.errors);
=======
>>>>>>> 48ace2955ad45c418ee188cefc2fdaf2d6d0a80b
    }
  }

}
