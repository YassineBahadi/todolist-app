import { Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo.component';


@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todolist-app';
}
