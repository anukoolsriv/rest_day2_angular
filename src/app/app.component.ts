import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center" class="content">
    <pnr-component></pnr-component>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pnr-app';
}
