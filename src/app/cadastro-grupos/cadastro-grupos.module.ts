import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroGruposPageRoutingModule } from './cadastro-grupos-routing.module';

import { CadastroGruposPage } from './cadastro-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastroGruposPageRoutingModule
  ],
  declarations: [CadastroGruposPage]
})
export class CadastroGruposPageModule {}
