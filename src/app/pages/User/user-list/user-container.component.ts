import {
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/Interfaces/IUser';
import { UserElementComponent } from '../user-element/user-element.component';

@Component({
  selector: 'app-user-container',
  imports: [UserListComponent, UserDetailComponent],
  template: `
    <app-user-list
      [userList]="users()"
      (selectedIdfromList)="selectedId($event)"
      (idToDelfromList)="deleteUser($event)"
    />
    <app-user-detail
      class="dashboard-right-element"
      [selectUserFromContainer]="selectedUser()"
    />
  `,
  styles: ``,
})
export class UserContainerComponent {
  userService = inject(UserService);
  users = computed(() => {
    return this.userService.usersResources.value();
  });
  userIsloading = this.userService.usersResources.isLoading;

  selectedId(id: string | null) {
    const selectedId = this.userService.setUserId(id);
    console.log(selectedId(), 'from container');
  }

  deleteUser(id: string | null) {
    this.userService.deleteOneUser(id);
  }

  selectedUser = this.userService.getOneUserResources.value;
}
