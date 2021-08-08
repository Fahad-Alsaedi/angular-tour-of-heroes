import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroesRoutingModule } from "./heroes-routing.module";
import { HeroesComponent } from "./heroes.component";

@NgModule({
    declarations:[
        HeroesComponent,
    ],
    imports:[RouterModule,CommonModule ,HeroesRoutingModule],
    exports:[
        HeroesComponent,
    ]
    
})
export class HeroesModule{

}