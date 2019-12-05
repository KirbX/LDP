import { Component, OnInit } from '@angular/core';
import { TaskItem, TaskService } from '../Task'
import { DBService } from '../DB'
@Component({
  selector: 'Random',
  templateUrl: './random.component.html',
})
export class RandomComponent implements OnInit {

  _actualProjekt = " ";

  constructor(private ts: TaskService) {
    
   }

  ngOnInit() {
  }

  getOneRandom(){
    this._actualProjekt = this.ts.getOneRandom();
  }
}
