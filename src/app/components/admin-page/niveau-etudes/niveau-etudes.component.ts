import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-niveau-etudes',
  templateUrl: './niveau-etudes.component.html',
  styleUrl: './niveau-etudes.component.css'
})
export class NiveauEtudesComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    console.log("test");
    
    this.modalRef = this.modalService.show(template);
  }
}
