import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from '../../../core/models/offres';
import { OffreApiService } from '../../../core/services/apis/offres-api.service';
import { ApiResponse } from '../../../core/payloads/api-response';

@Component({
  selector: 'app-details-offres',
  templateUrl: './details-offres.component.html',
  styleUrl: './details-offres.component.css'
})
export class DetailsOffresComponent implements OnInit, OnDestroy  {
  id: number = 0;
  private sub: any;

  Offre?   : Offre;
  apiResponse? : ApiResponse
  page_size:boolean=false
  page_array : number[] = [];

  constructor(
    private route: ActivatedRoute,
    private _OffreService:OffreApiService,
    ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.getByIdOffre ();
        
       // In a real app: dispatch action to load the details here.
    });

  }

  getByIdOffre() {
    this._OffreService.getById(this.id).subscribe({
      next: (Response: any) => {
        this.apiResponse = Response as ApiResponse
        this.page_size = this.apiResponse.total_pages < 5;
        this.page_array = new Array(this.apiResponse.total_pages)
        this.Offre = this.apiResponse.data as Offre;
        console.log(this.Offre);
        
      },
      error: Error => {
        console.log(Error);
        
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
