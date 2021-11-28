import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListagemGruposPageRoutingModule } from './listagem-grupos-routing.module';

import { ListagemGruposPage } from './listagem-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListagemGruposPageRoutingModule
  ],
  declarations: [ListagemGruposPage]
})
export class ListagemGruposPageModule {}
