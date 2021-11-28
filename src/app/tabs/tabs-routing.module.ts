import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pagina',
    component: TabsPage,
    children: [
      {
        path: 'contatos',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'grupos',
        loadChildren: () => import('../listagem-grupos/listagem-grupos.module').then(m => m.ListagemGruposPageModule)
      },
      {
        path: '',
        redirectTo: '/pagina/contatos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pagina/contatos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
