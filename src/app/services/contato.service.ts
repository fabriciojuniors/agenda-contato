import { Injectable } from '@angular/core';
import { Contato, TipoTelefone } from '../models/contato';
import { Grupo } from '../models/grupo';
import { GrupoService } from './grupo.service';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos: Contato[] = [];
  private contador = 1;
  constructor() {
  }

  public getContatos(){
    return this.contatos.filter(contato => contato.ativo).sort((a, b) => {
      if(a.nome < b.nome) { return -1; }
      if(a.nome > b.nome) { return 1; }
      return 0;
    });
  }

  public filtrar(filtro){
    return this.contatos.filter(contato => contato.ativo && (contato.nome.includes(filtro) || contato.sobrenome.includes(filtro))).sort((a, b) => {
      if(a.nome < b.nome) { return -1; }
      if(a.nome > b.nome) { return 1; }
      return 0;
    });
  }

  public remover(id){
    this.contatos = this.contatos.filter(contato => contato.id != id);
  }

  public salvar(contato : Contato){
    if(contato.id){
      const index = this.contatos.findIndex(c => c.id == contato.id);
      this.contatos[index] = contato;
    }else{
      const id = this.contador++;
      this.contatos.push({...contato, id});
    }
  }

  public getById(id: number){
    return this.contatos.find(contato => contato.id === id);
  }

  public getByGrupo(grupo: Grupo){
    return this.contatos.filter(contato => contato.grupo == grupo)
  }
}
