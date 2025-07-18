import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-upload-dropdown',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
      <ul class="dropdown-menu">
        <li>Récent</li>
        <li>De l'ordinateur (local)</li>
        <li>A partir d'un document</li>
        <li>A partir d'un autre stockage</li>
      </ul>
    
  `,
  styles: ``,
})
export class UploadDropdownComponent {
 
}
