import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UrbanDictionaryService } from 'src/app/services/urban-dictionary.service';

@Component({
    selector: 'app-buscar-termino',
    templateUrl: './buscar-termino.component.html',
    styleUrls: ['./buscar-termino.component.scss']
})
export class BuscarTerminoComponent implements OnInit {

    // Termino a buscar
    public termino: string;

    // Indicar si se encuentra buscando el término
    public buscando: boolean;

    // Lista de definiciones
    public definiciones: string[] = [];

    // Formulario
    @ViewChild('formulario', {static: true})
    public formulario: NgForm;

    public constructor(
        private urbanDictionaryService: UrbanDictionaryService
    ) {

    }

    public ngOnInit() {

    }

    public onSubmit() {
        // Si el formulario es válido
        if (this.formulario.valid) {
            // Indicar que se encuentra buscando el término
            this.buscando = true;

            // Consumir servicio
            this.urbanDictionaryService.define(this.termino).subscribe(
                Response => {
                    // Al recibir respuesta, indicar que no se encuentra buscando el término
                    this.buscando = false;

                    // Inicializar lista de definiciones
                    this.definiciones = [];

                    // Recorrer respuesta
                    for (let i = 0; i < Response.list.length; i++) {
                        // Agregar definicion
                        this.definiciones.push( Response.list[i].definition );
                    }
                }
            );
        }
    }

}
