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
import { userPagination } from '../../../shared/pagination/Pagination';
@Component({
  selector: 'app-user-list',
  imports: [UserElementComponent],
  template: `
    @let u = sortByName();

    <button (click)="setIsSort()">Trier par nom</button>
    <button>< Précedent</button>
    <button (click)="nextUserList()">Suivant ></button>
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
        (idToDelfromEl)="idToDelfromList.emit($event)"
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
  idToDelfromList = output<string | null>();

  isSort = signal<boolean>(false);

  constructor() {
    effect(() => {
      // console.log(this.isSort());
      console.log('La pagination: ' + this.paginateNbr());
    });
  }

  setIsSort() {
    return this.isSort()
      ? this.isSort.update(() => false)
      : this.isSort.update(() => true);
  }

  sortByName = computed(() => {
    if (!this.isSort()) {
      return this.tenUserList();
    } else {
      const sortedList: IUser[] | undefined = [];

      this.tenUserList()?.forEach((user: IUser) => sortedList.push(user));

      return sortedList.sort((a: IUser, b: IUser) =>
        a.nom.localeCompare(b.nom)
      );
    }
  });

  //Pagination
  // pagetest = 1;
  // usersPaginated = signal<IUser[]>([]);
  // pagination() {
  //   this.usersPaginated.update(() =>
  //     userPagination(this.userList(), this.pagetest)
  //   );
  // }

  paginateNbr = signal(10);

  tenUserList(offset: number = 0) {
    return this.userList()?.slice(offset, this.paginateNbr());
  }

  nextUserList() {
    const offset: number = this.paginateNbr();
    this.paginateNbr.update((value) => value + 10);
    this.tenUserList(offset);
  }
}
