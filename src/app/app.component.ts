import { Component } from '@angular/core';
import { CompressionStream } from 'node:stream/web';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smsUI';
}
