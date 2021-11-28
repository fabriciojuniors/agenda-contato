import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  private contatos = [];
  private filtro = "";
  constructor(private contatoService: ContatoService, private router : Router) {
  }

  ngOnInit(): void {
    this.getContatos();
  }

  getContatos() {
    this.contatos = [];
    let contatos = this.contatoService.getContatos();
    let ultimo = null;

    for (let i = 0; i < contatos.length; i++) {
      const contato = contatos[i];

      if (!ultimo || ultimo != contato.nome[0]) {
        ultimo = contato.nome[0];
        this.contatos.push({ key: ultimo, contatos: [] });
      }

      this.contatos[this.contatos.length - 1].contatos.push(contato);
    }
  }

  async abrirDetalhes(id: number){
    this.router.navigate(["/detalhes-contato", id]);
  }

  async atualizar(event){
    await this.getContatos();
    event.target.complete();
  }

  filtrar(){
    this.contatos = [];
    let contatos = this.contatoService.filtrar(this.filtro);
    let ultimo = null;

    for (let i = 0; i < contatos.length; i++) {
      const contato = contatos[i];

      if (!ultimo || ultimo != contato.nome[0]) {
        ultimo = contato.nome[0];
        this.contatos.push({ key: ultimo, contatos: [] });
      }

      this.contatos[this.contatos.length - 1].contatos.push(contato);
    }

  }

}
