import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BuscarTerminoComponent } from './components/buscar-termino/buscar-termino.component';
import { FormularioGuard } from './guards/formulario.guard';

const routes: Routes = [
  {
    path: '',
    component: FormularioComponent,
    canActivate: [FormularioGuard]
  },
  {
    path: 'buscar-termino',
    component: BuscarTerminoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
