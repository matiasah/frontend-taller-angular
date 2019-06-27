import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FormularioGuard implements CanActivate {

    public constructor(
        private router: Router
    ) {

    }

    public canActivate(): boolean {
        // Enviar al componente 'BuscarTerminoComponent'
        this.router.navigate(['buscar-termino']);

        // Indicar que el componente 'FormularioComponent' no se debe abrir
        return false;
    }

}
