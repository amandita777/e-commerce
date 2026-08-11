import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { inject } from '@angular/core';
import  { CarrinhoService } from '../../../core/service/carrinho.service';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'TecnoMundo';

  private carrinhoService = inject(CarrinhoService);
  quantidade = this.carrinhoService.quantidadeItens;
  private authService = inject(AuthService);
  usuarioLogado = this.authService.usurioLogado;
  usuarioAtual = this.authService.usuarioAtual;

  sair(){
    this.authService.logout();
  }
  
}
