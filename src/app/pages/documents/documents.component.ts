import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UploadDropdownComponent } from '../../components/upload-dropdown/upload-dropdown.component';

@Component({
  selector: 'app-documents',
  imports: [UploadDropdownComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
    <div class="action-menu">
      <p>Télécharger</p>
      <p>Modifier</p>
      <p>Importer</p>
      <p>Exporter</p>
      <p>Supprimer</p>
    </div>

    <div class="card upload-card">
      <div class="upload-title-container">
        <div class="upload-title-icones">
          <iconify-icon
            icon="garden:file-pdf-26"
            width="24"
            height="24"
            style="color:#6A1BDA"
          ></iconify-icon>
          <iconify-icon
            icon="fluent:arrow-sync-12-filled"
            width="24"
            height="24"
            style="color:#6A1BDA"
          ></iconify-icon>
          <iconify-icon
            icon="fluent:document-pdf-16-filled"
            width="24"
            height="24"
            style="color:#6A1BDA"
          ></iconify-icon>
        </div>
        <p class="title">Convert PDF</p>
      </div>

      <button class="btn-large upload-btn" (click)="displayMenu()">
        Sélectionner un fichier
        <iconify-icon
          icon={{dropdownIcon}}
          width="24"
          height="24"
          style="color:rgb(255, 255, 255)"
        ></iconify-icon>
      </button>
      <div class="dropdown-empty empty-upload">
        @if(isVisible===true){
        <app-upload-dropdown class="dropdown-container" ></app-upload-dropdown>
        }
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>Dernier documents ouverts</th>
          <th>Date</th>
          <th>Poids</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="task-status">Jeremy Legendre facture n°0001</td>
          <td>01/01/2025</td>
          <td>7MB</td>
          <td class="trash">
            <iconify-icon
              icon="mdi:garbage-can-circle-outline"
              width="24"
              height="24"
              style="color:rgb(0, 0, 0)"
            ></iconify-icon>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: ``,
})
export class DocumentsComponent {
  isVisible: boolean = false;
  dropdownIcon: string = 'fe:arrow-right';
  displayMenu(): boolean {
    this.isVisible === false
      ? (this.isVisible = true)
      : (this.isVisible = false);

    this.isVisible === false
      ? (this.dropdownIcon = 'fe:arrow-right')
      : (this.dropdownIcon = 'fe:arrow-down');
    console.log(this.isVisible);
    return this.isVisible;
  }
}
