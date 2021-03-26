import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../service/busqueda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private busquedaService: BusquedaService) { }

  ngOnInit(): void {
  }

  busca(buscarPalabra: string) {
    if (buscarPalabra !== '') {
      this.busquedaService.buscarGifs(buscarPalabra);
    }
  }

}
