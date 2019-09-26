import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ProductCatalogueComponent} from './components/product-catalogue/product-catalogue.component';
import { NavbarComponent} from './components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path: '', component: PlaceOrderComponent},
  {path: 'place-order', component: PlaceOrderComponent},
  {path: 'modals', component: SliderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderComponent,
    PlaceOrderComponent,
    NavbarComponent,
    ProductCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
