import {Component, inject, Signal} from "@angular/core";
import {toSignal} from "@angular/core/rxjs-interop";
import {filter, map} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector:'helper_class',
  template:'',
  standalone:true
})
export class Helper_class {
  public router:Router = inject(Router);

  public findActiveRoute():Signal<string>{
    return toSignal(this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((_: any) => _.url),
    ));
  }
}
