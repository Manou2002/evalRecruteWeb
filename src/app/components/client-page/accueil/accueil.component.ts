import { Component, OnInit } from '@angular/core';
import { OffreApiService } from '../../../core/services/apis/offres-api.service';
import { Offre } from '../../../core/models/offres';
import { ApiResponse } from '../../../core/payloads/api-response';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {

  OffreList: Offre[] = [];
  apiResponse? : ApiResponse 
  page_size:boolean=false
  page_array : number[] = [];





constructor(
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

}
