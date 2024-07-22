import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import { ModalAuthComponent } from '../../components/modal-auth/modal-auth.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoadingSpinnerComponent, ModalAuthComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements OnInit {
  passwordVisible: boolean = false;
  smallLogoVisible: boolean = false;
  logoSrc: string = 'assets/remitly-logo.svg';
  loading: boolean = false;
  showModal: boolean = false; // Estado para manejar la ventana modal


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateLogo();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateLogo();
    }
  }

  private updateLogo(): void {
    const width = window.innerWidth;
    this.logoSrc = width <= 800 ? 'assets/remitly-small-logo.svg' : 'assets/remitly-logo.svg';
    this.smallLogoVisible = width <= 800;
  }

  togglePasswordVisibility(event: Event): void {
    event.preventDefault();
    this.passwordVisible = !this.passwordVisible;
  }

  handleLogin(event: Event): void {
    event.preventDefault();

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.showModal = true; // Mostrar el modal después de la carga
    }, 2000); //tiempo de carga
  }
}

