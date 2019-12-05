

import { Injectable } from "@angular/core";
import { DBService } from './DB'
import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
export class TaskItem{
    id: number;
    name: string;
    priority: number;
    isActive: boolean;

    constructor(_id: number, _name: string, _priority: number, _isActive: boolean){
        this.id = _id;
        this.name = _name;
        this.priority = _priority;
        this.isActive = _isActive;
    }
}


@Injectable({
    providedIn: "root"
})
export class TaskService {

    num: number = 0;
    constructor(private db : DBService){
        this.num = db.getNum();
    }

    // private items = new Array<TaskItem>(

    // );
    private items = new ObservableArray<TaskItem>([]);
    
    getNum() : number{
        return this.num;
    }

    addOne(task: TaskItem){
        this.db.add(task);
        this.db.setNum(this.num);
        this.refreshView()
    }

    loadAll(){
        return this.db.getAll(this.num);
    }
    removeAll(){
        this.items.splice(0);
    }
    refreshView(){
        // this.items = [];
        this.removeAll();
        var idxArray = this.loadAll();
        
         for (var i = 0; i<idxArray.length; ++i){
             var id = idxArray[i];
            var stredTask = this.db.getId(id);
            var tokenized = stredTask.split("/");
            // console.log (tokenized[0] + +tokenized[1] + JSON.parse(tokenized[2]));
            var taski = new TaskItem( 
                +id, tokenized[0], +tokenized[1], JSON.parse(tokenized[2])
            );
            this.items.push(taski);
        }
    }

    // getTasks(): Array<TaskItem> {
    getTasks(): ObservableArray<TaskItem> {
        return this.items;
    }

    getTask(id: number): TaskItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    removeOneTask(task: TaskItem){
        this.db.removeOne(task);
        this.refreshView();
    }


    getOneRandom(){
        var tmpArray = [];
        if (this.items.length == 0){
            return 0;
        }
        this.items.forEach((e: TaskItem) => {
            if (e.isActive){
                for (let i=0; i<e.priority; ++i){
                    tmpArray.push(e.name);
                }
            }
        })
        return tmpArray[Math.floor(Math.random() * tmpArray.length)];
    }

}
