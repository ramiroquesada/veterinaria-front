import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
	selector: 'app-agregar-editar-mascota',
	templateUrl: './agregar-editar-mascota.component.html',
	styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent {
	loading: boolean = false;
	form: FormGroup;

	constructor(private fb: FormBuilder,
		private _mascotaService: MascotaService,
		private _snackBar: MatSnackBar) {

		this.form = this.fb.group({
			nombre: ['', Validators.required],
			raza: ['', Validators.required],
			color: ['', Validators.required],
			edad: ['', Validators.required],
			peso: ['', Validators.required],
			duenio: ['', Validators.required],
			tipo: ['', Validators.required],
		})
	}

	agregarMascota() {
		const mascota: Mascota = {
			nombre: this.form.value.nombre,
			raza: this.form.value.raza,
			tipo: this.form.value.tipo,
			duenio: this.form.value.duenio,
			edad: this.form.value.edad,
			color: this.form.value.color,
			peso: this.form.value.peso,
		}

		//ENVIAMOS OBJETO AL BACKEND
		this._mascotaService.addMascota(mascota).subscribe(data => {
			console.log(data);
			this.mensajeExito();
		})
	}


	mensajeExito() {
		this._snackBar.open('La mascota fue agregada con éxito', '', {
			duration: 2000,
			horizontalPosition: 'right',
		});
	}
}
