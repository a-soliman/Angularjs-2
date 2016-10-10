import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>Inline Template</h1>
  	<fa-other></fa-other>`,
  styles: [`
	h1 {
		color: red;
	}
  `]
})
export class AppComponent {
  title = 'This is my App!';
}
