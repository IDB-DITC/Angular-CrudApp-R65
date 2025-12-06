import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileDownload {

  public FileObject(base64String: string,  fileName: string) {
    const linkSource = base64String;
    const downloadLink = document.createElement("a");
    //const fileName = "convertedPDFFile.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }




}
