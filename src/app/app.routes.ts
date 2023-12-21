import { Routes } from '@angular/router';
import { AcessarContaComponent } from './components/pages/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/pages/criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './components/pages/recuperar-senha/recuperar-senha.component';

export const routes: Routes = [
    {
        path: '', /* raiz do projeto */
        pathMatch: 'full',
        redirectTo: '/app/acessar-conta'
    },
    {
        path: 'app/acessar-conta',
        component: AcessarContaComponent
    },
    {
        path: 'app/criar-conta',
        component: CriarContaComponent
    },
    {
        path: 'app/recuperar-senha',
        component: RecuperarSenhaComponent
    },
   



];
