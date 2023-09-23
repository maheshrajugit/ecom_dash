import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavStateService {
  public selected_nav = new BehaviorSubject('home');
  constructor() { }
  changeNavState(val: string){
   this.selected_nav.next(val);
  }
}
