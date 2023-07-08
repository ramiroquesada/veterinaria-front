import { Component } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';

const ELEMENT_DATA: Mascota[] = [
	{
		nombre: 'Ciro',
		edad: 3,
		raza: 'Golden',
		color: 'Dorado',
		peso: 19,
		tipo: 'Perro',
		duenio: 'Midu'
	},
	{
		nombre: 'Pepe',
		edad: 5,
		raza: 'Golden Shower',
		color: 'Azul',
		peso: 12,
		tipo: 'Perro',
		duenio: 'Facu'
	},
	{
		nombre: 'Jorge',
		edad: 34,
		raza: 'Caniche',
		color: 'Negro',
		peso: 9,
		tipo: 'Perro',
		duenio: 'Roberto'
	},
	{
		nombre: 'Juanjo',
		edad: 21,
		raza: 'Común',
		color: 'Amarilo',
		peso: 6,
		tipo: 'Gato',
		duenio: 'Julian'
	},
	{
		nombre: 'Miguel',
		edad: 4,
		raza: 'Pitbull',
		color: 'Rojo',
		peso: 29,
		tipo: 'Perro',
		duenio: 'Santi'
	},
	{
		nombre: 'Milton',
		edad: 4,
		raza: 'Común',
		color: 'Blanco',
		peso: 7,
		tipo: 'Gato',
		duenio: 'Ramiro'
	},
]


@Component({
	selector: 'app-listado-mascotas',
	templateUrl: './listado-mascotas.component.html',
	styleUrls: ['./listado-mascotas.component.css']
})


export class ListadoMascotasComponent {
	displayedColumns: string[] = ['tipo', 'nombre', 'duenio', 'edad', 'raza', 'color', 'peso'];
	dataSource = ELEMENT_DATA;
	constructor() { }


}
