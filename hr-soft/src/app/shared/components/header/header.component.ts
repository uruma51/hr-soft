import {Component, inject, Signal} from '@angular/core';
import {SharedBackgroundService} from "../../services/shared-background.service";
import {NgStyle} from "@angular/common";
import {Router} from "@angular/router";
import {Helper_class} from "../../tools/helper-directory/helper_class";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends Helper_class{
  private sharedBackgroundService:SharedBackgroundService = inject(SharedBackgroundService);
  public backgroundColor:Signal<string> = this.sharedBackgroundService.getBackgroundColor()
  public activeUrl: Signal<any> = this.findActiveRoute();
  public logOut():void {
    this.router.navigate(['/login'])
  }
}
