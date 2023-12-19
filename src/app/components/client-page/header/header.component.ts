import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  routeModule? : Router
  constructor(private router : Router){
  this.routeModule = this.router

  }
  ngOnInit(): void {
   console.log(this.routeModule?.url?.includes('accueil'))
  }


}
