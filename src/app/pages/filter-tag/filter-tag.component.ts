import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-filter-tag',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <h1 class="main-title">Filtres et étiquettes</h1>

    <div class="accordeon-container">
      <div class="accordeon-filters-container">
        <div class="accordeon-header">
          <iconify-icon
            icon="fe:arrow-down"
            width="24"
            height="24"
            style="color:rgb(0,0,0)"
          ></iconify-icon>
          <p class="title">Filtres</p>
        </div>
        <hr />

        <ul class="accordeon-info">
          <li class="filters-li">
            <iconify-icon
              icon="fluent:triangle-right-12-filled"
              width="15"
              height="15"
              style="color:#32398e"
            ></iconify-icon>
            <p>Mes tâches</p>
          </li>
        </ul>
      </div>

      <div class="accordeon-tag-container">
        <div class="accordeon-header">
          <iconify-icon
            icon="fe:arrow-down"
            width="24"
            height="24"
            style="color:rgb(0,0,0)"
          ></iconify-icon>
          <p class="title">Etiquettes</p>
        </div>
        <hr />

        <ul class="accordeon-info">
          <li>
            <p>Lecture</p>
          </li>
        </ul>
      </div>

      <div class="delayed-postponed-container">
        <div class="card task-status-card-input">
          <p class="title">Retard</p>
          <input
            type="text"
            placeholder="Entrez votre texte"
            class="input-text task-status-input"
          />
        </div>

        <div class="card task-status-card-input">
          <p class="title">Reporter</p>
          <input
            type="text"
            placeholder="Entrez votre texte "
            class="input-text task-status-input"
          />
        </div>
      </div>
    </div>

        <div><app-dropdown-menu></app-dropdown-menu></div>

  `,
  styles: ``,
})
export class FilterTagComponent {}
