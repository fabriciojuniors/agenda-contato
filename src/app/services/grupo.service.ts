import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Grupo, Relevancia } from '../models/grupo';
import { ContatoService } from './contato.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private grupos : Grupo[]
  private contador = 4;
  constructor(private contatoServive : ContatoService, private toastController : ToastController) { 
    this.grupos = [
      {
        id: 1,
        nome: 'Familia',
        descricao: 'Contato de uma pessoa membro da familia',
        ativo: true,
        relevancia: Relevancia.ALTA
      },
      {
        id: 2,
        nome: 'Amigos',
        descricao: 'Contato de um amigo',
        ativo: true,
        relevancia: Relevancia.MEIDA
      },
      {
        id: 3,
        nome: 'Trabalho',
        descricao: 'Contato de uma pessoa do trabalho',
        ativo: true,
        relevancia: Relevancia.ALTA
      }
    ]
  }

  public getGrupos(){
    return this.grupos.filter(grupo => grupo.ativo);
  }

  public async remover(id){
    const grupo = this.getById(id);
    const contatos = this.contatoServive.getByGrupo(grupo);
    if(contatos.length > 0){
      const toast = await this.toastController.create({
        animated: true,
        message: "O grupo não pode ser excluído pois existe contatos vinculados.",
        duration: 3000
      });
      return await toast.present();
    }else{
      this.grupos = this.grupos.filter(grupo => grupo.id != id);
    }
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
