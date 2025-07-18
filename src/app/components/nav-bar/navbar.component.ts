import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, DropdownMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <nav>
      <div class="nav-header">
        <div class="nav-header-info-user" (click)="displayMenu()">
          <div class="small-avatar-container">
            <img
              class="avatar"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <p>Utilisateur</p>
          <iconify-icon
            icon={{dropdownIcon}}
            width="24"
            height="24"
            style="color:rgb(255, 255, 255)"
          ></iconify-icon>
        </div>
        <div class="nav-header-icones">
          <iconify-icon
            icon="arcticons:hourlyreminder"
            width="24"
            height="24"
            style="color:rgb(255, 255, 255)"
          ></iconify-icon>
          <iconify-icon
            icon="ep:menu"
            width="24"
            height="24"
            style="color:rgb(255, 255, 255)"
          ></iconify-icon>
        </div>
      </div>
      <div class="dropdown-empty">
        @if(isVisible===true){
        <app-dropdown-menu class="dropdown-container"></app-dropdown-menu>

        }
      </div>
      <div class="dashboard-navigation-container">
        <p class="navigation-title">Dashboard</p>

        <ul class="navigation">
          <li>
            <iconify-icon
              icon="mingcute:shopping-bag-2-fill"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <a routerLink="/document">Document</a>
          </li>

          <li>
            <iconify-icon
              icon="fluent-mdl2:event-date"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <a routerLink="/daily-tasks">Aujourd'hui</a>
          </li>
          <li>
            <iconify-icon
              icon="fontisto:date"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <a routerLink="/agenda">Agenda</a>
          </li>
          <li>
            <iconify-icon
              icon="ep:menu"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <a routerLink="/filters-tag">Filtres et étiquettes</a>
          </li>
          <li>
            <iconify-icon
              icon="material-symbols:check-small-rounded"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <a routerLink="/finished">Terminé</a>
          </li>
        </ul>
      </div>
      <hr />
      <p class="navigation-title">Mes activités</p>

      <div class="activity-navigation-container">
        <ul class="navigation">
          <li>
            <div class="tiny-avatar-container">
              <img
                class="avatar"
                src="https://images.unsplash.com/photo-1750024774702-1fd1a377fdfb?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <p>Personnelles</p>
          </li>
          <li>
            <div class="tiny-avatar-container">
              <img
                class="avatar"
                src="https://images.unsplash.com/photo-1750024774702-1fd1a377fdfb?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <p>Professionnelles</p>
          </li>
        </ul>
      </div>

      <div class="nav-footer">
        <ul class="navigation">
          <li>
            <iconify-icon
              icon="tabler:plus"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <p>Document</p>
          </li>

          <li>
            <iconify-icon
              icon="line-md:question"
              width="24"
              height="24"
              style="color:rgb(255, 255, 255)"
            ></iconify-icon>
            <p>Aujourd'hui</p>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavBarComponent {
  //1: creer une proprieté qui isVisible:boolean=false;
  //2: @if la propriété est true on affiche le dropdown
  //3: methode (click) qui return $isVisible= true ou false au click

  isVisible: boolean = false;
  dropdownIcon: string = 'fe:arrow-down';
  displayMenu(): boolean {
    this.isVisible === false
      ? (this.isVisible = true)
      : (this.isVisible = false);

    this.isVisible === false
      ? (this.dropdownIcon = 'fe:arrow-down')
      : (this.dropdownIcon = 'fe:arrow-up');
    console.log(this.isVisible);
    return this.isVisible;
  }
}
