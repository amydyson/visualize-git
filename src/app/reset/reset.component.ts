import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'visualize-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['../app.component.css']
})
export class ResetComponent implements OnInit {
  public hideMessage: boolean;
  public completed: boolean;
  public showReset: boolean;
  
  public commands = [
    {name: 'hard'},
    {name: 'mixed'},
    {name: 'soft'},
    {name: 'no parameter'}
  ];
  public commits = [
    {name: 'HEAD'},
    {name: 'HEAD~1'},
    {name: 'HEAD~2'},
    {name: 'HEAD~3'},
    {name: 'no parameter'}
  ];
  public commands2 = ['hard','mixed','soft','no parameter'];
  public commits2 = ['HEAD', 'HEAD~1', 'HEAD~2','HEAD~3', 'no parameter'];
  public chosenCommand: string;
  public chosenCommit: string;

  constructor() { }

  ngOnInit() {
    this.hideMessage = true;
    this.showReset = false;
    this.chosenCommand = '';
    this.chosenCommit = '';
    this.completed = false;
    const groupH1 = document.getElementsByClassName('toMove');
    for (let i = 0; i < groupH1.length; i++){
      groupH1[i].classList.remove('move-down-one');
      groupH1[i].classList.remove('move-down-two');
      groupH1[i].classList.remove('move-down-three');
    }
  }

  copyHead(){
    if (!this.hideMessage &&
        this.headPointer() === 'head' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  copyHead1(){
    if (!this.hideMessage &&
        this.headPointer() === 'head1' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  copyHead2(){
    if (!this.hideMessage &&
        this.headPointer() === 'head2' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  copyHead3(){
    if (!this.hideMessage &&
        this.headPointer() === 'head3' && 
        (this.overwriteType() === 'mixed' ||
        this.overwriteType() === 'hard' )){
      return true;
    } else {
      return false;
    }
  }

  headPointer(){
    switch(this.chosenCommit) {
      case ('HEAD' || 'no parameter' || ''):
        console.log('head')
        return 'head';
        break;
      case 'HEAD~1':
        console.log('head1')
        return 'head1';
        break;
      case 'HEAD~2':
        return 'head2';
          break;
      case 'HEAD~3':
        return 'head3';
        break;
      default:
        return 'head';
    }
  }

  overwriteType(){
    switch(this.chosenCommand) {
      case ('mixed' || 'no parameter' || ''):
        return 'mixed';
        break;
      case 'soft':
        return 'soft';
        break;
      case 'hard':
        return 'hard';
          break;
      default:
        return 'mixed';
    }
  }

  hardOverwrite(){
    if (!this.hideMessage && this.overwriteType()=== 'hard'){
      return true;
    } else {
      return false;
    }
  }

  visualizeReset(){
    switch(this.chosenCommit) {
      case ('HEAD' || 'no parameter'):
        break;
      case 'HEAD~1':
        const groupH1 = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupH1.length; i++){
          groupH1[i].classList.add('move-down-one');
        }
        break;
      case 'HEAD~2':
        const groupH2 = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupH2.length; i++){
          groupH2[i].classList.add('move-down-two');
        }
          break;
      case 'HEAD~3':
        const groupH3 = document.getElementsByClassName('toMove');
        for (let i = 0; i < groupH3.length; i++){
          groupH3[i].classList.add('move-down-three');
        }
        break;
      default:
    }
    this.hideMessage = false;
    this.completed = true;
    setTimeout(() => {
      this.showReset = true;
    }, 2000)
  }

  selectCommand(command){
    this.chosenCommand = command;
  }
  selectCommit(commit){
    this.chosenCommit = commit;
  }
  public reset(){
    window.location.reload();
  }
}
