import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProduitComponent } from './produit/produit.component';
import { NOTfoundComponent } from './notfound/notfound.component';

import { AddComponent } from './add/add.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path:'',redirectTo:'home', pathMatch:'full'},
  { path :'home', component: HomeComponent},
  { path :'list', component: ListComponent},
  { path :'product', component: ProduitComponent},
  { path :'product/detail/:id', component: DetailComponent},
  { path :'product/add', component: AddComponent},
  { path :'**', component: NOTfoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
