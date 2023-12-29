import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-niveau-experience',
  templateUrl: './niveau-experience.component.html',
  styleUrl: './niveau-experience.component.css'
})
export class NiveauExperienceComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    console.log("test");
    
    this.modalRef = this.modalService.show(template);
  }
}
