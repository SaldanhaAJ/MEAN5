import { Component} from '@angular/core';
import { FilePreviewOverlayService } from './file-preview-overlay.service';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';

@Component({
  selector: 'app-index-overlays',
  templateUrl: './index-overlays.component.html',
  styleUrls: ['./index-overlays.component.css']
})
export class IndexOverlaysComponent  {

  files = [
    { name: 'image_1.jpg', path: '' },
    { name: 'image_2.jpg', path: '' },
    { name: 'image_3.jpg', path: '' },
    { name: 'image_4.jpg', path: '' },
    { name: 'image_5.jpg', path: '' }
  ]

constructor(private previewDialog: FilePreviewOverlayService) { }

/*
showPreview() {
  this.previewDialog.open();
}
*/

showPreview() {
  let dialogRef: FilePreviewOverlayRef = this.previewDialog.open();

  setTimeout(() => {
    dialogRef.close();
  }, 2000);
}

}
