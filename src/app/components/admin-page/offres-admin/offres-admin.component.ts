import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomaineActivite } from '../../../core/models/domaineActivites';
import { NiveauExperiences } from '../../../core/models/niveau-experiences';
import { NiveauEtudes } from '../../../core/models/niveau-etudes';
import { TypesContrats } from '../../../core/models/types-contrats';
import { DomaineActiviteApiService } from '../../../core/services/apis/domaineActivites-api.service';
import { NiveauExperienceApiService } from '../../../core/services/apis/niveauexperience-api.service';
import { NiveauEtudesApiService } from '../../../core/services/apis/niveauEtudes-api.service';
import { TypeContratsApiService } from '../../../core/services/apis/type-contrats-api.service';
import { ApiResponse } from '../../../core/payloads/api-response';
import { Router } from '@angular/router';
import { ToastService } from '../../../core/services/utils/toast.service';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { Offre } from '../../../core/models/offres';
import { OffreApiService } from '../../../core/services/apis/offres-api.service';

@Component({
  selector: 'app-offres-admin',
  templateUrl: './offres-admin.component.html',
  styleUrl: './offres-admin.component.css'
})
export class OffresAdminComponent implements OnInit {

  modalRef?: BsModalRef;
  OffreForm!: Offre;
  OffreList: Offre[] = [];
  page_size:boolean=false
  page_array : number[] = [];

  domainActiviteList: DomaineActivite[] = [];
  niveauExperienceList: NiveauExperiences[] = [];
  niveauEtudeList: NiveauEtudes[] = [];
  typeContratList: TypesContrats[] = [];

  elementsTitle = {
    validationButton: {
      save:"Valider",
      delete:"oui",
      processing:"Traitement en cours...",
    },

    modalHeader: {
      save: "Ajout d'un Offre",
      update: "Modification d'un Offre",
      delete: "Suppression d'un Offre",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;

  apiResponse? : ApiResponse 


  constructor(
    private modalService: BsModalService,
    private _OffreService:OffreApiService,
    private _router: Router,
    private _toastService: ToastService,

    private _domaineActiviteService:DomaineActiviteApiService,
    private _niveauExperienceService:NiveauExperienceApiService,
    private _niveauEtudeService:NiveauEtudesApiService,
    private _typeContratService:TypeContratsApiService,

    ) {
      this.OffreForm=new Offre();

    }

  ngOnInit(): void {
    this.getAllOffre();

    this.getAllDomaineActivite()  
    this.getAllNiveauExperience()
    this.getAllNiveauEtude()
    this.getAllTypeContrat()
  }

    getAllDomaineActivite() {
      this.domainActiviteList = []
      this._domaineActiviteService.getAll().subscribe({
        next: (Response: any) => {
          this.apiResponse = Response as ApiResponse
          this.domainActiviteList =this.apiResponse.data;

          console.log(this.domainActiviteList)
        },
        error: Error => {
          console.log(Error);
          
        }
      })
    }

    getAllNiveauExperience() {
      this.niveauExperienceList = []
      this._niveauExperienceService.getAll().subscribe({
        next: (Response: any) => {
          this.apiResponse = Response as ApiResponse
          this.niveauExperienceList = this.apiResponse.data;
        },
        error: Error => {
          console.log(Error);
          
        }
      
      })
    }

    getAllNiveauEtude() {
      this.niveauEtudeList = []
      this._niveauEtudeService.getAll().subscribe({
        next: (Response: any) => {
          this.apiResponse = Response as ApiResponse
          this.niveauEtudeList = this.apiResponse.data;
        },
        error: Error => {
          console.log(Error);
          
        }
      
      })
    }

    getAllTypeContrat() {
      this.typeContratList = []
      this._typeContratService.getAll().subscribe({
        next: (Response: any) => {
          this.apiResponse = Response as ApiResponse
          this.typeContratList =this.apiResponse.data;
        },
        error: Error => {
          console.log(Error);
          
        }
      })
    }
 
  // openModal(template: TemplateRef<void>) {
  //   console.log("test");
    
  //   this.modalRef = this.modalService.show(template);
  // }

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
  save(addOffreForm: NgForm){
    console.log(addOffreForm)
    if(addOffreForm.valid){
      console.log("Data send: "+ JSON.stringify(this.OffreForm));

      this.changeFormElement();

      let apiSend: Observable<Object> = this.OffreForm.id == 0 ? this._OffreService.save(this.OffreForm) : this._OffreService.update(this.OffreForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: "+ Response.toString());

           this._toastService.success("Offre enrégistré avec succes" , "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllOffre();
            this.initFormElement(true);
           })
           
        },
        error: error => {
          console.error("there is an error !", error);
          this._toastService.error("Une erreur est survenue" , "Enrégistrement échoue").onHidden.subscribe(() => {
            this.initFormElement();
          });
        }
      });
    }
  }

  delete(){

    this.changeFormElement();

    this._OffreService.delete(this.OffreForm.id).subscribe({
      next: Response => {
        console.log("Data receive: " + Response.toString());

        this._toastService.success("Offre supprimé avec succes" , "Suppression éffectuee").onHidden.subscribe(() => {
          this.getAllOffre();
          this.initFormElement(true);
        })
      },
      error: error => {
        console.error("There is an error !" , error);
        this._toastService.error("Une erreur est survenue" , "Suppresssion échouée").onHidden.subscribe(() => {
          this.initFormElement();
        });
        
      }
    });
  } changeFormElement() {
    this.loadingBtn = true;
    this.textButton = this.elementsTitle.validationButton.processing
  }
  initFormElement(isReinitData : boolean = false) {
    this.textButton = this.elementsTitle.validationButton.save
    this.loadingBtn = false;

    if(isReinitData) {
      this.OffreForm = new Offre();
      this.modalService.hide();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(template: TemplateRef<void>, OffreToUpdate?: Offre, isDelete: boolean = false){
    console.log(OffreToUpdate);
    if (OffreToUpdate != undefined && !isDelete) {
      this.OffreForm = OffreToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else if(OffreToUpdate != undefined && isDelete) {
      this.OffreForm = OffreToUpdate;
      this.textButton = this.elementsTitle.validationButton.delete;
      this.txtModalHeader = this.elementsTitle.modalHeader.delete;
    } else {
      this.OffreForm = new Offre();
    }
    
    this.modalRef = this.modalService.show(template);
  }

  controlSelection(selectInput: NgModel): boolean {
    return selectInput.control.value == 0;
    
  }
}
