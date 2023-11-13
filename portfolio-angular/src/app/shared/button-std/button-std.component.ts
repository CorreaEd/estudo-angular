import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-std',
  templateUrl: './button-std.component.html',
  styleUrls: ['./button-std.component.scss']
})
export class ButtonStdComponent {
  @Input() text: string= '';
}
