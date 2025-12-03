import { Component,  signal} from '@angular/core';
import { Author } from '../../models/author';
import { AuthorRepository } from '../../services/author-repository';

@Component({
  selector: 'app-author-index',
  standalone: false,
  templateUrl: './author-index.html',
  styleUrl: './author-index.css'
  //changeDetection: ChangeDetectionStrategy.Default
})
export class AuthorIndex {
  //data: Author[] = [];
  data = signal<Author[]>([]);

  //dataList = this.data();


  //displayedColumns = ["id, authorName"];
  constructor(
    private repo: AuthorRepository
    //, private cdr: ChangeDetectorRef
  )
  {
    this.loadData();
  } 

  loadData() {
    this.repo.GetAllData().subscribe((res: Author[]) => {
      //this.data = res;
      //console.log(res);
      this.data.set(res);
      console.log(this.data());
      //this.cdr.markForCheck();
      //this.dataList = this.data();
    })
  }

  DeleteData(id: number) {
    var flag = confirm("Confirm Delete?");

    if (!flag) return;
    this.repo.RemoveData(id).subscribe(() => {
      this.loadData();
      //this.cdr.markForCheck();
    })
  }


}
