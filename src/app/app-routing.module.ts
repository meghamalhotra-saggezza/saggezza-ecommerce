import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeaComponent } from './tea/tea.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'teaproducts',component:TeaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
