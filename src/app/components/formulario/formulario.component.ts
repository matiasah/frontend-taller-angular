import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  // Objeto
  public objeto: any = {};

  // Indicar si se encuentra ingresando
  public ingresando: boolean;

  // Formulario
  @ViewChild('formulario')
  public formulario: NgForm;

  public constructor() {

  }

  public ngOnInit() {
  }

  public onSubmit() {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      // Indicar que se encuentra ingresando
      this.ingresando = true;
    }
  }

}
