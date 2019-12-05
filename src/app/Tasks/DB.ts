import { SecureStorage } from "nativescript-secure-storage";
import { Injectable } from '@angular/core'
import { TaskItem } from './Task'
@Injectable({
    providedIn: "root"
})
export class DBService {
    secureStorage = new SecureStorage();
    num: number = 0;

    constructor(){
        
    }

    setNum(n: number){
        //retenir le nombre qu'il y a!
        const success = this.secureStorage.setSync({
            key: "maxNum",
            value: n.toString()
        })
    }
    getNum() : number{
        return this.secureStorage.getSync({
            key:"maxNum"
        })
    }

    add(task : TaskItem){
       var taskStr : string = task.name + "/" + task.priority + "/" + task.isActive; 
       var taskId : string = task.id.toString();
       
       const success = this.secureStorage.setSync({
           key: taskId,
           value: taskStr
       });
    }

    getId(id: number) : string{
       return this.secureStorage.getSync({
            key: id.toString()
        })

    }

    getAll(lastIndex : number){
        var indexStr : Array<number> = [];
        for (let i=0; i<lastIndex; ++i){
            const value = this.secureStorage.getSync({
                        key: i.toString()
                    })
            if (value != null && value != undefined){
                indexStr.push(+i);
            }
         }
        return indexStr;
    }

    removeAll(){
        this.secureStorage.removeAll();
        this.num = 0;
    }

    removeOne(task: TaskItem){
        const success = this.secureStorage.removeSync({
            key: task.id.toString()
          });
    }

    changeOne(task: TaskItem, new_prio: number){
        var id = this.getId(task.id);
        const success = this.secureStorage.setSync({
            key: id,
            value: new_prio.toString()
        })
    }
}