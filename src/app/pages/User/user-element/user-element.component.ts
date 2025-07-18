import { Component, effect, input, output } from '@angular/core';
import { IUser } from '../../../shared/Interfaces/IUser';

@Component({
  selector: 'app-user-element',
  imports: [],
  template: `
    @let u = userElement();
    <div (click)="selectedIdfromEl.emit(u.id)">
      <li>
        <p>{{ u?.nom }}</p>
        <p>{{ u?.prenom }}</p>
        <p>{{ u?.telephone }}</p>
      </li>
    </div>
  `,
  styles: `
  li {
    display: flex;
    gap: 2rem;
  }`,
})
export class UserElementComponent {
  userElement = input.required<IUser>();

  selectedIdfromEl = output<string | null>();

  // constructor() {
  //   effect(() => {
  //     // console.log(this.userElement());
  //   });
  // }
}
