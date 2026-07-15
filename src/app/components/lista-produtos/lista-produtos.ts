import { Component } from '@angular/core';
import { Produto } from '../produto/produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = [
    {nome: 'Teclado', preco: 59.99},
    {nome: 'Mouse', preco: 89.99},
    {nome: 'Monitor', preco: 899.99},
    {nome: 'Disktop Gamer', preco: 200},
    {nome: 'Headset Gamer', preco: 999.99}
  ];
}
