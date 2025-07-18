import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/Interfaces/IUser';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  template: `
    <p class="main-title">Ajouter un utilisateur</p>
    <form [formGroup]="form" (submit)="onSubmit()">
      <div>
        <div class="input-text">
          <input type="text" placeholder="Nom" formControlName="lName" />
        </div>
        @let lnameerror = form.get("lName")?.errors;
        @if(lnameerror?.['required'] ){
        <p>Le nom est requis</p>
        } @if( lnameerror?.['minLength']){
        <p>
          le nom doit comporter {{lnameerror?.['minLength'].requiredLength }}
        </p>
        }
      </div>
      <div class="input-text">
        <input type="text" placeholder="Prénom" formControlName="fName" />
      </div>
      <div class="input-text">
        <input type="text" placeholder="Téléphone" formControlName="phone" />
      </div>

      <button type="submit">Ajouter</button>
    </form>
  `,
  styles: `
  form  {
    display:flex;
    flex-direction: column;
    gap: 2rem;
  }
  `,
})
export class AddUserComponent {
  userService = inject(UserService);

  form: FormGroup = new FormGroup({
    lName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    fName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('')]),
  });

  onSubmit() {
    const formData = this.form;

    console.log(formData);
    // const newUser = {
    //   id: 'iduser',
    //   nom: formData.lName,
    //   prenom: formData.fName,
    //   telephone: formData.phone,

    // } as IUser

    // this.userService.addUser(newUser);
  }
}
