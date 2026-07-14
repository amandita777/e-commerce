import { Component } from '@angular/core';
import {UpperCasePipe, CurrencyPipe} from '@angular/common';
import {PrecoFormatadoPipe} from '../../pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  //produto = 'Notebook';
  //preco = 3000;
  //mostrarPreco = true;
  //mostrarProduto = true;
  produtos = [
    {produto: 'Mouse', preco: 100},
    {produto: 'Desktop', preco: 499.99},
    {produto: 'Caixa de Som', preco: 5200}
  ];
}
