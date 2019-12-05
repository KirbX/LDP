import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module"; 
import { AddRoutingModule } from "./add-routing.module";
import { AddComponent } from "./add.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AddRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AddComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddModule { 

    

}
