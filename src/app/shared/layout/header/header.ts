import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { inject } from '@angular/core';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facade';
import { AuthFacade } from '../../../core/facades/auth.facade';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  nomeLoja = 'TecnoMundo';

  private carrinhoFacade = inject(CarrinhoFacade);
  quantidade = this.carrinhoFacade.quantidadeCarrinho;

  private authFacade = inject(AuthFacade);
  usuarioLogado = this.authFacade.usuarioLogado;
  usuarioAtual = this.authFacade.usuarioAtual;

  private router = inject(Router);


  sair(){
    this.authFacade.sair();
    this.router.navigateByUrl('/login');
  }
  
}
