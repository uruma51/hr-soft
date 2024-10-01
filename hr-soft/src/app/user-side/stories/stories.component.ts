import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class StoriesComponent {

}
