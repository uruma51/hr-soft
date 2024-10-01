import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {LoaderComponent} from "../../shared/tools/loader/loader.component";
import {SliderComponent} from "../../shared/components/slider/slider.component";
import {StoriesComponent} from "../stories/stories.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LoaderComponent,
    SliderComponent,
    StoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

}
