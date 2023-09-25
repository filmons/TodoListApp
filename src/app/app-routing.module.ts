import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full' }, // Redirect to 'task' component
  { path: 'task', component: TaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
