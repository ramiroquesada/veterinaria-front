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
	loading: boolean = false;
	id!: number;
	mascota!: Mascota;
	mascotaFetchFailed: boolean = false

	constructor(private _mascotaService: MascotaService,
		private aRoute: ActivatedRoute) {
		this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
	}

	ngOnInit(): void {
		this.obtenerMascota();
	}

	obtenerMascota() {
		this.loading = true;

		this._mascotaService.getMascotaById(this.id).subscribe({
			next: (data) => {
				this.mascota = data;
				this.loading = false;
			},
			error: () => {
				this.loading = false;
				this.mascotaFetchFailed = true;
			},
			complete: () => { return }
		});
	}

}
