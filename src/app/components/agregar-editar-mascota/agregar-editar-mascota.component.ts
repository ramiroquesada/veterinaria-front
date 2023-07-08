import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent {
loading: boolean = false;
form: FormGroup ;

constructor(private fb: FormBuilder){
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

agregarMascota(){
	const mascota: Mascota = {
		nombre: this.form.value.nombre,
		raza: this.form.value.raza,
		tipo: this.form.value.tipo,
		duenio: this.form.value.duenio,
		edad: this.form.value.edad,
		color: this.form.value.color,
		peso: this.form.value.peso,
	}

	console.log(mascota)
}
}
