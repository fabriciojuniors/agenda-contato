import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListagemGruposPage } from './listagem-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: ListagemGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListagemGruposPageRoutingModule {}
