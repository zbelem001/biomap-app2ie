import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-a-propos',
  imports: [RouterLink],
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.scss',
})
export class APropos {
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
