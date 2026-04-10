import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService, Todo } from './services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  todos = signal<Todo[]>([]);

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    await this.loadTodos();
  }

  async loadTodos() {
    const data = await this.todoService.getAll();
    this.todos.set(data);
  }

  async addTodo(inputElement: HTMLInputElement) {
    const title = inputElement.value.trim();
    if (!title) return;
    await this.todoService.add(title);
    inputElement.value = '';
    await this.loadTodos();
  }

  async toggleTodo(id: number) {
    await this.todoService.toggle(id);
    await this.loadTodos();
  }

  async deleteTodo(id: number) {
    await this.todoService.delete(id);
    await this.loadTodos();
  }
}
