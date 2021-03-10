import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PrincipalPage } from '../principal/principal.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'principal',
    component: PrincipalPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
