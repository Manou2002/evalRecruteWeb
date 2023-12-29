import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    console.log("test");
    
    this.modalRef = this.modalService.show(template);
  }
}
