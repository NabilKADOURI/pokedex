import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PictureComponent } from './picture/picture.component';
import { FormationComponent } from './formation/formation.component';
import { ExoTypescriptComponent } from './exo-typescript/exo-typescript.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ExoAlgoComponent } from './exo-algo/exo-algo.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { Error404Component } from './error404/error404.component';


export const routes: Routes = [

  { path:'',component: HomeComponent},
  { path:'about',component: AboutComponent},
  { path:'contact',component: ContactComponent},
  { path:'picture',component: PictureComponent},
  { path:'formation',component: FormationComponent},
  { path:'typescript',component: ExoTypescriptComponent},
  { path:'pokemon',component: PokemonComponent},
  { path:'pokemon/:id',component: PokemonDetailComponent},
  { path:'algo',component: ExoAlgoComponent},
  {path : '**',component: Error404Component}
  
];
