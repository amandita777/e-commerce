import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal } from '@angular/core';
import { computed } from '@angular/core'
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = signal([
    {nome: 'Teclado', preco: 59.99},
    {nome: 'Mouse', preco: 89.99},
    {nome: 'Monitor', preco: 899.99},
    {nome: 'Disktop Gamer', preco: 200},
    {nome: 'Headset Gamer', preco: 999.99}
  ]);
  exibirProduto (nome: string){
    console.log ('Produto Selecionado ', nome);
  }
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual, {nome:'Sony Playstation 5', preco: 10000}
    ]);
  }
  totalProdutos = computed(() => this.produtos().length);
  valorTotal = computed(() => {return this.produtos().reduce((total, item) => total + item.preco,0)});

  substituirProdutos (){
    this.produtos.set([
      {nome: 'Arroz Fazenda', preco: 200},
      {nome: 'Feijão Timbiras', preco: 400}
    ]);
  }
}
