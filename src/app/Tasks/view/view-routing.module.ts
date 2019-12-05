import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ViewComponent } from "./view.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component"
const routes: Routes = [
    { path: "default", component: ViewComponent },
    { path: "item/:id", component: TaskDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ViewRoutingModule { }
