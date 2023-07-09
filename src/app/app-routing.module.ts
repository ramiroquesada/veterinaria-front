import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
	{ path: '', redirectTo: 'mascotas', pathMatch: 'full' },
	{ path: 'mascotas', component: ListadoMascotasComponent },
	{ path: 'agregar', component: AgregarEditarMascotaComponent },
	{ path: 'verMascota/:id', component: VerMascotaComponent },
	{ path: 'editar/:id', component: AgregarEditarMascotaComponent },
	{ path: '**', redirectTo: 'mascotas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
