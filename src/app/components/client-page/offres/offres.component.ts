import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent {
  items = ["Secteurs d'activité", "Niveaux d'étude", "Niveaux d'expérience"];
  customClass: string = "customClass";
  constructor(private router: Router) {

  }

  openDetOffre() {
    this.router.navigate(["/client-page/details-offres"])

  }


}
