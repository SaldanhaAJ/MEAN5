import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';

@Component({
  moduleId: module.id.toString(),
  templateUrl: './home.component.html',
  selector: 'app-home',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private bodyText: string;
  
     constructor(private modalService: ModalService) {
     }
  
     ngOnInit() {
         this.bodyText = 'This text can be updated in modal 1';
     }
  
     openModal(id: string){
         this.modalService.open(id);
         console.log ('opening' + id);  
      }
  
     closeModal(id: string){
         this.modalService.close(id);
         console.log ('closing' + id);  
        }
}
