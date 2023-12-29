import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent {
  items = ['First', 'Second', 'Third'];
  customClass: string = "customClass";
  constructor(private router : Router){
  
    }
  
  openDetOffre(){
    this.router.navigate(["/client-page/details-offres"])

  }


}
