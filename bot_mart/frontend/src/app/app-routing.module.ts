import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreListComponent }  from './components/core-list/core-list.component';

const routes: Routes = [
  { path : '/:id', component: CoreListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
