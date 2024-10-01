import {Component, inject} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router)
  userLoggedin: boolean = false

  login() {
    this.userLoggedin = true;


    setTimeout(() => {
      this.router.navigate(['/user']);
    }, 2000)


  }


}
