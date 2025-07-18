import { Routes } from '@angular/router';
import { DailyTasksComponent } from './pages/daily-tasks/daily-tasks.component';
import { AgendaComponent } from './pages/Agenda/agenda.component';
import { FinishedTasksComponent } from './pages/finished-tasks/finished-tasks.component';
import { FilterTagComponent } from './pages/filter-tag/filter-tag.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { UserContainerComponent } from './pages/User/user-list/user-container.component';

export const routes: Routes = [
  {
    path: 'daily-tasks',
    component: DailyTasksComponent,
    title: "Mes Tâches d'aujourd'hui",
  },
  {
    path: 'agenda',
    component: AgendaComponent,
    title: 'Mes tâches',
  },
  {
    path: 'filters-tag',
    component: FilterTagComponent,
    title: 'Filtres et étiquettes',
  },
  {
    path: 'finished',
    component: FinishedTasksComponent,
    title: 'Terminées Récement',
  },
  {
    path: 'document',
    component: DocumentsComponent,
    title: 'Documents',
  },

  {
    path: 'users',
    component: UserContainerComponent,
    title: 'users',
  },
];
