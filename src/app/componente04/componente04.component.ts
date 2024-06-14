import { Component } from '@angular/core';

@Component({
  selector: 'app-componente04',
  templateUrl: './componente04.component.html',
  styleUrls: ['./componente04.component.css']
})
export class Componente04Component {

  //Variável para exibir ou ocultar o quadrado
  exibir:boolean = true;

  // Função para exibir ou ocultar o quadrado
    acao(){
      if(this.exibir === true) {
        this.exibir = false;
      }else{
        this.exibir = true;
      }
    }

}
