import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { CistellaComponent } from './cistella/cistella.component'
import { RegistreANDLoginComponent } from './registre-andlogin/registre-andlogin.component'
import { CatalegComponent } from './cataleg/cataleg.component'
import { CondicionsComponent } from "./condicions/condicions.component";
import { IniciComponent } from "./inici/inici.component";
import { ContacteComponent} from "./contacte/contacte.component";
import { GrafiquesComponent} from "./grafiques/grafiques.component";
import { F2pComponent} from "./f2p/f2p.component";
import { PerfilComponent } from "./perfil/perfil.component";

const routes: Routes = [
  {path: 'inici', component: IniciComponent},
  {path: 'cistella', component: CistellaComponent},
  {path: 'signin', component: RegistreANDLoginComponent},
  {path: 'cataleg', component: CatalegComponent},
  {path: 'condicions', component: CondicionsComponent},
  {path: 'contacte', component: ContacteComponent},
  {path: 'grafiques',component: GrafiquesComponent},
  {path: 'f2p', component:F2pComponent},
  {path: 'perfil', component:PerfilComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
