import { Component, OnInit, NgModule, ElementRef, ViewChild } from '@angular/core';
import { state,trigger,transition,style, animate } from '@angular/animations'
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s 300ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {
  private closeResult: any
  private modalView: boolean
  @ViewChild('content',{static:true}) content: ElementRef;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.modalView = false
    this.modalService.open(this.content).result.then((result) => {
      
      }, (reason) => {
         console.log(reason)
       });
  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
      
    }, (reason) => {
      console.log(reason)
    });
  }

  activateModal(){
    this.modalView = !this.modalView
  }

}
