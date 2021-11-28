import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from '../models/contato';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.page.html',
  styleUrls: ['./detalhes-contato.page.scss'],
})
export class DetalhesContatoPage implements OnInit {
  private contato: Contato;
  constructor(private contatoService: ContatoService, private activatedRoute: ActivatedRoute, private alertController: AlertController, private router : Router) {
    let id = activatedRoute.snapshot.params.id;
    this.contato = contatoService.getById(+id);
  }

  ngOnInit() {
  }

  async excluir() {
    const alert = await this.alertController.create({
      animated: true,
      message: `Confirma a exclusão do contato ${this.contato.nome}`,
      buttons: [{
        text: 'Sim',
        handler: () => {
          this.contatoService.remover(this.contato.id);
          this.router.navigate(["/pagina/contatos"])
        }
      },
      {
        text: 'Não',
        role: 'cancel'
      }]
    });

    return await alert.present();
  }

}
