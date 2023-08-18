import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/index', icon: 'archive' },
    { title: 'Exposant', url: '/exposant', icon: 'paper-plane' },
    { title: 'Livre', url: '/livre', icon: 'heart' },
    { title: 'Map', url: '/map', icon: 'archive' },
  ];
  constructor() {}
}
