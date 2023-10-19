import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo: string = 'enable';
  corFundo: string = 'blue';
  corDaFonte: string = 'yellow';
  item: string = '';
  lista: string[] = []

  trocar():void{
    this.estilo = this.estilo === 'enable' ? 'disable' : 'enable';
  }

  adicionarLista() {
    this.lista.push(this.item);
  }
}
