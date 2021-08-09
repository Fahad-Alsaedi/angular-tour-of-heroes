import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations:[
       RegisterComponent
    ],
    imports:[RouterModule, CommonModule ,RegisterRoutingModule ],
    exports:[
        RegisterComponent,
    ],
})
export class RegisterModule{

}