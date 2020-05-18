import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directivy';

  isVisible = true;

  onToogle() {
    this.isVisible = !this.isVisible;
  }
}
