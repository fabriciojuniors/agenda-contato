import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalhesContatoPage } from './detalhes-contato/detalhes-contato.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalhes-contato/:id',
    loadChildren: () => import('./detalhes-contato/detalhes-contato.module').then(m => m.DetalhesContatoPageModule)
  },
  {
    path: 'cadastro-contato',
    loadChildren: () => import('./cadastro-contato/cadastro-contato.module').then( m => m.CadastroContatoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
