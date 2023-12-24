import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GetPriceButtonComponent } from './shared/components/get-price-button/get-price-button.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesToOfferComponent } from './components/services-to-offer/services-to-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetPriceButtonComponent,
    HeroComponent,
    HomeComponent,
    FooterComponent,
    ServicesToOfferComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
