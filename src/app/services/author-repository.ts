import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorRepository {
  api: string = "http://localhost:5045/api/author/";

  constructor(private httpClient: HttpClient) {

  }

  GetAllData() {
    return this.httpClient.get<Author[]>(this.api );
  }
  PostData(model: Author) {
    return this.httpClient.post<Author>(this.api , model);
  }
  GetData(id: number) {
    return this.httpClient.get<Author>(this.api  + id);
  }
  UpdateData(model: Author) {
    return this.httpClient.put<Author>(this.api  + model.id, model);
  }
  RemoveData(id: number) {
    return this.httpClient.delete<Author>(this.api + id);
  }

  options: any = {
    responseType: 'text'
  }


  GetReport() {
    return this.httpClient.get(this.api + "report", { responseType: 'text' });
  }
}
