import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
      <div class="dropdown-header">
        <div class="small-avatar-container">
          <img
            class="avatar"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div class="dropdown-header-userinfo">
          <p>Prénom NOM</p>
          <p>&#64;username</p>
        </div>
      </div>

      <hr />

      <ul class="dropdown-menu">
        <li>
          <iconify-icon
            icon="material-symbols:change-circle-outline"
            width="24"
            height="24"
            style="color: rgb(255, 255, 255)"
          ></iconify-icon>
          <p>Changer de compte</p>
        </li>
        <li>
          <iconify-icon
            icon="material-symbols:chip-extraction-rounded"
            width="24"
            height="24"
            style="color: rgb(255, 255, 255)"
          ></iconify-icon>
          <p>Se déconnecter</p>
        </li>
        <li>
          <iconify-icon
            icon="material-symbols:build-circle-outline"
            width="24"
            height="24"
            style="color: rgb(255, 255, 255)"
          ></iconify-icon>
          <p>Paramètre</p>
        </li>
        <li>
          <iconify-icon
            icon="material-symbols:chat-paste-go-outline"
            width="24"
            height="24"
            style="color: rgb(255, 255, 255)"
          ></iconify-icon>
          <p>Envoyer des commentaires</p>
        </li>
        <li>
          <iconify-icon
            icon="material-symbols:chat-info-outline"
            width="24"
            height="24"
            style="color: rgb(255, 255, 255)"
          ></iconify-icon>
          <p>Aide</p>
        </li>
      </ul>
  `,
  styles: ``,
})
export class DropdownMenuComponent {}
