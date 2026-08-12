import { Injectable } from "@angular/core";
import { signal } from "@angular/core";
import { computed } from "@angular/core";

type PerfilUsuario = 'admin' | 'usuario';

type Usuario = {
    email: string;
    perfil: PerfilUsuario;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private usurio = signal <Usuario | null>(null);
    private tokenJwt = signal <string | null>(null);

    usuarioAtual = computed(() => this.usurio());
    usurioLogado = computed(() => this.usurio() !== null);
    token = computed(() => this.tokenJwt());
    admin = computed(() => this.usurio()?.perfil === 'admin');

    login (email: string, senha: string): boolean{
        if(!email || !senha){
            return false;
        }
    
    const perfil: PerfilUsuario = email === 'admin@email.com' ? 'admin' : 'usuario';    
    const tokenSimulado = 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJzdWIiOiJhbHVub0B0ZXN0ZS5jb20iLCJwZXJmaWwiOiJ1c3VhcmlvIn0.' 
    +'assinatura-simulada';
    
    this.usurio.set({
        email,
        perfil,
    });

    this.tokenJwt.set(tokenSimulado);
    return true;
    }
    logout() {
        this.usurio.set(null);
        this.tokenJwt.set(null);
    }
    obterToken(): string | null {
        return this.tokenJwt();
    }
}