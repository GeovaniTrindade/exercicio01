import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AcessarContaComponent } from './components/pages/acessar-conta/acessar-conta.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { CriarContaComponent } from './components/pages/criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './components/pages/recuperar-senha/recuperar-senha.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, AcessarContaComponent, CriarContaComponent, RecuperarSenhaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appclientes';
}
