import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Telefone, TipoTelefone } from '../models/contato';
import { Grupo } from '../models/grupo';
import { ContatoService } from '../services/contato.service';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.page.html',
  styleUrls: ['./cadastro-contato.page.scss'],
})
export class CadastroContatoPage implements OnInit {
  form: FormGroup;
  telefone : Telefone = {tipo: TipoTelefone.CELULAR, telefone: null}
  telefones : Telefone[] = [];
  grupos : Grupo[];
  constructor(private formBuilder : FormBuilder, private grupoService : GrupoService, private contatoService : ContatoService, private activatedRoute : ActivatedRoute, private router : Router) {
   }
  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      apelido: [''],
      telefones: [this.telefones, Validators.minLength(1)],
      email: ['', Validators.email],
      grupo: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      informacoes: [''],
      ativo: [true],
    });

    const id = +this.activatedRoute.snapshot.params.id;
    const contato = this.contatoService.getById(id);
    if(contato){
      this.form.patchValue({
        ...contato});
      this.telefones = contato.telefones;
    }
    this.grupos = this.grupoService.getGrupos();
  }

  salvarTelefone(){
    this.telefones.push(this.telefone);
    this.telefone = {tipo: TipoTelefone.CELULAR, telefone: null};
  }

  excluirTelefone(telefone){
    this.telefones.splice(this.telefones.findIndex(tel => tel.telefone == telefone.telefone), 1);
  }

  salvar(){            
    this.contatoService.salvar({...this.form.value, telefones: this.telefones});   
    this.router.navigate(["/pagina/contatos"]);
  }

}
