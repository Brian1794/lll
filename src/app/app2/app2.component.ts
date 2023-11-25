import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app2.component.html',
  styleUrl: './app2.component.scss'
})
export class App2Component {
  title = 'estas en '

}
