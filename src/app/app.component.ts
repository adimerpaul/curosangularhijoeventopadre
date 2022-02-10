import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'disparoeventos';
  mensaje=''
  actulizar(t:number){
    this.mensaje=t+' se actualiza cada 10 segundos '
  }
}
