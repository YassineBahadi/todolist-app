import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos!: Todo[];
  inputTodo:string="";


  constructor() {
    this.todos=[]
  }
  toggleDone(id:number){
    this.todos.map((v:Todo,i:number)=>{
      if(i==id){
        v.completed=!v.completed;
      }
    })
  }

  deleteTodo(id:number){
    // this.todos.splice(id,1);
    // this.todos= [...this.todos]; // to trigger change detection
    this.todos=this.todos.filter((v:Todo,i:number)=>i!==id);

  }
  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo="";
  }
}
