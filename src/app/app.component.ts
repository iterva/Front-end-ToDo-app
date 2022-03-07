import { Component, OnInit } from '@angular/core';
import { Tarea } from './Todo';
import {TareaService} from './services/tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{
  title = 'ToDoList-App';
  tareas: Tarea[] = [];
  newTarea: string;
  public inputTarea = "";
  public tarea:Array<any> = []

ngOnInit() {
  this.tareaService.getList()
}
 
  constructor(private tareaService:TareaService){
    this.tareaService.getList().subscribe( (resp: any )=> {
      this.tarea = resp
    })
  }
//funcion para enviar POST a la api de python
  saveTarea(tarea:string){
    const newTarea = {
      
      name:tarea,
      isCompleted:true
     
  }
  this.tareaService.addTarea(newTarea).subscribe(tarea=> this.tarea.push(newTarea))
  this.tareaService.getList().subscribe( (resp: any )=> {
    this.tarea = resp
  })
   }
 

  edit(tarea:string, id:number){
    const newTarea = {
     id:id,
      name:tarea,
      isCompleted:true
     
  }
  this.tareaService.editTarea(newTarea).subscribe()
  this.tareaService.getList().subscribe( (resp: any )=> {
    this.tarea = resp
  })
   }


   remove(id:number){
    
  this.tareaService.delete(id).subscribe()
  this.tareaService.getList().subscribe( (resp: any )=> {
    this.tarea = resp
  })
   }
  

 
}


