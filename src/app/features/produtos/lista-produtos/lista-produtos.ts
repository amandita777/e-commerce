import { Component, signal } from '@angular/core';
import { Produto } from '../produto/produto';
import { Console } from 'node:console';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
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
      ...listaAtual, {nome:'Sony Playstation 5', preco: 10.000}
    ]);
  }
}
