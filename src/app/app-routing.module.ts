import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";


const routes: Routes = [
    {   
        path: "", 
        redirectTo: "/(randomTab:random/default//viewTab:view/default//addTab:add/default)",
        pathMatch: "full" 
    },
    {
        path: "random",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/Tasks/random/random.module").then((m) => m.RandomModule),
        outlet: "randomTab"
    },
    {
        path: "view",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/Tasks/view/view.module").then((m) => m.ViewModule),
        outlet: "viewTab"
    },
    {
        path: "add",
        component: NSEmptyOutletComponent,
        loadChildren: () => import ("~/app/Tasks/add/add.module").then((m) => m.AddModule),
        outlet: "addTab"
    }
   
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
