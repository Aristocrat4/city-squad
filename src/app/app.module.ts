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
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductService } from './service/productservice.service';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetPriceButtonComponent,
    HeroComponent,
    HomeComponent,
    FooterComponent,
    ServicesToOfferComponent,
    WhyChooseUsComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    ButtonModule,
    TagModule,
    CarouselComponent,
    TestimonialsComponent,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
