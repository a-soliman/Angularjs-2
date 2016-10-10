import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>Inline Template</h1>
  	<fa-other></fa-other>
  	<fa-another>
		<div>
			<h1>Hello!</h1>
			<p>World!</p>
		</div>
  	</fa-another>
  	<fa-another>
		<p>Something else</p>
  	</fa-another>
  	`,
  styles: [`
	h1 {
		color: red;
	}
  `]
})
export class AppComponent {
  title = 'This is my App!';
}
