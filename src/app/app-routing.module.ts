import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuoteComponent } from './components/quote/quote.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-the-price', component: QuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
