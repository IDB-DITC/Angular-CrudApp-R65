import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUpload {

  public imageData = signal<string | undefined>(undefined);
  public imageName = signal<string | undefined>(undefined);

  public async getBase64(file: File) {
    var reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageData.set(e.target.result as string);
      this.imageName.set(file.name);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
      return error;
    };
    await reader.readAsDataURL(file);
  }


}
