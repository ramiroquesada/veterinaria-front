import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
	selector: 'app-agregar-editar-mascota',
	templateUrl: './agregar-editar-mascota.component.html',
	styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit {
	loading: boolean = false;
	form: FormGroup;
	id: number;
	operacion: string = "Agregar";

	constructor(private fb: FormBuilder,
		private _mascotaService: MascotaService,
		private _snackBar: MatSnackBar,
		private _router: Router,
		private aRoute: ActivatedRoute,
	) {

		this.form = this.fb.group({
			nombre: ['', Validators.required],
			raza: ['', Validators.required],
			color: ['', Validators.required],
			edad: ['', Validators.required],
			peso: ['', Validators.required],
			duenio: ['', Validators.required],
			tipo: ['', Validators.required],
		})

		this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
	}

	ngOnInit(): void {
		if (this.id != 0) {
			this.operacion = 'Editar';
			this.obtenerMascota(this.id);
		}
	}

	obtenerMascota(id: number) {
		this.loading = true;
		this._mascotaService.getMascotaById(id).subscribe(data => {

			this.form.setValue({
				nombre: data.nombre,
				raza: data.raza,
				color: data.color,
				edad: data.edad,
				peso: data.peso,
				tipo: data.tipo,
				duenio: data.duenio
			})

			this.loading = false;
		})
	}


	agregarEditarMascota() {


		const mascota: Mascota = {
			nombre: this.form.value.nombre,
			raza: this.form.value.raza,
			tipo: this.form.value.tipo,
			duenio: this.form.value.duenio,
			edad: this.form.value.edad,
			color: this.form.value.color,
			peso: this.form.value.peso,
		}

		if (this.id != 0) {
			mascota.id = this.id;
			this.editarMascota(this.id, mascota);
		}
		else {
			this.agregarMascota(mascota)
		}
	}

	agregarMascota(mascota: Mascota) {
		this._mascotaService.addMascota(mascota).subscribe(data => {
			this.mensajeExito('registrada');
			this._router.navigate(['/mascotas']);

		})
	}


	editarMascota(id: number, mascota: Mascota) {
		this._mascotaService.updateMascota(id, mascota).subscribe(() => {
			this.loading = false;
			this.mensajeExito('actualizada');
			this._router.navigate(['/mascotas']);
		})
	}

	mensajeExito(texto: string) {
		this._snackBar.open(`La mascota fue ${texto} con éxito`, '', {
			duration: 2000,
			horizontalPosition: 'right',
		});
	}
}
