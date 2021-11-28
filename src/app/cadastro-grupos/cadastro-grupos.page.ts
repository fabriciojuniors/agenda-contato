import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoService } from '../services/grupo.service';

@Component({
  selector: 'app-cadastro-grupos',
  templateUrl: './cadastro-grupos.page.html',
  styleUrls: ['./cadastro-grupos.page.scss'],
})
export class CadastroGruposPage implements OnInit {

  form : FormGroup;
  constructor(private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute, private grupoService : GrupoService, private router : Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: [''],
      relevancia: [''],
      ativo: [true]
    });
    
    const id = +this.activatedRoute.snapshot.params.id;
    const grupo = this.grupoService.getById(id);
    if(grupo){
      this.form.patchValue({...grupo})
    }
  }

  salvar(){
    this.grupoService.salvar(this.form.value);
    this.router.navigate(["/pagina/grupos"]);
  }

}
