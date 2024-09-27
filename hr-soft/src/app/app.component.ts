import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/header/header.component";
import {SharedBackgroundService} from "./shared/services/shared-background.service";
import {LoaderComponent} from "./shared/tools/loader/loader.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public sharedBackgroundService: SharedBackgroundService = inject(SharedBackgroundService);
  title = 'hr-soft';
  primaryColor = 'var(--primary-color)';
  showLoader: boolean = false

  constructor() {
    this.showLoader = true;
  }

  ngOnInit() {
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

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setDinamycColor(value: string) {
    document.documentElement.style.setProperty('--dynamic-color', value);
    this.sharedBackgroundService.setBackgroundColor(value);
    this.showLoader = true;
    this.turnOffLoader();
  }
}
