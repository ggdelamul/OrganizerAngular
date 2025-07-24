import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  input,
  output,
} from '@angular/core';
import { IUser } from '../../../shared/Interfaces/IUser';

@Component({
  selector: 'app-user-element',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  template: `
    @let u = userElement();
    <div (click)="selectedIdfromEl.emit(u.id)">
      <li>
        <p>{{ u?.nom }}</p>
        <p>{{ u?.prenom }}</p>
        <p>{{ u?.telephone }}</p>
        <iconify-icon
          (click)="idToDelfromEl.emit(u.id)"
          icon="mdi:garbage-can-circle-outline"
          width="24"
          height="24"
          style="color:rgb(0, 0, 0)"
        ></iconify-icon>
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
  idToDelfromEl = output<string | null>();

  // constructor() {
  //   effect(() => {
  //     // console.log(this.userElement());
  //   });
  // }
}
