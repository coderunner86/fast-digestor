import { Component } from '@angular/core';
//import { Http } from '@angular/http';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
   
      <a routerLinkActive="active" ariaCurrentWhenActive="page"
      routerLink="./views/tasks/tasks.component">Tasks</a> 
      
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./tasks.component.css'],
})
export class TasksViewComponent {}
