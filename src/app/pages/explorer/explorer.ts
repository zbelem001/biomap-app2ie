import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explorer',
  imports: [RouterLink],
  templateUrl: './explorer.html',
  styleUrl: './explorer.scss',
})
export class Explorer {
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 50);
  }
}
