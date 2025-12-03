import { Author } from "./author";
import { Genre } from "./genre";

export class Book {
  isbn: string ='';
  title: string = '';
  available: boolean = true;
  edition: number = 1;
  genre: Genre = Genre.Biography;
  //authorId: number = 0;
  publishDate?: Date = new Date();

  //author?: Author;
}
