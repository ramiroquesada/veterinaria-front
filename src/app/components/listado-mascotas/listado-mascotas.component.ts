import { Component } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';

const ELEMENT_DATA: Mascota[] = [
	{
		nombre: 'Ciro',
		edad: 3,
		raza: 'Golden',
		color: 'Dorado',
		peso: 19
	},
	{
		nombre: 'Pepe',
		edad: 5,
		raza: 'Golden Shower',
		color: 'Azul',
		peso: 12
	},
	{
		nombre: 'Jorge',
		edad: 34,
		raza: 'Caniche',
		color: 'Negro',
		peso: 9
	},
]


@Component({
	selector: 'app-listado-mascotas',
	templateUrl: './listado-mascotas.component.html',
	styleUrls: ['./listado-mascotas.component.css']
})
export class ListadoMascotasComponent {
	displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
	dataSource = ELEMENT_DATA;
	constructor() { }


}
