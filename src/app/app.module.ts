import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RecaptchaComponent, RecaptchaModule} from "ng-recaptcha";
import { AppComponent } from './app.component';
import { TitolLogoComponent } from './titol-logo/titol-logo.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CistellaComponent } from './cistella/cistella.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistreANDLoginComponent } from './registre-andlogin/registre-andlogin.component';
import { CatalegComponent } from './cataleg/cataleg.component';
import { CondicionsComponent } from './condicions/condicions.component';
import { IniciComponent } from './inici/inici.component';
import { ContacteComponent } from './contacte/contacte.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { GrafiquesComponent } from './grafiques/grafiques.component';
import { F2pComponent } from './f2p/f2p.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    TitolLogoComponent,
    MenuComponent,
    FooterComponent,
    CistellaComponent,
    RegistreANDLoginComponent,
    CistellaComponent,
    CatalegComponent,
    CondicionsComponent,
    IniciComponent,
    ContacteComponent,
    GrafiquesComponent,
    F2pComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecaptchaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
