import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../../interfaces/mascota';

@Component({
	selector: 'app-ver-mascota',
	templateUrl: './ver-mascota.component.html',
	styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit {
	loading = false;
	id: number;
	mascota!: Mascota;

	constructor(private _mascotaService: MascotaService,
		private aRoute: ActivatedRoute) {
		this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
	}

	ngOnInit(): void {
		this.obtenerMascota();
		// this.aRoute.params.subscribe(data=>{
		// 	console.log(data)
		// })
	}

	obtenerMascota() {
		this.loading = true;

		this._mascotaService.getMascotaById(this.id).subscribe({
			next: (data) => {
				this.loading = false;
				this.mascota = data;
			},
			error: () => this.loading = false,
			complete: () => {return}
		});
	}

}
