import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-auth.component.html',
  styleUrl: './modal-auth.component.css'
})
export class ModalAuthComponent {
  @Input() isVisible: boolean = false;

  constructor(private router: Router) {}

  close(): void {
    this.isVisible = false;
    window.location.reload();
  }
}
