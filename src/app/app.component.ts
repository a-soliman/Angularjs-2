import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>Root Component</h1>
  	<app-databinding></app-databinding>
  	<app-lifecycle *ngIf="!delete" [bindable]="boundValue">
		<p>{{test}}</p>
  	</app-lifecycle>
  	<button (click)="delete = true">Click to delete</button>
  	<button (click)="test = 'Ahmed Changed Value'">Click to Change</button>
  	<button (click)="boundValue =2000">Click to Change Binding</button>
  	`
})
export class AppComponent {
  title = 'This is my App!';
  delete = false;
  test = 'starting value';
  boundValue = 1000;
}
