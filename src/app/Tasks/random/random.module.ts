import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RandomRoutingModule } from "./random-routing.module";
import { RandomComponent } from "./random.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RandomRoutingModule
    ],
    declarations: [
        RandomComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RandomModule { }
