import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  showLoader: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoader = false
    },2000)
  }

}
