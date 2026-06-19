import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details-espece',
  imports: [RouterLink],
  templateUrl: './details-espece.html',
  styleUrl: './details-espece.scss',
})
export class DetailsEspece {
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
