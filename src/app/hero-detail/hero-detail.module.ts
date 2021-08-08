import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HeroDetailComponent } from "./hero-detail.component";


@NgModule({
    declarations:[
        HeroDetailComponent,
    ],
    imports:[RouterModule, CommonModule ,BrowserModule,FormsModule,],
    exports:[
        HeroDetailComponent,
    ],
})
export class HeroDetailModule{

}