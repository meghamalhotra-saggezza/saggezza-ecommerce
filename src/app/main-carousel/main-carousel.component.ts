import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainCarouselComponent implements OnInit {
  public slides = [
    './../assets/images/banner1.jpg',
    './../assets/images/banner2.jpg',
    './../assets/images/banner3.jpg',
    './../assets/images/banner4.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
   
  }

//   config: SwiperConfigInterface = {
//     a11y: true,
//     direction: 'horizontal',
//     slidesPerView: 1,
//     slideToClickedSlide: true,
//     mousewheel: true,
//     scrollbar: false,
//     watchSlidesProgress: true,
//     navigation: true,
//     keyboard: true,
//     pagination: false,
//     centeredSlides: true,
//     loop: true,
//     roundLengths: true,
//     slidesOffsetBefore: 100,
//     slidesOffsetAfter: 100,
//     spaceBetween: 50,
//     breakpoints: {
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 1
//         }
//     }
// };

public config: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 1,
  keyboard: true,
  mousewheel: true,
  scrollbar: true,
  navigation: true,
  pagination: true,
  autoplay:{
      delay:3000
  }
};

public onIndexChange(index: number) {
  console.log('Swiper index: ', index);
}

}
