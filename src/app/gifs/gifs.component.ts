import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BusquedaService } from '../service/busqueda.service';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit, OnDestroy {

 gifs: any[] = [];
 subscription: Subscription;

  constructor(
    private busquedaService: BusquedaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    
    // this.busquedaService.getTendenciaGifs();
    this.subscription = this.busquedaService.getGifs()
      .subscribe((response: any) =>{
        this.gifs = response;
      });
    }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  

}
