import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
