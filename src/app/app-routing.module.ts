import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './MyComponents/about/about.component';
// import { TODOsComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  // { path: '', component: TODOsComponent },
  // { path: '/about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
