import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrl: './postes.component.css'
})
export class PostesComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    console.log("test");
    
    this.modalRef = this.modalService.show(template);
  }
}
