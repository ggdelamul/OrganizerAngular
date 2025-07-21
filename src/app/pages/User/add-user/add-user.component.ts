import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/Interfaces/IUser';
import { forbiddenNameValidator } from '../../../shared/validators/forbiddenNameValidator';

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
        @let lnameerror = form.get("lName"); @if((lnameerror?.dirty
        ||lnameerror?.touched) && lnameerror?.invalid){
        @if(lnameerror?.hasError('required') ){

        <p class="input-error">Le nom est requis</p>

        } @if( lnameerror?.hasError('minlength')){

        <p class="input-error">
          le nom doit comporter
          {{lnameerror?.errors?.['minlength'].requiredLength }} caractères.
        </p>
        } @if( lnameerror?.hasError('forbiddenName')){

        <p class="input-error">le nom ne doit pas contenir ce mot.</p>
        } }
      </div>

      <div>
        <div class="input-text">
          <input type="text" placeholder="Prénom" formControlName="fName" />
        </div>
        @let fnameerror = form.get("fName"); @if((fnameerror?.dirty ||
        fnameerror?.touched) && fnameerror?.invalid){
        @if(fnameerror?.hasError('required') ){

        <p class="input-error">Le prénom est requis</p>

        } @if( fnameerror?.hasError('minlength')){

        <p class="input-error">
          le prénom doit comporter
          {{fnameerror?.errors?.['minlength'].requiredLength }} caractères.
        </p>
        } @if( fnameerror?.hasError('forbiddenName')){

        <p class="input-error">le prénom ne doit pas contenir ce mot.</p>
        } }
      </div>

      <div>
        <div class="input-text">
          <input type="text" placeholder="Téléphone" formControlName="phone" />
        </div>
        @let phoneerror = form.get("phone"); @if((phoneerror?.dirty ||
        phoneerror?.touched) && phoneerror?.invalid){
        @if(phoneerror?.hasError('required') ){

        <p class="input-error">Le numéro de téléphone est requis</p>

        } @if( phoneerror?.hasError('pattern')){

        <p class="input-error">Veuillez entrer un numéro de téléphone valide</p>
        } }
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
    lName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      forbiddenNameValidator(),
    ]),
    fName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      forbiddenNameValidator(),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?:(?:\+33|0033)[\s.-]?[1-9]|0[1-9])(?:[\s.-]?\d{2}){4}$/
      ),
    ]),
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
