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
    />
    @if (isDetail()) {
    <app-user-detail
      class="dashboard-right-element"
      [selectUserFromContainer]="selectedUser"
    />
    }
  `,
  styles: ``,
})
export class UserContainerComponent {
  userService = inject(UserService);

  users = computed(() => {
    return this.userService.usersResources.value();
  });
  userIsloading = this.userService.usersResources.isLoading;

  // userId = signal<string | undefined>('');

  selectedUserId = input<string | undefined>();

  isDetail = signal<boolean>(false);

  selectedId(id: string | undefined) {
    // this.userId.set(id);
    this.isDetail.update(() => true);
    this.userService.setUserId(id);
  }

  selectedUser = this.userService.getOneUserResources.value();
}
