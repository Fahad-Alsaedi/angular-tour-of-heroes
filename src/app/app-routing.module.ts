import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', loadChildren:()=> import('./heroes/heroes.module')
                                          .then(module => module.HeroesModule) },

  { path: 'dashboard', loadChildren:()=> import('./dashboard/dashboard.module')
                                          .then(module => module.DashboardModule) },

                                         

                                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
