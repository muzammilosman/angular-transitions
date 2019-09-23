import { Component, OnInit, NgModule } from '@angular/core';
import { state,trigger,transition,style, animate } from '@angular/animations'
import { NgbModalConfig, NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slideIn', [
      state('out', style({
        display: "none"
      })),
      state("in", style({
        display: "block"
      })),
      transition('out => in', [
        animate('2s')
      ]),
      transition('in => out',[
        animate('2s')
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {
  private closeResult: any
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
     
    }, (reason) => {
      console.log(reason)
    });
  }

}
