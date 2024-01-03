import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NiveauExperiences } from '../../../core/models/niveau-experiences';
import { ApiResponse } from '../../../core/payloads/api-response';
import { NiveauExperienceApiService } from '../../../core/services/apis/niveauexperience-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../core/services/utils/toast.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-niveau-experience',
  templateUrl: './niveau-experience.component.html',
  styleUrl: './niveau-experience.component.css'
})
export class NiveauExperiencesComponent  implements OnInit{
  modalRef?: BsModalRef;
  niveauExperienceForm: NiveauExperiences;
  niveauExperienceList: NiveauExperiences[] = [];
  apiResponse? : ApiResponse
  page_size:boolean=false
  page_array : number[] = [];

  elementsTitle = {
    validationButton: {
      save:"Valider",
      delete:"oui",
      processing:"Traitement en cours...",
    },
    modalHeader: {
      save: "Ajout d'un niveau d'experience",
      update: "Modification d'un niveau d'experience",
      delete: "Suppression d'un niveau d'experience",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;


  constructor(
    private modalService: BsModalService,
    private _niveauExperienceService:NiveauExperienceApiService,
    private _router: Router,
    private _toastService: ToastService,
  ) {

    this.niveauExperienceForm=new NiveauExperiences();
  }

  ngOnInit(): void {
    this.getAllNiveauExperience();

  }
 
  // openModal(template: TemplateRef<void>) {
  //   console.log("test");
    
  //   this.modalRef = this.modalService.show(template);

  getAllNiveauExperience() {
    this.niveauExperienceList = []
    this._niveauExperienceService.getAll().subscribe({
      next: (Response: any) => {
        this.apiResponse = Response as ApiResponse
        this.page_size = this.apiResponse.total_pages < 5;
        this.page_array = new Array(this.apiResponse.total_pages)
        console.log(this.page_array)
        this.niveauExperienceList = this.apiResponse.data;
      },
      error: Error => {
        console.log(Error);
        
      }
    
    })
  }
  save(addNiveauExperienceForm: NgForm){
    console.log(addNiveauExperienceForm)
    if(addNiveauExperienceForm.valid){
      console.log("Data send: "+ JSON.stringify(this.niveauExperienceForm));

      this.changeFormElement();

      let apiSend: Observable<Object> = this.niveauExperienceForm.id == 0 ? this._niveauExperienceService.save(this.niveauExperienceForm) : this._niveauExperienceService.update(this.niveauExperienceForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: "+ Response.toString());

           this._toastService.success("Niveau D'experience enrégistré avec succes" , "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllNiveauExperience();
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

    this._niveauExperienceService.delete(this.niveauExperienceForm.id).subscribe({
      next: Response => {
        console.log("Data receive: " + Response.toString());

        this._toastService.success("Niveau D'experience supprimé avec succes" , "Suppression éffectuee").onHidden.subscribe(() => {
          this.getAllNiveauExperience();
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
      this.niveauExperienceForm = new NiveauExperiences();
      this.modalService.hide();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(template: TemplateRef<void>, niveauexperienceToUpdate?: NiveauExperiences, isDelete: boolean = false){
    console.log(niveauexperienceToUpdate);
    if (niveauexperienceToUpdate != undefined && !isDelete) {
      this.niveauExperienceForm = niveauexperienceToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else if(niveauexperienceToUpdate != undefined && isDelete) {
      this.niveauExperienceForm = niveauexperienceToUpdate;
      this.textButton = this.elementsTitle.validationButton.delete;
      this.txtModalHeader = this.elementsTitle.modalHeader.delete;
    } else {
      this.niveauExperienceForm = new NiveauExperiences();
    }
    
    this.modalRef = this.modalService.show(template);



  }
}
