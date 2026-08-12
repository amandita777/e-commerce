import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "./service/auth.service";

export const adminGuard: CanActivateFn = () => {
    const router = inject(Router);
    const authService = inject(AuthService);

    //! -1) Verificar se o Usuário está logado
    if (!authService.usurioLogado()) {
        return router.createUrlTree(['/login']);
    }
    //! -2) Verificar se o usuário atual (logado), se tem perfil adm
    if (!authService.admin()) {
        return router.createUrlTree(['/acesso-negado'])
    }
    //! -3) Se o usuário estiver logado e for adm = ACESSO LIBERADO
  
    return true;
};