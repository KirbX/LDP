import { Component, OnInit } from '@angular/core';
import { TaskItem, TaskService } from '../Task'
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { DBService } from '../DB';

@Component({
  selector: 'View',
  templateUrl: './view.component.html',
})
export class ViewComponent implements OnInit {
  tasks: ObservableArray<TaskItem>;
  constructor(private ts: TaskService) { 
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.ts.refreshView();
    this.tasks = this.ts.getTasks();
  }
  
  onRemove(task: TaskItem){
    this.ts.removeOneTask(task);
    this.refresh();
  }
}
