import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-agenda',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <div class="action-menu">
      <p>Enregistrer</p>
      <p>Télécharger</p>
      <p>Modifier</p>
      <p>Importer</p>
      <p>Supprimer</p>
    </div>

    <div class="task-header">
      <p class="title">Mes tâches</p>
      <button class="btn-small see-more-btn">Voir tout</button>
    </div>

    <ul class="todolist">
      <li>
        <div class="todo-info-container">
          <div>
            <iconify-icon
              icon="ph:minus-fill"
              width="24"
              height="24"
              style="color:#32398e"
            ></iconify-icon>
            <p class="title">A faire</p>
          </div>
          <div class="small-avatar-container">
            <img
              class="avatar"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>

        <div class="todo-info-container">
          <div>
            <iconify-icon
              icon="fontisto:date"
              width="24"
              height="24"
              style="color:rgb(0, 0, 0)"
            ></iconify-icon>
            <p>Description</p>
          </div>
          <p>Nom du projet</p>
        </div>

        <hr />
      </li>
    </ul>
  `,
  styles: ``,
})
export class AgendaComponent {}
