import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedBackgroundService {

  private backgroundSignal: WritableSignal<string> = signal('')

  constructor() {
  }

  public getBackgroundColor(): Signal<string> {
    return this.backgroundSignal;
  }

  public setBackgroundColor(color: string): void {
    this.backgroundSignal.set(color);
  }
}
