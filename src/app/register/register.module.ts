import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";

@NgModule({
    declarations:[
       RegisterComponent
    ],
    imports:[
        RouterModule, 
        CommonModule,
        RegisterRoutingModule,
        FormsModule,],
    exports:[
        RegisterComponent,
    ],
})
export class RegisterModule{

}