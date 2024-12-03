import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'commande',
        loadChildren: () => import('../commande/commande.module').then(m => m.CommandePageModule)
      },
      {
        path: 'catalogue',
        loadChildren: () => import('../catalogue/catalogue.module').then(m => m.CataloguePageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then(m => m.ProfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/commande',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/commande',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
