import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifsComponent } from './gifs/gifs.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    SearchComponent,
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
