import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Componentes

import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Angular Material

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'


@NgModule({
	declarations: [
		AppComponent,
		AgregarEditarMascotaComponent,
		ListadoMascotasComponent,
		VerMascotaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatTableModule,
		MatSidenavModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
