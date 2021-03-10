import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  //Para receber os dados dos input's
  name:string



  constructor(public alertController: AlertController,private router: Router) {}

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Submissao',
      message: 'Deseja Continuar??',
      buttons: [
        {
            text: 'Yes',
            handler: () => {
                console.log("Bem Vindo, " + this.name)
                this.router.navigate(['/principal'])
            }
        }, {
            text: 'No',
            handler: () => {
              console.log('Clickei Nao !!')
            }
        }
    ]
    });

    await alert.present();
  }


  //Alerta
  alert() {
    this.presentAlertMultipleButtons()
  }
}
