import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  template: `
 <header>

  <div class="input-text">
      <input type="text" placeholder="Rechercher..." />
      <iconify-icon icon="tabler:zoom" width="24" height="24" style="color:rgb(0, 0, 0)"></iconify-icon>
    </div>

    <div class="burger-menu">
      <div class="burger-menu-dot"></div>
      <div class="burger-menu-dot"></div>
      <div class="burger-menu-dot"></div>
    </div>
  </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
