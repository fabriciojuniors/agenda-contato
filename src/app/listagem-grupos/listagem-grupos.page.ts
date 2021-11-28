import { Component, OnInit } from '@angular/core';
import { Grupo } from '../models/grupo';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-listagem-grupos',
  templateUrl: './listagem-grupos.page.html',
  styleUrls: ['./listagem-grupos.page.scss'],
})
export class ListagemGruposPage implements OnInit {

  private grupos : Grupo[];
  constructor(private grupoService : GrupoService) { 
    this.getAll();
  }

  ngOnInit() {
  }

  getAll(){
    this.grupos = this.grupoService.getGrupos();
  }

  excluir(grupo){
    this.grupoService.remover(grupo.id);
    this.getAll();
  }

  async atualizar(event){
    await this.getAll();
    event.target.complete();
  }

}
