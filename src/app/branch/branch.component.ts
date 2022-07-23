import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material';
import { fade, fade2, myTrigger, myTrigger2, ani3 } from '../animations';

@Component({
  selector: 'visualize-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['../app.component.css'],
  animations: [ fade, myTrigger, myTrigger2, fade2, ani3 ]
})
export class BranchComponent implements OnInit {
  public hideMessage: boolean;
  public branches: Array<string>;
  public state: string;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.branches = [];
  }

  push(message){
    this.branches.push(message);
  }

  visualizeBranch(){
    setTimeout(() => {
      this.push('main')
    }, 100);
    setTimeout(() => {
      this.push('bug/25282*')
      this.hideMessage = false;
    }, 200);
    setTimeout(() => {
      this.push('pbi/25391')
    }, 300);
    setTimeout(() => {
      this.push('navigation')
    }, 400);
  }

}
