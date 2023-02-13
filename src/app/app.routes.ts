import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { ContactComponent } from './component/contact/contact.component';

const APP_ROUTE: Routes=[
    {path:'home', component: HomeComponent},
    {path:'pokemon', component: PokemonComponent},
    {path:'contact', component: ContactComponent},

    {path:'**', pathMatch:'full', redirectTo: 'home'}

];

export const routes = RouterModule.forRoot(APP_ROUTE,{useHash:true})