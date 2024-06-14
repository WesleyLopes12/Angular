import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  templateUrl: './componente07.component.html',
  styleUrls: ['./componente07.component.css']
})
export class Componente07Component {

  //Variável logica
  condicao:boolean =  true;

  //Lista de aprovados e reprovados
  lista:string[] = ['Aprovado', 'Aprovado', 'Reprovado']

}
