import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { setTheme } from 'ngx-bootstrap/utils';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MateriasComponent } from './materias/materias.component';


@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    FontAwesomeModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    setTheme('bs4'); // or 'bs4'
 }

}
