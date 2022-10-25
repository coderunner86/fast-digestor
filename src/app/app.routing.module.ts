import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TasksViewComponent } from './views/tasks/tasks.component';

@NgModule({
  declarations: [TasksViewComponent],
  imports: [
    RouterModule.forRoot([{ path: 'tasks', component: TasksViewComponent }]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
