import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  	<h1>Root Component</h1>
  	<app-databinding></app-databinding>
  	<app-lifecycle *ngIf="!delete"></app-lifecycle>
  	<button (click)="delete = true">Click to delete</button>
  	`
})
export class AppComponent {
  title = 'This is my App!';
  delete = false;
}
