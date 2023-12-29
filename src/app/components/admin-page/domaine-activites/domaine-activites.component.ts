import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DomaineActivite } from '../../../core/models/domaineActivites';
import { DomaineActiviteApiService } from '../../../core/services/apis/domaineActivites-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../core/payloads/api-response';
import { ToastService } from '../../../core/services/utils/toast.service';

@Component({
  selector: 'app-domaine-activites',
  templateUrl: './domaine-activites.component.html',
  styleUrl: './domaine-activites.component.css'
})
export class DomaineActivitesComponent implements OnInit {
  modalRef?: BsModalRef;
  domaineActiviteForm: DomaineActivite;
  domainActiviteList: DomaineActivite[] = [];
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
      save: "Ajout d'un domaine d'activité",
      update: "Modification d'un domaine d'activité",
      delete: "Suppression d'un domaine d'activité",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;


  constructor(
    private modalService: BsModalService,
    private _domaineActiviteService:DomaineActiviteApiService,
    private _router: Router,
    private _toastService: ToastService,
    ) {
    this.domaineActiviteForm=new DomaineActivite();
  }
  ngOnInit(): void {
    this.getAllDomaineActivite();

  }

 
  // openModal(template: TemplateRef<void>) {
  //   console.log("test");
    
  //   this.modalRef = this.modalService.show(template);
  // }

  getAllDomaineActivite() {
    this._domaineActiviteService.getAll().subscribe({
      next: (Response: any) => {
        this.apiResponse = Response as ApiResponse
        this.page_size = this.apiResponse.total_pages < 5;
        this.page_array = new Array(this.apiResponse.total_pages)
        console.log(this.page_array)
        this.domainActiviteList =this.apiResponse.data;
      },
      error: Error => {
        console.log(Error);
        
      }
    })
  }

  save(addDomainActiviteForm: NgForm){
    console.log(addDomainActiviteForm)
    if(addDomainActiviteForm.valid){
      console.log("Data send: "+ JSON.stringify(this.domaineActiviteForm));

      this.changeFormElement();

      let apiSend: Observable<Object> = this.domaineActiviteForm.id == 0 ? this._domaineActiviteService.save(this.domaineActiviteForm) : this._domaineActiviteService.update(this.domaineActiviteForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: "+ Response.toString());

           this._toastService.success("Domaine d'activité enrégistré avec succes" , "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllDomaineActivite();
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

    this._domaineActiviteService.delete(this.domaineActiviteForm.id).subscribe({
      next: Response => {
        console.log("Data receive: " + Response.toString());

        this._toastService.success("Domaine d'activité supprimé avec succes" , "Suppression éffectuee").onHidden.subscribe(() => {
          this.getAllDomaineActivite();
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
  }

  changeFormElement() {
    this.loadingBtn = true;
    this.textButton = this.elementsTitle.validationButton.processing
  }
  initFormElement(isReinitData : boolean = false) {
    this.textButton = this.elementsTitle.validationButton.save
    this.loadingBtn = false;

    if(isReinitData) {
      this.domaineActiviteForm = new DomaineActivite();
      this.modalService.hide();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(template: TemplateRef<void>, domainActiviteToUpdate?: DomaineActivite, isDelete: boolean = false){
    console.log(domainActiviteToUpdate);
    if (domainActiviteToUpdate != undefined && !isDelete) {
      this.domaineActiviteForm = domainActiviteToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else if(domainActiviteToUpdate != undefined && isDelete) {
      this.domaineActiviteForm = domainActiviteToUpdate;
      this.textButton = this.elementsTitle.validationButton.delete;
      this.txtModalHeader = this.elementsTitle.modalHeader.delete;
    } else {
      this.domaineActiviteForm = new DomaineActivite();
    }
    
    this.modalRef = this.modalService.show(template);



  }
}
