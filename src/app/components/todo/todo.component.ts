import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  editingIndex: number | null = null; // Track which todo is being edited
  editedTodo: string = ''; // Store the edited todo content

  constructor() {}

  // Load todos from localStorage when the component initializes
  ngOnInit() {
    const savedTodos = localStorage.getItem('todos');
    this.todos = savedTodos ? JSON.parse(savedTodos) : [];
  }

  // Save todos to localStorage
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Toggle the completion status of a todo
  toggleDone(id: number) {
    this.todos.map((v: Todo, i: number) => {
      if (i == id) v.completed = !v.completed;
    });
    this.saveTodos(); // Save todos after toggling
  }

  // Delete a todo
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v: Todo, i: number) => i !== id);
    this.saveTodos(); // Save todos after deleting
  }

  // Add a new todo
  addTodo() {
    if (this.inputTodo.trim()) {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
      this.inputTodo = '';
      this.saveTodos(); // Save todos after adding
    }
  }

  // Start editing a todo
  startEdit(index: number, todo: Todo) {
    this.editingIndex = index;
    this.editedTodo = todo.content;
  }

  // Save the edited todo
  saveEdit(index: number) {
    if (this.editedTodo.trim()) {
      this.todos[index].content = this.editedTodo;
      this.editingIndex = null;
      this.editedTodo = '';
      this.saveTodos(); // Save todos after editing
    }
  }

  // Cancel editing
  cancelEdit() {
    this.editingIndex = null;
    this.editedTodo = '';
  }
}