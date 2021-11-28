import { Injectable } from '@angular/core';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private grupos : Grupo[]
  private contador = 4;
  constructor() { 
    this.grupos = [
      {
        id: 1,
        nome: 'Familia',
        descricao: 'Contato de uma pessoa membro da familia',
        ativo: true
      },
      {
        id: 2,
        nome: 'Amigos',
        descricao: 'Contato de um amigo',
        ativo: true
      },
      {
        id: 3,
        nome: 'Trabalho',
        descricao: 'Contato de uma pessoa do trabalho',
        ativo: true
      }
    ]
  }

  public getGrupos(){
    return this.grupos.filter(grupo => grupo.ativo);
  }

  public remover(id){
    this.grupos = this.grupos.filter(grupo => grupo.id != id);
  }

  public salvar(grupo : Grupo){
    if(grupo.id){
      const index = this.grupos.findIndex(g => g.id == grupo.id);
      this.grupos[index] = grupo;
    }else{
      const id = this.contador++;
      this.grupos.push({...grupo, id});
    }
  }

  public getById(id: number){
    return this.grupos.find(grupo => grupo.id === id);
  }

}
