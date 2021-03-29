import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../service/busqueda.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pegar_gifs: boolean = false;
  

  constructor(private busquedaService: BusquedaService, 
              private route: ActivatedRoute, private location: Location) { 
    this.pegar_gifs = false;  
  }
   
    
 ngOnInit(): void {


  }

  busca(buscarPalabra: string) {
    if (buscarPalabra !== '') {
      this.busquedaService.buscarGifs(buscarPalabra)
      this.pegar_gifs = true;
      
    }
  }
  goBack():void{
    this.location.back();
  }

  
}
