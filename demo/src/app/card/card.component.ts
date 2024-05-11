import { Component,Input , inject} from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  todoServise:TodoService=inject(TodoService)
  @Input() todoName:string='';
  @Input() id: number= 0;

  isEdit: boolean= false;

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  save(){
    let new_value =(document.getElementById(String(this.id)) as HTMLInputElement).value;
    this.todoServise.editTodo(this.id,new_value);
    this.toggleEdit();

  }
  cancel(){

  }
}
