import {
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { IUser } from '../../../shared/Interfaces/IUser';
import { UserElementComponent } from '../user-element/user-element.component';

@Component({
  selector: 'app-user-list',
  imports: [UserElementComponent],
  template: `
    @let u = sortByName();

    <button (click)="setIsSort()">Trier par nom</button>
    <ul>
      <li>
        <p>Nom</p>
        <p>Prénom</p>
        <p>Téléphone</p>
      </li>

      @for(user of u; track user.id){
      <app-user-element
        [userElement]="user"
        (selectedIdfromEl)="selectedIdfromList.emit($event)"
      />
      }
    </ul>
  `,

  styles: `  li {
    display: flex;
    gap: 2rem;
  }`,
})
export class UserListComponent {
  userList = input<IUser[]>();

  selectedIdfromList = output<string | null>();

  isSort = signal<boolean>(false);

  constructor() {
    effect(() => {
      // console.log(this.isSort());
    });
  }

  setIsSort() {
    return this.isSort()
      ? this.isSort.update(() => false)
      : this.isSort.update(() => true);
  }

  sortByName = computed(() => {
    if (!this.isSort()) {
      return this.userList();
    } else {
      const sortedList: IUser[] | undefined = [];

      this.userList()?.forEach((user: IUser) => sortedList.push(user));

      return sortedList.sort((a: IUser, b: IUser) =>
        a.nom.localeCompare(b.nom)
      );
    }
  });
}
