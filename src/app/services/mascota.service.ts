import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Mascota } from '../interfaces/mascota';

@Injectable({
	providedIn: 'root'
})
export class MascotaService {

	private myAppUrl: String = environment.endpoint;
	private myApiUrl: String = 'api/Mascota';

	constructor(private http: HttpClient) { }

	getMascotas(): Observable<Mascota[]> {

		return this.http.get<Mascota[]>(`${this.myAppUrl}${this.myApiUrl}`)

	}
}
