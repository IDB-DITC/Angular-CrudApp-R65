import { Component, signal, effect } from '@angular/core';
import { Author } from '../../models/author';
import { AuthorRepository } from '../../services/author-repository';
import { Router } from '@angular/router';
import { Genre, GenreList } from '../../models/genre';
import { Book } from '../../models/book';
import { ImageUpload } from '../../services/image-upload';
import { NgModel, ValidationErrors } from '@angular/forms';
import { ValidationHelper } from '../../services/validation-helper';

@Component({
  selector: 'app-author-create',
  standalone: false,
  templateUrl: './author-create.html',
  styleUrl: './author-create.css',
})
export class AuthorCreate {
  model = signal<Author>(new Author());
  imageUpload = signal<ImageUpload | undefined>(undefined);
  constructor(private repo: AuthorRepository, private router: Router, upload: ImageUpload, public ValidationHelper: ValidationHelper) {
    this.imageUpload.set(upload);
  }

  SaveData() {
    this.repo.PostData(this.model()).subscribe(() => {
      this.router.navigate(["index"]);
    },
      (err: Error) => {
        alert(JSON.stringify(err));
        console.error(err);
      });
  }
  goToIndex() {
    this.router.navigate(["index"]);
  }

  selectListsData = Object.values(Genre).filter(value => typeof value !== 'number');

  addNew() {
    this.model().books.push(new Book());
  }

  removeBook(idx: number) {
    var removed = this.model().books.splice(idx, 1);
  }

  async uploadImage(imageInput: any) {

    var file: File = imageInput.files[0];
    if (file.size > 200 * 1024) {
      alert('max allowed size is 200KB');
      return;
    }
    await this.imageUpload()?.getBase64(file);

    //alert(this.imageUpload()?.imageData())
    this.model().photo = this.imageUpload()?.imageData();

  }

  uploadEffect = effect(() => {
    if (this.imageUpload())
      this.model().photo = this.imageUpload()?.imageData();
    //alert(this.model().photo);
  });


  //uploadImage(evt:Event) {
  //  alert('test')
  //  var file: File = evt.target.files[0];
  //  if (file.size > 200 * 1024) {
  //    alert('max allowed size is 200KB');
  //    return;
  //  }
  //  this.imageUpload.getBase64(file);

  //  alert(this.imageUpload.imageData)
  //  this.model().photo = this.imageUpload.imageData;

  //}

 

}
