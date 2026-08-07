import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router'
import { usuarioLogado, login, logout } from './core/auth';
import { Header } from './shared/layout/header/header';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [RouterOutlet, RouterLink, Header],
=======
  imports: [RouterOutlet, Header],
>>>>>>> 7c2e94e028043275bca6e5fe1d1a3b164cddd3f6
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}
