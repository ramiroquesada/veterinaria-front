import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Action } from 'rxjs/internal/scheduler/Action';

const listMascotas: Mascota[] = [
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


export class ListadoMascotasComponent implements AfterViewInit {
	displayedColumns: string[] = ['tipo', 'nombre', 'duenio', 'edad', 'raza', 'color', 'peso', 'acciones'];
	dataSource = new MatTableDataSource<Mascota>(listMascotas);
	loading: boolean = false;

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	@ViewChild(MatSort) sort!: MatSort;

	constructor(private _snackBar: MatSnackBar) { }

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.paginator._intl.itemsPerPageLabel = 'Items por página';
	}


	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	eliminarMascota() {
		this.loading = true

		setTimeout(() => {
			this.loading = false;
			this._snackBar.open('La mascota fue eliminada con éxito', '', { duration: 2000, horizontalPosition: 'right' })

		}, 2000)

	}

}
