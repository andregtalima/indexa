import { Component } from '@angular/core';
import { ConteinerComponent } from '../../componentes/conteiner/conteiner.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
  imports: [ConteinerComponent, SeparadorComponent],
})
export class FormularioContatoComponent {}
