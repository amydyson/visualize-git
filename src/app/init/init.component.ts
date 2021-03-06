import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-init',
  templateUrl: './init.component.html',
  styleUrls: ['../app.component.css']
})
export class InitComponent implements OnInit {
  hideMessage: boolean;
  public showReset: boolean;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
  }

  visualizeInit(){
    this.hideMessage = false;
    this.showReset = true;
  }
  public reset(){
    window.location.reload();
  }

}
