import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DiscoveryComponent} from './discovery.component';


const routes: Routes = [
  {path: '', redirectTo: '/discovery', pathMatch: 'full'},
  {path: 'discovery', component: DiscoveryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}