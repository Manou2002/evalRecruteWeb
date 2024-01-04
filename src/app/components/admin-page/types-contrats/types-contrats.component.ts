import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TypesContrats } from '../../../core/models/types-contrats';
import { ApiResponse } from '../../../core/payloads/api-response';
import { TypeContratsApiService } from '../../../core/services/apis/type-contrats-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../core/services/utils/toast.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-types-contrats',
  templateUrl: './types-contrats.component.html',
  styleUrl: './types-contrats.component.css'
})
export class TypesContratsComponent {
  modalRef?: BsModalRef;
  typeContratForm: TypesContrats = new TypesContrats;
  typeContratList: TypesContrats[] = [];
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
      save: "Ajout d'un type de contrat",
      update: "Modification d'un type de contra",
      delete: "Suppression d'un type de contra",
    }
  };

  loadingBtn: boolean = false;
  textButton: string = this.elementsTitle.validationButton.save;
  txtModalHeader = this.elementsTitle.modalHeader.save;




  constructor(
    private modalService: BsModalService,
    private _typeContratService:TypeContratsApiService,
    private _router: Router,
    private _toastService: ToastService,
    ) {
    this.typeContratForm=new TypesContrats();
  }
  ngOnInit(): void {
    this.getAllTypeContrat();

  }

  // openModal(template: TemplateRef<void>) {
  //   console.log("test");

  //   this.modalRef = this.modalService.show(template);
  // }

  getAllTypeContrat() {
    this.typeContratList = []
    this._typeContratService.getAll().subscribe({
      next: (Response: any) => {
        this.apiResponse = Response as ApiResponse
        this.page_size = this.apiResponse.total_pages < 5;
        this.page_array = new Array(this.apiResponse.total_pages)
        console.log(this.page_array)
        this.typeContratList =this.apiResponse.data;
      },
      error: Error => {
        console.log(Error);
        
      }
    })
  }

  save(addTypeContratForm: NgForm){
    console.log(addTypeContratForm)
    if(addTypeContratForm.valid){
      console.log("Data send: "+ JSON.stringify(this.typeContratForm));

      this.changeFormElement();

      let apiSend: Observable<Object> = this.typeContratForm.id == 0 ? this._typeContratService.save(this.typeContratForm) : this._typeContratService.update(this.typeContratForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: "+ Response.toString());

           this._toastService.success("Type de contreat enrégistré avec succes" , "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllTypeContrat();
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

    this._typeContratService.delete(this.typeContratForm.id).subscribe({
      next: Response => {
        console.log("Data receive: " + Response.toString());

        this._toastService.success("Type de contrat supprimé avec succes" , "Suppression éffectuee").onHidden.subscribe(() => {
          this.getAllTypeContrat();
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
      this.typeContratForm = new TypesContrats();
      this.modalService.hide();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(template: TemplateRef<void>, typeContratToUpdate?: TypesContrats, isDelete: boolean = false){
    console.log(typeContratToUpdate);
    if (typeContratToUpdate != undefined && !isDelete) {
      this.typeContratForm = typeContratToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else if(typeContratToUpdate != undefined && isDelete) {
      this.typeContratForm = typeContratToUpdate;
      this.textButton = this.elementsTitle.validationButton.delete;
      this.txtModalHeader = this.elementsTitle.modalHeader.delete;
    } else {
      this.typeContratForm = new TypesContrats();
    }
    
    this.modalRef = this.modalService.show(template);



  }
}
