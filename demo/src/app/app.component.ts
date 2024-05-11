import { Component, inject } from '@angular/core';
import { CardComponent, } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  todoService: TodoService = inject(TodoService);
  
  constructor(){
    this.todoService.todos =JSON.parse(localStorage.getItem('todos') || '');
  }
}
