import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {provideRouter} from "@angular/router";
import {userSideRouts} from "./user-side.routs";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

  ],
  providers: [provideRouter(userSideRouts)]
})
export class UserSideModule { }
