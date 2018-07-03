import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // quick and dirty fix to the issue you can read about here:
  // https://github.com/angular/material2/issues/11677
  fixOverflow = () => {

    const style = document.createElement('style');

    style.type = 'text/css';
    style.id = 'panel-fix';
    style.appendChild(document.createTextNode(`
      .mat-menu-panel {
        overflow: initial !important;
      }`));

    document.getElementsByTagName('head')[0].appendChild(style);

    setTimeout(() => {
      const fix = document.getElementById('panel-fix');
      fix.remove();
    },
    500);
  }
}
