import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroContatoPageRoutingModule } from './cadastro-contato-routing.module';

import { CadastroContatoPage } from './cadastro-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroContatoPageRoutingModule
  ],
  declarations: [CadastroContatoPage]
})
export class CadastroContatoPageModule {}
