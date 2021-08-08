import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroSearchComponent } from "../hero-search/hero-search.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    declarations:[
        DashboardComponent,
        HeroSearchComponent
    ],
    imports:[RouterModule, CommonModule ,DashboardRoutingModule ],
    exports:[
        DashboardComponent,
    ],
})
export class DashboardModule{

}