import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConteinerComponent } from './componentes/conteiner/conteiner.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';

import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    ConteinerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent,
  ],
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvxzyw';

  contatos: Contato[] = agenda;

  filtroPorTexto: string = '';

  removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatoPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto.toLowerCase()));
    });
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatoPorTexto().filter((contato) => {
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
