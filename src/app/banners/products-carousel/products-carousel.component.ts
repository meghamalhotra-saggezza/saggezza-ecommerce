import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit {
  @Input() name:String;

  public featureProducts = [
    'assets/images/products/keyboard/1-medium.png',
    'assets/images/products/pc/1-medium.png',
    'assets/images/products/headset/1-medium.png',
    'assets/images/products/probook/1-medium.png',
  ];

  public saleProducts = [
    'assets/images/sale-products/download.png',
    'assets/images/sale-products/download.png',
    'assets/images/sale-products/download.png',
    'assets/images/sale-products/download.png',
  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: true,
    pagination: true,
    autoplay:{
        delay:3000
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
  
  
  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }
  
}
