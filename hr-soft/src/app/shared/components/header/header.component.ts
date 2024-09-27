import {Component, inject, Signal} from '@angular/core';
import {SharedBackgroundService} from "../../services/shared-background.service";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private sharedBackgroundService:SharedBackgroundService = inject(SharedBackgroundService);
  public backgroundColor:Signal<string> = this.sharedBackgroundService.getBackgroundColor()
}
