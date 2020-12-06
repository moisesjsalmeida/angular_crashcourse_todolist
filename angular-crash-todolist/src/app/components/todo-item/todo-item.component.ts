import { Component, Input, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() editMode: boolean = false;

  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo: Todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.editTodo(todo).subscribe(todo => console.log(todo));
  }

  onEdit(todo: Todo) {
    this.todoService.editTodo(todo).subscribe(todo => console.log(todo));
    this.editTodo.emit(todo);
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
