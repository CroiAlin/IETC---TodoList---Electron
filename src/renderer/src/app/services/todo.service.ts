import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  todo: boolean; // true = done
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private get api() {
    return (window as any).todoService;
  }

  async getAll(): Promise<Todo[]> {
    if (!this.api) return [];
    return this.api.getAll();
  }

  async add(title: string): Promise<Todo> {
    if (!this.api) return null as any;
    return this.api.add(title);
  }

  async toggle(id: number): Promise<Todo> {
    if (!this.api) return null as any;
    return this.api.toggle(id);
  }

  async delete(id: number): Promise<void> {
    if (!this.api) return;
    return this.api.delete(id);
  }
}
