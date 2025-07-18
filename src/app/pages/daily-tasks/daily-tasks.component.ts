import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-tasks',
  imports: [],
  template: `
<h1 class="main-title">
      Tâches d'Aujourd'hui
    </h1>
    <hr>

    <p class="title">19 Mai 2025</p>

    <div class="task-container">
      <div class="card">
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
      </div>
      <div class="card">
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
      </div>
      <div class="card">
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
      </div>
      <div class="card">
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
        <p>Payer ma stagiaire préférée</p>
      </div>

    </div>

    <div class="delayed-postponed-container">
      <div class="card task-status-card">
        <p class="title">Retard</p>
      </div>

      <div class="card task-status-card">
        <p class="title">Reporter</p>

      </div>
    </div>
  
  `,
  styles: ``
})
export class DailyTasksComponent {

}
