import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  url='http://localhost:8000'
  setUrl='http://localhost:8000/add/'
  putUrl='http://localhost:8000/edit/'
  deleteUrl='http://localhost:8000/delete/'
  public listaTareas: any[] = [];
  constructor(private http:HttpClient) {}

   getList(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
   }

   addTarea(tarea: Tarea):Observable<Tarea>{
     return this.http.post<Tarea>(this.setUrl,tarea);
   }

   editTarea(tarea: Tarea):Observable<Tarea>{
    return this.http.put<Tarea>(this.putUrl,tarea);
  }

  delete( id:number):Observable<Tarea>{

    return this.http.delete<Tarea>(this.deleteUrl+id);
  }


}
