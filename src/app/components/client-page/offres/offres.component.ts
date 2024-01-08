import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../../../core/models/offres';
import { ApiResponse } from '../../../core/payloads/api-response';
import { OffreApiService } from '../../../core/services/apis/offres-api.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrl: './offres.component.css'
})
export class OffresComponent implements OnInit{
  items = ["Secteurs d'activité", "Niveaux d'étude", "Niveaux d'expérience"];
  customClass: string = "customClass";

  OffreList: Offre[] = [];
  apiResponse? : ApiResponse 
  page_size:boolean=false
  page_array : number[] = [];

  constructor(
    private router: Router,
    private _OffreService:OffreApiService,

    ) {}

    ngOnInit(): void {
      this.getAllOffre ();
    }

    getAllOffre() {
      this.OffreList = []
      this._OffreService.getAll().subscribe({
        next: (Response: any) => {
          this.apiResponse = Response as ApiResponse
          this.page_size = this.apiResponse.total_pages < 5;
          this.page_array = new Array(this.apiResponse.total_pages)
          this.OffreList = this.apiResponse.data;
        },
        error: Error => {
          console.log(Error);
          
        } 
      })
    }

  openDetOffre(id:number) {
    this.router.navigate(["/client-page/details-offres",id ])

  }


}
