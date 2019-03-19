import { Component } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBaby } from '@fortawesome/free-solid-svg-icons';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';










@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'MarcOS2';
  faUser = faUser;
  faBaby = faBaby;
  faMale = faMale;
  faEnvelope = faEnvelope;
  faMaleta = faBriefcase;
  faCoracao = faHeart;
  faMapa = faMapMarked;
  faPhone = faPhone;
  faCode = faCodeBranch;

  modalRef: BsModalRef;
  items: any[];
  materias: [
    {periodo: 1, nome:"Algoritmos e Programação I", status: "Aprovado"}
  ];
  
  constructor(private modalService: BsModalService) {
    this.items = Array(15).fill(0);
    
  }
  
 
  openModal(template: "./materias.html") {
    this.modalRef = this.modalService.show(template);
  }
}
