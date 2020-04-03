import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" 
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaService } from '../services/domain/categoria.service';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptors';

@NgModule({
  declarations: [
    MyApp //Pagina Principal

  ],
  imports: [ //lista de modulos que são importados por ionicModulo // um modulo
    //pode importar varios modulos
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  //Como a app vai iniciar
  bootstrap: [IonicApp],
  //Vai ser pagina tenque declarar tambem 
  entryComponents: [
    MyApp
  ],
  //providers vai declarar as classes objetos injetados para esse modulo mesma istancia
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    ErrorInterceptorProvider
  ]
})
export class AppModule {}