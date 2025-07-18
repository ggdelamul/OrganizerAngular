import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-finished-tasks',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <h1 class="main-title">Terminée récemment</h1>
    <hr />

    
    <table>
      <thead>
        <tr>
          <th class="col-icon">
            <iconify-icon
              icon="fe:arrow-down"
              width="24"
              height="24"
              style="color:rgb(0,0,0)"
            ></iconify-icon
            >Nom du projet
          </th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="col-icon">
            <iconify-icon
              icon="el:ok-sign"
              width="20"
              height="20"
              style="color:rgb(0,0,0)"
            ></iconify-icon>
            <p>Mes tâches</p>
          </td>
          <td>Votre texte</td>
          <td>01/01/2025</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: ``,
})
export class FinishedTasksComponent {}
