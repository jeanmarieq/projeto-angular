import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
// import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

 getTendenciaGifs() {
    return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=Bpwt07zrU5IwhQ0F9YfDlZaDysxyBNkg&limit=25&rating=g')
      .subscribe((response: any) => {
      this.gifs.next(response.data);
      });
  } 

  buscarGifs(gifNome: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=Bpwt07zrU5IwhQ0F9YfDlZaDysxyBNkg&q=${gifNome}&limit=25&offset=0&rating=g&lang=en`)
    .subscribe((response: any) => {
      this.gifs.next(response.data);
      });
  }

  getGifs() {
    return this.gifs.asObservable();
  }


}



