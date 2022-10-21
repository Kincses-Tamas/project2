import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';
import { TermekekComponent } from './termekek/termekek.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"index",
    pathMatch:"full"
  },
  {
    path:"index",
    component: NyitooldalComponent
  },
  {
  path:"termekek",
  component: TermekekComponent
 },
 {
  path: "kapcsolat",
  component: KapcsolatComponent
 },
 {
  path:"**",
  component:NyitooldalComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
