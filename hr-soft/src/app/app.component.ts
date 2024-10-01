import {Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject, OnInit, Signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {SharedBackgroundService} from "./shared/services/shared-background.service";
import {LoaderComponent} from "./shared/tools/loader/loader.component";
import {NgIf} from "@angular/common";
import {SliderComponent} from "./shared/components/slider/slider.component";
import {SideBarComponent} from "./shared/components/side-bar/side-bar.component";
import {Helper_class} from "./shared/tools/helper-directory/helper_class";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LoaderComponent,
    NgIf,
    SliderComponent,
    SideBarComponent,
    Helper_class
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends Helper_class implements OnInit {
  public sharedBackgroundService: SharedBackgroundService = inject(SharedBackgroundService);
  showLoader: boolean = false
  public scrollPosition: number | any = 0;
  public activeUrl: Signal<any> = this.findActiveRoute();



  ngOnInit() {

    window.scrollTo({
      top:0,
    })
    for (let i = 0; i < 10; i++) {
      this.sharedBackgroundService.setBackgroundColor('#04142A');
      this. setDinamycColor('#04142A')
    }
    this.turnOffLoader();
  }

  private turnOffLoader() {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000)
  }


  setDinamycColor(value: string) {
    document.documentElement.style.setProperty('--dynamic-color', value);
    this.sharedBackgroundService.setBackgroundColor(value);
    this.showLoader = true;
    this.turnOffLoader();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrollPosition = window.pageYOffset;
  }
}
