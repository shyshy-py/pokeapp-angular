import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { PokeserviceService } from './services/pokeservice.service';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ContactComponent } from './component/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent,
    HomeComponent,
    FooterComponent,
    LoadingComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, routes, HttpClientModule, FormsModule],
  providers: [PokeserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
