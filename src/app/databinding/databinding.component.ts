import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
	stringInterpolation = 'this is a sting interpolation';
	numberInterpolation = 2;

	onClicked(value: string) {
		alert(value)
	}
}
