import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  // Vetor
  vetor:Produto[] = [];

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Objeto de formulario
  fomulario = new FormGroup({
    id:       new FormControl(null),
    nome:     new FormControl(''),
    valor:    new FormControl(null)

  });

  // Construtor
  constructor(private servico:ProdutoService){}

  // Inicialização do componente
  ngOnInit(){
    this.selecionar();
  }

  //Método para selecionar todos os produtos.
  selecionar(){
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});

  }

  //Método para cadastrar produtos
  cadastrar(){
    this.servico.cadastrar(this.fomulario.value as Produto)
    .subscribe(retorno => {

      this.vetor.push(retorno);

      //Limpar formulario
      this.fomulario.reset();

    });
  }

  //Metódo para selecionar um produto expesifico
  selecionarProduto(indice:number){
    this.fomulario.setValue({
      id : this.vetor[indice].id,
      nome : this.vetor[indice].nome,
      valor : this.vetor[indice].valor
    });

    this.btnCadastrar = false;

  }

  //Método para alterar produtos
  alterar(){
    this.servico.alterar(this.fomulario.value as Produto)
    .subscribe(retorno =>{


      // Obter o indice do objeto alterado
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.fomulario.value.id === obj.id;
      });

      // Alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      //Limpar formulario
      this.fomulario.reset();

      //Visibilidade de botões
      this.btnCadastrar = true;

    });

    }

      //Metódo para remover produtos
      remover(){
        this.servico.remover(this.fomulario.value.id)
        .subscribe(() => {

          // Obter o indice do vetor que sera removido
          let indiceRemovido = this.vetor.findIndex(obj => {
            return obj.id === this.fomulario.value.id;
          });

          // Remover objeto do vetor
          this.vetor.splice(indiceRemovido, 1);

          // Limpar o formulario
          this.fomulario.reset();

          //Visibilidade dos botoes
          this.btnCadastrar = true;


        });
      }

  }





