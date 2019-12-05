import { Component, OnInit } from '@angular/core';
import { TaskItem, TaskService } from '../Task'
@Component({
  selector: 'Add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  _name = "";
  _priority = "";
  constructor(private ts : TaskService) { }

  ngOnInit() {
  }

  save(){
      var task = new TaskItem( this.ts.getNum(), this._name, +this._priority, true);
      this.ts.num++;
      this.ts.addOne(task);

      this._name = '';
      this._priority = "";
  }

  cancel(){
    this._name = '';
    this._priority = "";
  }

}
