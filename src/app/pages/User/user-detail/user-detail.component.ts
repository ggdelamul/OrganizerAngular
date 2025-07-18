import { Component, effect, input } from '@angular/core';
import { IUser } from '../../../shared/Interfaces/IUser';

@Component({
  selector: 'app-user-detail',
  imports: [],
  template: ` 
  <p>{{selectUserFromContainer()?.nom}} </p> `,
  styles: ``,
})
export class UserDetailComponent {
  selectUserFromContainer = input<IUser | undefined>();

  constructor() {
    effect(() => {
      console.log(this.selectUserFromContainer()?.nom);
    });
  }
}
