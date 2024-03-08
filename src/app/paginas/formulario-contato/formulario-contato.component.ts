import { Component, OnInit } from '@angular/core';
import { ConteinerComponent } from '../../componentes/conteiner/conteiner.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ConteinerComponent,
    SeparadorComponent,
  ],
})
export class FormularioContatoComponent implements OnInit {
  contatoForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato() {
    if (this.contatoForm.valid) console.log(this.contatoForm.value);
  }

  cancelar() {
    console.log('Cancelar solicitação');
  }
}
