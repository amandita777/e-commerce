import { Component, signal} from '@angular/core';
//import { RouterOutlet } from '@angular/router'; // Remove importação do RouterOutlet, pois não está sendo utilizado no momento
import { Produto } from './components/produto/produto'; // Importa o produto para dentro do app
import { ListaProdutos } from './components/lista-produtos/lista-produtos'; //adicionar o import

@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
