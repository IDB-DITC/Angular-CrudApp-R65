import { Book } from "./book";

export class Author {
  id: number = 0;
  authorName: string = '';
  photo?: string;
  books: Book[] = []; 


}
