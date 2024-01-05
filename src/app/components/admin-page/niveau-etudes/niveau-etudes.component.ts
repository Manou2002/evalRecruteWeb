import { Component, TemplateRef } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ApiResponse } from '../../../core/payloads/api-response';
import { NiveauEtudes } from '../../../core/models/niveau-etudes';
import { NiveauEtudesApiService } from '../../../core/services/apis/niveauEtudes-api.service';
import { Router } from '@angular/router';
import { ToastService } from '../../../core/services/utils/toast.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-niveau-etudes',
  templateUrl: './niveau-etudes.component.html',
  styleUrl: './niveau-etudes.component.css'
})
export class NiveauEtudesComponent {
  // modalRef?: BsModalRef;
  niveauEtudeForm: NiveauEtudes;
  niveauEtudeList: NiveauEtudes[] = [];
  apiResponse? : ApiResponse
  page_size:boolean=false
  page_array : number[] = [];

  closeResult = '';

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
    private _modalService: NgbModal,
    private _niveauEtudeService:NiveauEtudesApiService,
    private _router: Router,
    private _toastService: ToastService,
    
    ) {
      this.niveauEtudeForm=new NiveauEtudes();

    }
    ngOnInit(): void {
      this.getAllNiveauEtude();
  
    }
 
  // openModal(template: TemplateRef<void>) {
  //   console.log("test");
    
  //   this.modalRef = this.modalService.show(template);
  // }

  getAllNiveauEtude() {
    this.niveauEtudeList = []
    this._niveauEtudeService.getAll().subscribe({
      next: (Response: any) => {
        this.apiResponse = Response as ApiResponse
        this.page_size = this.apiResponse.total_pages < 5;
        this.page_array = new Array(this.apiResponse.total_pages)
        console.log(this.page_array)
        this.niveauEtudeList = this.apiResponse.data;
      },
      error: Error => {
        console.log(Error);
        
      }
    
    })
  }
  save(addNiveauEtudeForm: NgForm){
    console.log(addNiveauEtudeForm)
    if(addNiveauEtudeForm.valid){
      console.log("Data send: "+ JSON.stringify(this.niveauEtudeForm));

      this.changeFormElement();

      let apiSend: Observable<Object> = this.niveauEtudeForm.id == 0 ? this._niveauEtudeService.save(this.niveauEtudeForm) : this._niveauEtudeService.update(this.niveauEtudeForm);

      apiSend.subscribe({
        next: response => {
          console.log("Data receive: "+ Response.toString());

           this._toastService.success("Niveau D'etude enrégistré avec succes" , "Enregistrement éffectué").onHidden.subscribe(() => {
            this.getAllNiveauEtude();
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

    this._niveauEtudeService.delete(this.niveauEtudeForm.id).subscribe({
      next: Response => {
        console.log("Data receive: " + Response.toString());

        this._toastService.success("Niveau D'etude supprimé avec succes" , "Suppression éffectuee").onHidden.subscribe(() => {
          this.getAllNiveauEtude();
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
      this.niveauEtudeForm = new NiveauEtudes();
      this._modalService.dismissAll();
      this.txtModalHeader = this.elementsTitle.modalHeader.save;
    }
  }

  open(template: TemplateRef<void>, niveauetudeToUpdate?: NiveauEtudes, isDelete: boolean = false){
    console.log(niveauetudeToUpdate);
    if (niveauetudeToUpdate != undefined && !isDelete) {
      this.niveauEtudeForm = niveauetudeToUpdate;
      this.txtModalHeader = this.elementsTitle.modalHeader.update;
    } else if(niveauetudeToUpdate != undefined && isDelete) {
      this.niveauEtudeForm = niveauetudeToUpdate;
      this.textButton = this.elementsTitle.validationButton.delete;
      this.txtModalHeader = this.elementsTitle.modalHeader.delete;
    } else {
      this.niveauEtudeForm = new NiveauEtudes();
    }
    
    this._modalService.open(template, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

