import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGruposPage } from './cadastro-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroGruposPage
  },
  {
    path: ':id',
    component: CadastroGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroGruposPageRoutingModule {}
