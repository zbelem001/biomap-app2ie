import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { APropos } from './pages/a-propos/a-propos';
import { Contribution } from './pages/contribution/contribution';
import { DetailsEspece } from './pages/details-espece/details-espece';
import { Explorer } from './pages/explorer/explorer';
import { Stats } from './pages/stats/stats';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'explorer', component: Explorer },
  { path: 'contribution', component: Contribution },
  { path: 'details-espece', component: DetailsEspece },
  { path: 'stats', component: Stats },
  { path: 'a-propos', component: APropos },
];
