import { Component } from '@angular/core';
<<<<<<< HEAD
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
=======
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { inject } from '@angular/core';
import  { CarrinhoService } from '../../../core/service/carrinho.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, UpperCasePipe],
>>>>>>> 7c2e94e028043275bca6e5fe1d1a3b164cddd3f6
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'TecnoMundo';
<<<<<<< HEAD
=======

  private carrinhoService = inject(CarrinhoService);
  quantidade = this.carrinhoService.quantidadeItens;
>>>>>>> 7c2e94e028043275bca6e5fe1d1a3b164cddd3f6
}
