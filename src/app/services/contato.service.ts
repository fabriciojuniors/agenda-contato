import { Injectable } from '@angular/core';
import { Contato, TipoTelefone } from '../models/contato';
import { GrupoService } from './grupo.service';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos: Contato[];
  private contador = 3;
  constructor(private grupoService : GrupoService) {
    this.contatos = [
      {
        id: 1,
        nome: 'Jonas',
        sobrenome: 'Abreu',
        apelido: '',
        data_nascimento: new Date(2000, 10, 25),
        email: 'jonas_abreu@gmail.com',
        grupo: grupoService.getById(1),
        telefones: [{
          telefone: '(48) 9999-8888',
          tipo: TipoTelefone.CELULAR
        },
        {
          telefone: '(48) 8745-6523',
          tipo: TipoTelefone.EMPRESARIAL
        }],
        informacoes: '',
        ativo: true
      },
      {
        id: 2,
        nome: 'Antonia',
        sobrenome: 'Abreu',
        apelido: '',
        data_nascimento: new Date(2000, 10, 25),
        email: 'jonas_abreu@gmail.com',
        grupo: grupoService.getById(1),
        telefones: [{
          telefone: '(48) 9999-8888',
          tipo: TipoTelefone.CELULAR
        }],
        informacoes: '',
        ativo: true
      }]
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
}
