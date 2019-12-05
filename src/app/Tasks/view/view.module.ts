import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ViewRoutingModule } from "./view-routing.module";
import { ViewComponent } from "./view.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component"
@NgModule({
    imports: [
        NativeScriptCommonModule,
        ViewRoutingModule
    ],
    declarations: [
        ViewComponent,
        TaskDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewModule { }
