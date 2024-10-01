import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import SwiperCore from 'swiper';
import {SwiperOptions} from "swiper/types";
import {NgStyle} from "@angular/common";
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
}
