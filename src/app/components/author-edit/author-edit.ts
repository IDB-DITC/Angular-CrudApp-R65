import { Component, signal, effect } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Author } from '../../models/author';
import { AuthorRepository } from '../../services/author-repository';
import { Genre } from '../../models/genre';
import { Book } from '../../models/book';
import { ImageUpload } from '../../services/image-upload';


@Component({
  selector: 'app-author-edit',
  standalone: false,
  templateUrl: './author-edit.html',
  styleUrl: './author-edit.css',
})
export class AuthorEdit {
  model = signal<Author>(new Author());
  imageUpload = signal<ImageUpload | undefined>(undefined);
  constructor(private repo: AuthorRepository, private router: Router, route: ActivatedRoute, upload: ImageUpload) {

    let id = route.snapshot.params['id'];

    repo.GetData(id).subscribe((res:Author) => {
      this.model.set(res);
      if (res.photo) {
        upload.imageData.set(res.photo);
        upload.imageName.set(res.authorName);
      }      
    })

    this.imageUpload.set(upload);

   
  }

  SaveData() {
    this.repo.UpdateData(this.model()).subscribe(() => {
      this.router.navigate(["index"]);
    })
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

}
