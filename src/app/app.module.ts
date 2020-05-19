import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'
import { MenuComponent } from './menu/menu.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { BannersComponent } from './banners/banners.component';
import { FlexLayoutModule } from "@angular/flex-layout";  
import { MatTabsModule } from '@angular/material/tabs';
import { ProductsCarouselComponent } from './banners/products-carousel/products-carousel.component';
import { FashionComponent } from './fashion/fashion.component';
import { TeaComponent } from './tea/tea.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MainCarouselComponent,
    BannersComponent,
    ProductsCarouselComponent,
    FashionComponent,
    TeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    SwiperModule,
    FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
