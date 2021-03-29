
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GifsComponent }    from './gifs/gifs.component';



const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path:'search', component: SearchComponent },
    { path: 'gifs', component: GifsComponent },
   
    
];

export const routing = RouterModule.forRoot(APP_ROUTES);
