import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { identifierName} from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] =[] as Todo[];


  constructor() {
   }
   addTodo(){
    
    let todo=(document.getElementById('inputData')as HTMLInputElement).value,
     id =  Math.round(Math.random() * 100),
     Obj ={id: id, todoName: todo};
    
    this. todos.push(Obj);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    //  console.log("array is.....", this.todos);
    console.log(this.todos)
   }
  
   deleteTodo(id: number){
    debugger
    let newTodo= this.todos.filter(obj=>obj.id !==id);
    this.todos = newTodo;
    localStorage.setItem('todos', JSON.stringify(this.todos));

   }
   editTodo(id:number, val:string){
    this.todos.forEach((obj) => {
      if (obj.id ===id){
        obj.todoName = val;
      }
    })
    localStorage.setItem('todos', JSON.stringify(this.todos));
   }

}
