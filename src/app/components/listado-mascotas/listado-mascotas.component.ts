import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Mascota } from 'src/app/interfaces/mascota';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
	selector: 'app-listado-mascotas',
	templateUrl: './listado-mascotas.component.html',
	styleUrls: ['./listado-mascotas.component.css'],
})
export class ListadoMascotasComponent implements AfterViewInit, OnInit {
	displayedColumns: string[] = [
		'nombre',
		'tipo',
		'raza',
		'duenio',
		'acciones'
	];

	dataSource = new MatTableDataSource<Mascota>();
	loading = false;

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	@ViewChild(MatSort) sort!: MatSort;

	constructor(
		private _snackBar: MatSnackBar,
		private _mascotaService: MascotaService
	) { }

	ngOnInit(): void {
		this.obtenerMascotas();

	}

	ngAfterViewInit(): void {
		
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;

		this.paginator._intl.itemsPerPageLabel = 'Items por página';
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	obtenerMascotas() {
		this.loading = true;

		this._mascotaService.getMascotas().subscribe({
			next: (data) => {
				this.loading = false;
				this.dataSource.data = data;
			},
			error: (e) => this.loading = false,
			complete: () => console.log('complete'),
		});
	}

	eliminarMascota() {
		this.loading = true;

		setTimeout(() => {
			this.loading = false;
			this._snackBar.open('La mascota fue eliminada con éxito', '', {
				duration: 2000,
				horizontalPosition: 'right',
			});
		}, 2000);
	}
}
