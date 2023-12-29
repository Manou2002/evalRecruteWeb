import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-types-contrats',
  templateUrl: './types-contrats.component.html',
  styleUrl: './types-contrats.component.css'
})
export class TypesContratsComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    console.log("test");
    
    this.modalRef = this.modalService.show(template);
  }
}
