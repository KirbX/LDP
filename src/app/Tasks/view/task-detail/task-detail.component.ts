import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { TaskItem, TaskService } from "../../Task";

@Component({
    selector: "TaskDetail",
    templateUrl: "./task-detail.component.html"
})
export class TaskDetailComponent implements OnInit {
    item: TaskItem;
    constructor(
        private _data: TaskService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions, 
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getTask(id);
    }
}
